module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/e23a3f2563e5400b931a64eb425edda8?v=8bc0321cce65427a87bb2004c5d38e98"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/52b7b5da1c664373b37e8958b8235bdf?v=d2d7e7aae58c4423967488e990e05606"
            }
        }
    ],
}
