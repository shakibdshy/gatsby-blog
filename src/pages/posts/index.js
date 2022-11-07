import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'

const Posts = ({ data }) => {
    console.log(data)
    // const projects = data.posts.nodes

    return (
        <Layout>
            <div className=''>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className=''>
                    {/* {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))} */}
                </div>
                <p>Likewhat you see? email me at for a quote!</p>
            </div>
        </Layout>
    );
}

export default Posts

// export page query
export const query = graphql`
  query PostsPage {
    posts: allPostsJson(sort: {order: DESC, fields: id}) {
        nodes {
        id
        title
        image
        date
        content
        category
        slug
        }
    }
  }
`