"use server";

import { revalidatePath } from "next/cache";
import { createSessionClient, createAdminClient } from "@/lib/supabase/server";
import { postSchema, type PostInput } from "@/lib/validations/post";

export async function createPostAction(input: PostInput) {
  try {
    const validated = postSchema.parse(input);

    // Verify session
    const sessionClient = await createSessionClient();
    const {
      data: { user },
      error: authError,
    } = await sessionClient.auth.getUser();

    if (authError || !user) {
      return { success: false, error: "Unauthorized. Please sign in." };
    }

    const adminClient = createAdminClient();

    const newRecord = {
      title: validated.title,
      slug: validated.slug,
      content: validated.content,
      meta_description: validated.meta_description || null,
      cover_image_url: validated.cover_image_url || null,
      author: validated.author || "Growth Service Team",
      tags: validated.tags,
      status: validated.status,
      source: validated.source,
      published_at:
        validated.status === "published" ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await adminClient
      .from("posts")
      .insert(newRecord)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "A post with this slug already exists. Please customize the slug.",
        };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug}`);
    revalidatePath("/sitemap.xml");

    return { success: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create post";
    return { success: false, error: message };
  }
}

export async function updatePostAction(id: string, input: PostInput) {
  try {
    const validated = postSchema.parse(input);

    const sessionClient = await createSessionClient();
    const {
      data: { user },
      error: authError,
    } = await sessionClient.auth.getUser();

    if (authError || !user) {
      return { success: false, error: "Unauthorized. Please sign in." };
    }

    const adminClient = createAdminClient();

    // Fetch existing post to handle published_at logic
    const { data: existing } = await adminClient
      .from("posts")
      .select("status, published_at")
      .eq("id", id)
      .single();

    let published_at = existing?.published_at;
    if (validated.status === "published" && !published_at) {
      published_at = new Date().toISOString();
    } else if (validated.status === "draft") {
      published_at = null;
    }

    const updates = {
      title: validated.title,
      slug: validated.slug,
      content: validated.content,
      meta_description: validated.meta_description || null,
      cover_image_url: validated.cover_image_url || null,
      author: validated.author,
      tags: validated.tags,
      status: validated.status,
      source: validated.source,
      published_at,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await adminClient
      .from("posts")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          error: "A post with this slug already exists. Please choose a different slug.",
        };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath(`/admin/blog/${id}/edit`);
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug}`);
    revalidatePath("/sitemap.xml");

    return { success: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update post";
    return { success: false, error: message };
  }
}

export async function deletePostAction(id: string) {
  try {
    const sessionClient = await createSessionClient();
    const {
      data: { user },
      error: authError,
    } = await sessionClient.auth.getUser();

    if (authError || !user) {
      return { success: false, error: "Unauthorized. Please sign in." };
    }

    const adminClient = createAdminClient();

    const { data: post } = await adminClient
      .from("posts")
      .select("slug")
      .eq("id", id)
      .single();

    const { error } = await adminClient.from("posts").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    if (post?.slug) {
      revalidatePath(`/blog/${post.slug}`);
    }
    revalidatePath("/sitemap.xml");

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to delete post";
    return { success: false, error: message };
  }
}
