import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GatsbyShowcaseTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GatsbyShowcaseTemplateTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const GatsbyShowcase = ({ data }) => {

  return (
    <Layout>
     foo
    </Layout>
  )
}


export default GastbyShowcase

export const gatsbyShowcaseQuery = graphql`
  query gatsbyShowcase {
 
  allAirtable {
  edges {
    node {
      id
      data {
        Notes
        Name
        Lighthouse_Score
        URL
      }
    }
  }
}
}
`