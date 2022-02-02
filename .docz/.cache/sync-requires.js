

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": (preferDefault(require("/Users/patrik/projects/lampalink/lampas/.docz/.cache/dev-404-page.js"))),
  "component---docs-link-mdx": (preferDefault(require("/Users/patrik/projects/lampalink/lampas/docs/link.mdx"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/patrik/projects/lampalink/lampas/.docz/src/pages/404.js")))
}

