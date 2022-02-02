const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Lampas',
    description: 'Lampalink UI components',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/patrik/projects/lampalink/lampas/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Lampas',
        description: 'Lampalink UI components',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/patrik/projects/lampalink/lampas',
          templates:
            '/Users/patrik/projects/lampalink/lampas/node_modules/docz-core/dist/templates',
          docz: '/Users/patrik/projects/lampalink/lampas/.docz',
          cache: '/Users/patrik/projects/lampalink/lampas/.docz/.cache',
          app: '/Users/patrik/projects/lampalink/lampas/.docz/app',
          appPackageJson:
            '/Users/patrik/projects/lampalink/lampas/package.json',
          appTsConfig: '/Users/patrik/projects/lampalink/lampas/tsconfig.json',
          gatsbyConfig:
            '/Users/patrik/projects/lampalink/lampas/gatsby-config.js',
          gatsbyBrowser:
            '/Users/patrik/projects/lampalink/lampas/gatsby-browser.js',
          gatsbyNode: '/Users/patrik/projects/lampalink/lampas/gatsby-node.js',
          gatsbySSR: '/Users/patrik/projects/lampalink/lampas/gatsby-ssr.js',
          importsJs:
            '/Users/patrik/projects/lampalink/lampas/.docz/app/imports.js',
          rootJs: '/Users/patrik/projects/lampalink/lampas/.docz/app/root.jsx',
          indexJs:
            '/Users/patrik/projects/lampalink/lampas/.docz/app/index.jsx',
          indexHtml:
            '/Users/patrik/projects/lampalink/lampas/.docz/app/index.html',
          db: '/Users/patrik/projects/lampalink/lampas/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
