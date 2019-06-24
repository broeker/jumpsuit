import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MarkdownConvert from '../components/MarkdownConvert'
import LazyHero from 'react-lazy-hero';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  mainbody,
  blurbs,
  fullImage,

}) => (
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
                    <MarkdownConvert
                      className="mainpitch"
                      content={mainpitch.description } />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      { mainbody.heading }
                    </h3>
                    <MarkdownConvert
                      className="maindescription"
                      content={mainbody.intro}
                      />
                  </div>
                </div>

                <div className="has-text-centered">
                  <div
                    style={{
                    width: '70vh',
                    display: 'inline-block',
                    margin: '2em 0',
                  }}
                  >
                    <PreviewCompatibleImage imageInfo={mainbody.image1} />
                  </div>
                </div>

                <MarkdownConvert
                      className="maindescription"
                      content={mainbody.content}
                      />
                    <div
                      style={{
                        width: '99.225vw',
                        position: 'relative',
                        'margin-left': '-49.59vw',
                        left: '50%',
                        marginTop: '4em',
                        marginBottom: '2em',
                      }}
                    >
                  <LazyHero
                  imageSrc={fullImage.childImageSharp ? fullImage.childImageSharp.fluid.src : '/home/broeker/Projects/jumpsuit/static/img/boots.jpg'}
                  parallaxOffset={100}
                  opacity={.3}
                  className="lazy"
                  color="#f4f4f4"

                  >

                    <h1

                      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                      style={{
                        boxShadow:
                          'rgb(#666 0.5rem 0px 0px, #666 -0.5rem 0px 0px',
                        backgroundColor: '#666',
                        color: 'white',
                        lineHeight: '1.2',
                        padding: '1em',
                        width: 'auto',
                        marginRight: '30vw',
                        marginLeft: '30vw',
                      }}
                    >
                      Rules are made for people who aren’t willing to make up their own.
                  </h1>
                    <h3
                      className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                      style={{
                      backgroundColor: '#666',
                      color: 'white',
                      lineHeight: '1',
                      padding: '0.25em',
                        marginRight: '30vw',
                        marginLeft: '30vw',
          }}
        >
          &mdash; Chuck Yeager, test pilot
        </h3>
                  </LazyHero>
              </div>
                <p>
                  From day one the web has been pushed forward by explorers and tinkerers who make up our rules as we go. But
                  we have now been using the same basic rules and techniques
                  for decades. Vast portions of the web are powered by a monolithic CMS such as <a href="https://drupal.org">Drupal</a> or <a href="https:\\wordpress.org">WordPress</a> (or
                  one of their propietary competitors.) And in many ways our traditional server-based world is
                  more powerful and capable than ever. We have automated processes and
                  devops, advanced  caching mechanisms, and advanced cloud providers. We can build anything.
                </p>
                  <p>
                  But all of this power comes at a high cost: Increasing complexity. Ever-present
                  security threats. Long build cycles. Painfully slow and cumbersome user interfaces. Laborious and
                    error prone update processes. Constant battles
                    with performance, caching, and scaling. And, yes, some real limitations (Drupal or Wordpress
                    are both extremely great, until they are not.)

                </p>
                <p>


                  Thanks to rule breakers like Ryan Dahl (Node.js) and Jordan Walke (React) and Kyle Matthews (Gatsby) and
                  long list of pioneers before them, we now have a new path that promises a great
                  leap forward in how we work, what we build, and the value we provide to our clients and to the web.
                </p>
                <Features gridItems={blurbs.blocks} />



                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={footnotes``}>
        {footnotes}
      </div>
    </section>

  </div>
)



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        mainbody={frontmatter.mainbody}
        description={frontmatter.description}
        blurbs={frontmatter.blurbs}
        fullImage={frontmatter.full_image}
        footnotes={frontmatter.footnotes}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        footnotes 
        mainpitch {
          title
          description
        }
        description
        mainbody {
          heading 
          intro
          content 
          image1 {
            alt
            image {
             childImageSharp {
              fluid(maxWidth: 800, quality: 94) {
                ...GatsbyImageSharpFluid
              }
              
             }
             extension
             publicURL
            } 
           }
          }
        blurbs {
          blocks {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2024, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

