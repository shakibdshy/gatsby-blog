exports.createPage = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query BlogPost {
            allPostsJson {
                nodes {
                    slug
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