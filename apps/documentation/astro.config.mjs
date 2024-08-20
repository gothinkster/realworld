import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

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
                                label: 'Ednpoints',
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
    })]
});
