import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ContentPageTemplate = ({
  contentComponent,
  image,
  subheading,
  cobra,
  mainpitch,
  title,
  helmet,
  }) => {

  return (
    <>
      {helmet || ''}
      <div>

        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  {mainpitch.title ?
                    <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    :
                    null
                  }
                  <div className="tile">
                    <h3 className="subtitle" dangerouslySetInnerHTML={{ __html: mainpitch.description }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {cobra.map(item => (
      <div key={item.heading} className="column is-6">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <h3>{item.heading}</h3>
              {item.description}
            </div>
          </div>
      </div>
    ))}
  </div>
    </>
  )
}

ContentPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ContentPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContentPageTemplate
        content={post.html}
        image={post.frontmatter.image}
        subheading={post.frontmatter.subheading}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Page">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        cobra={post.frontmatter.cobra}
        mainpitch={post.frontmatter.mainpitch}
      />
    </Layout>
  )
}

ContentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ContentPage

export const pageQuery = graphql`
  query ContentPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cobra {
          heading 
          description
          image1 {
            image {
             childImageSharp {
              fluid(maxWidth: 800, quality: 94) {
                ...GatsbyImageSharpFluid
              }
             }
            } 
          }
        }  
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
