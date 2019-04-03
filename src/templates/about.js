import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
      
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h1>{post.frontmatter.title}</h1>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`