import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import SecondaryContent from '../components/SecondaryContent'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MarkdownConvert from '../components/MarkdownConvert'
import PageHeader from '../components/PageHeader'
import InlineHero from '../components/InlineHero'



class IndexPage extends React.Component {

  renderElement() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark

    if (  data  ) {
      return (
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
          fullImage2={frontmatter.full_image2}
          secondarycontent={frontmatter.secondarycontent}
          footnotes={frontmatter.footnotes}
        />
      );
    }
  }
  render() {
    return (
      <Layout>
        { this.renderElement() }
      </Layout>
    )
  }
}

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  mainbody,
  blurbs,
  fullImage,
  fullImage2,
  secondarycontent,
  footnotes,
}) => (
  <div>
   <PageHeader
    title={title}
    subheading={subheading}
    image={image}
   />
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


              <InlineHero
                image={fullImage.childImageSharp ? fullImage.childImageSharp.fluid.src : null}
                title="Rules are made for people who aren’t willing to make up their own."
                subheading="&mdash; Chuck Yeager, test pilot"
              />


                <SecondaryContent contentItems={secondarycontent.blocks} />

                <Features gridItems={blurbs.blocks} />

                <InlineHero
                image={fullImage2.childImageSharp ? fullImage2.childImageSharp.fluid.src : fullImage2}
                title="There is no such thing as a natural born pilot. For the best pilots, flying is an obsession, the one thing in life they must do continually."
                subheading="&mdash; Chuck Yeager, jumpsuit enthusiast"
              />


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
                {footnotes ?
                  <div className="footnotes">
                    <h3>Footnotes</h3>
                    <MarkdownConvert
                      content={footnotes}
                    />

                  </div>
                    :
                    null
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  </div>
)










// const IndexPageTemplate = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//
//   return (
//
//   )
// }

export default IndexPage
export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        templateKey
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
            image2 {
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
        full_image2 {
          childImageSharp {
            fluid(maxWidth: 2024, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondarycontent {
          blocks {
            heading
            content
          }
        }
      }
    }
  }
`


