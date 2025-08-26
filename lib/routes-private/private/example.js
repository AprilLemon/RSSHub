// Example private route file
// This file demonstrates the structure needed for private routes

export const route = {
    path: '/example',
    name: 'Example Private Route',
    maintainers: ['your-username'],
    handler: () =>
        // Your route logic here
        ({
            title: 'Example Private Feed',
            link: 'https://example.com',
            description: 'This is an example private route',
            item: [
                {
                    title: 'Example Item 1',
                    link: 'https://example.com/item1',
                    description: 'This is the first example item',
                    pubDate: new Date().toUTCString(),
                },
                {
                    title: 'Example Item 2',
                    link: 'https://example.com/item2',
                    description: 'This is the second example item',
                    pubDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toUTCString(),
                },
            ],
        }),
    example: '/private/example',
    parameters: {},
    categories: ['other'],
    features: {
        requireConfig: false,
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: false,
        supportPodcast: false,
        supportScihub: false,
    },
};
