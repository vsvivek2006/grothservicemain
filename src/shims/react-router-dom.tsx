"use client";

import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter, useParams as useNextParams } from 'next/navigation';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  href?: string;
  replace?: boolean;
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, children, ...props }, ref) => {
    const destination = to || href || '#';
    return (
      <NextLink ref={ref} href={destination} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = 'RouterShimLink';

export interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string | ((props: { isActive: boolean; isPending?: boolean }) => string);
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, href, className, children, ...props }, ref) => {
    const pathname = usePathname();
    const destination = to || href || '#';
    const isActive = pathname === destination;
    const computedClassName =
      typeof className === 'function'
        ? className({ isActive, isPending: false })
        : className;

    return (
      <NextLink
        ref={ref}
        href={destination}
        className={computedClassName}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);
NavLink.displayName = 'RouterShimNavLink';

export function useLocation() {
  const pathname = usePathname();
  return {
    pathname: pathname || '/',
    search: '',
    hash: '',
    state: null,
    key: 'default',
  };
}

export function useNavigate() {
  const router = useRouter();
  return React.useCallback(
    (to: string | number, options?: { replace?: boolean }) => {
      if (typeof to === 'number') {
        if (to === -1) router.back();
      } else {
        if (options?.replace) {
          router.replace(to);
        } else {
          router.push(to);
        }
      }
    },
    [router]
  );
}

export function useParams<
  T extends Record<string, string | string[] | undefined> = Record<string, string>
>() {
  return (useNextParams() || {}) as T;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [router, to, replace]);
  return null;
}

const routerShim = {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
};

export default routerShim;
