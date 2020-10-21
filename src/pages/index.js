import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <ul>
        {data.allContentfulPage.edges.map(({ node: { title, id } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
