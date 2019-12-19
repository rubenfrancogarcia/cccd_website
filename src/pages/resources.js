import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import '../styles/resources.css' 


export default ({ data }) => {
    return (
      <Layout>

    <div class="blog-posts"> 
    <h1>My WordPress Blog</h1>
        <h2>Posts</h2>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div>
            <h3>{node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
    </div>
      </Layout>
    )
  }
  export const pageQuery = graphql`
    query {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
  `
