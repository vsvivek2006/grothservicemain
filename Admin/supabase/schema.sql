-- Growth Service Blog & Admin — Database Schema
-- Matches database-and-ai-policy.md Section 5

create extension if not exists "pgcrypto";

create type post_status as enum ('draft', 'published');
create type post_source as enum ('manual', 'ai', 'ai-edited');

create table posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null default '',
  meta_description text,
  cover_image_url text,
  author text not null default 'Growth Service Team',
  tags text[] not null default '{}',
  status post_status not null default 'draft',
  source post_source not null default 'manual',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index posts_status_idx on posts (status);
create index posts_published_at_idx on posts (published_at desc);

-- Row Level Security
alter table posts enable row level security;

-- Public (anon) can only read published posts
create policy "Public can read published posts"
  on posts for select
  using (status = 'published');

-- Any authenticated Supabase user has full access.
-- Assumption: the ONLY Supabase Auth accounts in this project belong to
-- trusted admins — there is no public sign-up flow. If that ever changes,
-- this policy must be tightened (e.g. custom role/claim check).
create policy "Authenticated admins have full access"
  on posts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket setup for blog cover images
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

create policy "Public Access to Blog Images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

create policy "Authenticated Admins can upload blog images"
  on storage.objects for insert
  with check (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "Authenticated Admins can update blog images"
  on storage.objects for update
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "Authenticated Admins can delete blog images"
  on storage.objects for delete
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');
