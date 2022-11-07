exports.createPage = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query MyQuery {
            allPostsJson {
                nodes {
                    category
                    content
                    date
                    slug
                    id
                    image
                    title
                }
            }
        }
    `)

    data.allPostsJson.nodes.forEach(node => { 
        actions.createPage({
            path: `/posts/${node.slug}`,
            component: require.resolve('./src/templates/post-details.js'),
            context: { slug: node.slug }
        })
    })
}