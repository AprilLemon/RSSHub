// 示例：同一namespace下的第二个路由
// 访问地址：http://localhost:1200/private/example2

export const route = {
    path: '/example2',
    name: 'Second Private Route',
    maintainers: ['your-username'],
    handler: (ctx) => {
        // 演示如何处理查询参数
        const category = ctx.req.query('category') || 'all';

        return {
            title: `Private Feed - ${category}`,
            link: 'https://example.com',
            description: `This is the second private route showing ${category} items`,
            item: [
                {
                    title: `${category} Item 1`,
                    link: `https://example.com/${category}/1`,
                    description: `This is a ${category} item`,
                    pubDate: new Date().toUTCString(),
                },
                {
                    title: `${category} Item 2`,
                    link: `https://example.com/${category}/2`,
                    description: `This is another ${category} item`,
                    pubDate: new Date(Date.now() - 30 * 60 * 1000).toUTCString(), // 30分钟前
                },
            ],
        };
    },
    example: '/private/example2?category=tech',
    parameters: {
        category: {
            description: 'Category filter',
            default: 'all',
            options: [
                { value: 'tech', label: 'Technology' },
                { value: 'news', label: 'News' },
                { value: 'all', label: 'All Categories' },
            ],
        },
    },
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
