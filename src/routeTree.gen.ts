/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PricingLazyImport = createFileRoute('/pricing')()
const FeaturesLazyImport = createFileRoute('/features')()
const BlogLazyImport = createFileRoute('/blog')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PricingLazyRoute = PricingLazyImport.update({
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/pricing.lazy').then((d) => d.Route))

const FeaturesLazyRoute = FeaturesLazyImport.update({
  path: '/features',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/features.lazy').then((d) => d.Route))

const BlogLazyRoute = BlogLazyImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/blog.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogLazyImport
      parentRoute: typeof rootRoute
    }
    '/features': {
      id: '/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof FeaturesLazyImport
      parentRoute: typeof rootRoute
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  BlogLazyRoute,
  FeaturesLazyRoute,
  PricingLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog",
        "/features",
        "/pricing"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/blog": {
      "filePath": "blog.lazy.tsx"
    },
    "/features": {
      "filePath": "features.lazy.tsx"
    },
    "/pricing": {
      "filePath": "pricing.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
