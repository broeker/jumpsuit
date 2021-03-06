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
  main,
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
              !!image ? image.childImageSharp.fluid.src : null 
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
                  <div className="mainpitch">
                  {mainpitch.title ?
                    <h1 className="title">{mainpitch.title}</h1>
                    :
                    null
                  }
                    <h3 className="subtitle" dangerouslySetInnerHTML={{ __html: mainpitch.description }} />
                  </div>
                {main.content.map(item => (
                <div key={item.text}>
                  <div className="has-text-centered">
                    <div
                      style={{
                        width: '100%',
                        maxWidth: 240,
                        display: 'inline-block',
                      }}
                    >
                      <div className="inline-image">
                      <PreviewCompatibleImage imageInfo={item} />
                      </div>
                    </div>
                  </div>

                  <h3 className="title">{item.header}</h3>
                  FOO: <div dangerouslySetInnerHTML={{ __html: item.text}} />
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        main={post.frontmatter.main}
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
        main {
          content {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 64) {
                  presentationWidth
                  ...GatsbyImageSharpFluid
                  
                }
              }
            }
            text
            header
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
