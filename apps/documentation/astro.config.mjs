import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

/**
 * A Vite plugin that removes `.md` extensions from URLs during the build process.
 *
 * This plugin is useful when working with Markdown files in a static site generator
 * like Astro or Vite. It allows URLs to be served without the `.md` extension in
 * the final build, making the URLs cleaner (e.g., `/docs/page` instead of `/docs/page.md`).
 *
 * ## Example Usage
 * ```js
 * import { defineConfig } from 'astro/config';
 *
 * export default defineConfig({
 *   vite: {
 *     plugins: [removeMdExtension()],
 *   },
 * });
 * ```
 *
 * @typedef {object} VitePlugin
 * @property {string} name - The name of the plugin, in this case, `remove-md-extension`.
 * @property {string} enforce - Specifies the plugin's enforcement stage, set to `pre`
 * to ensure that this plugin runs before other transformations during the build.
 * @property {function} transform - The function that processes each file, removing
 * `.md` extensions from the file content. It is called on every file during the build process.
 *
 * @returns {VitePlugin} A Vite-compatible plugin object that contains the `name`,
 * `enforce`, and `transform` properties, implementing the plugin functionality.
 *
 * ## Vite Plugin Object Structure
 * - `name`: The name of the plugin (`remove-md-extension`).
 * - `enforce`: Ensures the plugin runs early (`pre` stage).
 * - `transform(code: string, id: string): string`: The function that processes the content of `.md` files.
 *
 * @param {string} code - The content of the file being processed (e.g., the raw Markdown).
 * @param {string} id - The file identifier (usually the file path), used to check if the file ends in `.md`.
 * @returns {string} The modified file content, with any `.md` extensions in URLs removed.
 */
function removeMdExtension() {
    return {
        name: 'remove-md-extension',
        enforce: 'pre',
        transform(code, id) {
            if (id.endsWith('.md')) {
                return code.replace(/\.md/g, '');
            }
            return code;
        },
    };
};

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'RealWorld',
        social: {
            github: 'https://github.com/gothinkster/realworld'
        },
        customCss: [
            './src/tailwind.css',
        ],
        sidebar: [
            {
                label: 'Implementation creation',
                items: [
                    {
                        label: 'Introduction',
                        slug: 'implementation-creation/introduction',
                    },
                    {
                        label: 'Features',
                        slug: 'implementation-creation/features',
                    },
                    {
                        label: 'Expectations',
                        slug: 'implementation-creation/expectations',
                    }

                ]
            },
            {
                label: 'Specifications',
                items: [
                    {
                        label: 'Frontend specifications',
                        items: [
                            {
                                label: 'Templates',
                                slug: 'specifications/frontend/templates',
                            },
                            {
                              label: 'Styles',
                                slug: 'specifications/frontend/styles',
                            },
                            {
                                label: 'Routing',
                                slug: 'specifications/frontend/routing',
                            },
                            {
                                label: 'API',
                                slug: 'specifications/frontend/api',
                            },
                            {
                                label: 'Tests',
                                slug: 'specifications/frontend/tests',
                            }
                        ]
                    },
                    {
                        label: 'Backend specifications',
                        items: [
                            {
                                label: 'Introduction',
                                slug: 'specifications/backend/introduction',
                            },
                            {
                                label: 'Endpoints',
                                slug: 'specifications/backend/endpoints',
                            },
                            {
                                label: 'API response format',
                                slug: 'specifications/backend/api-response-format',
                            },
                            {
                                label: 'CORS',
                                slug: 'specifications/backend/cors',
                            },
                            {
                                label: 'Error handling',
                                slug: 'specifications/backend/error-handling',
                            },
                            {
                                label: 'Postman',
                                slug: 'specifications/backend/postman',
                            },
                            {
                                label: 'Tests',
                                slug: 'specifications/backend/tests',
                            }
                        ]
                    },
                    {
                        label: 'Mobile specifications',
                        slug: 'specifications/mobile-specs/introduction'
                    }
                ]
            },
            {
                label: 'Community',
                items: [
                    // Each item here is one entry in the navigation menu.
                    {
                        label: 'Authors',
                        slug: 'community/authors',
                    },
                    {
                        label: 'Resources',
                        slug: 'community/resources',
                    },
                    {
                        label: 'Special Thanks',
                        slug: 'community/special-thanks',
                    }
                ]
            }
        ]
    }), tailwind({
        applyBaseStyles: false,
    })],
    vite: {
        plugins: [removeMdExtension()],
    }
});
