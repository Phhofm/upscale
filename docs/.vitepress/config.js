export default {
    title: 'Interactive Visual Comparison of Upscaling Models',
    description: 'Here you can compare the results of different upscaling models for yourself.',
    base: '/upscale/',
    themeConfig: {
        nav: [{
                text: 'Image',
                items: [{
                        text: 'Introduction',
                        link: '/introduction'
                    },
                    {
                        text: 'Multiple Models',
                        link: '/multimodels'
                    },
                    {
                        text: '',
                        items: [
                            {
                                text: 'Photo',
                                link: '/multimodels#photo'
                            },
                            {
                                text: 'AI Generated',
                                link: '/multimodels#ai-generated-images'
                            },
                            {
                                text: 'Anime',
                                link: '/multimodels#anime'
                            },
                            {
                                text: 'Sets',
                                link: '/multimodels#sets'
                            },
                        ]
                    },
                    {
                        text: 'Favorites',
                        link: '/favorites'
                    },
                    {
                        text: 'Face Restoration',
                        link: '/facerestore'
                    },
                    {
                        text: 'Denoise',
                        link: '/denoise'
                    },
                    {
                        text: 'Deblurring',
                        link: '/deblurring'
                    },
                    {
                        text: 'Models Used',
                        link: '/modelsused'
                    },
                ]
            },
            {
                text: 'Video',
                link: ''
            },
            {
                text: 'Changelog',
                link: '/changelog'
            },
        ],

        sidebar: [{
                text: 'Image',
                items: [{
                        text: 'Introduction',
                        link: '/introduction'
                    },
                    {
                        text: 'Multiple Models',
                        link: '/multimodels'
                    },
                    {
                        text: '',
                        items: [
                            {
                                text: 'Photo',
                                link: '/multimodels#photo'
                            },
                            {
                                text: 'AI Generated',
                                link: '/multimodels#ai-generated-images'
                            },
                            {
                                text: 'Anime',
                                link: '/multimodels#anime'
                            },
                            {
                                text: 'Sets',
                                link: '/multimodels#sets'
                            },
                        ]
                    },
                    {
                        text: 'Favorites',
                        link: '/favorites'
                    },
                    {
                        text: 'Face Restoration',
                        link: '/facerestore'
                    },
                    {
                        text: 'Denoise',
                        link: '/denoise'
                    },
                    {
                        text: 'Deblurring',
                        link: '/deblurring'
                    },
                    {
                        text: 'Models Used',
                        link: '/modelsused'
                    },
                    {
                        text: 'Changelog',
                        link: '/changelog'
                    },
                ]
            },
            {
                text: 'Video',
                items: [{
                    text: '',
                    link: ''
                }, ]
            },
        ],
    }
}