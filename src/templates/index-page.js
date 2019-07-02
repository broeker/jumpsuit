import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MarkdownConvert from '../components/MarkdownConvert'
import PageHeader from '../components/PageHeader'
import InlineHero from '../components/InlineHero'
import ResponsiveModal from '../components/ResponsiveModal'



class IndexPage extends React.Component {

  renderElement() {
    const { data } = this.props;
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
                <p>
                  From day one the web has been pushed forward by explorers and tinkerers who make up our own rules as we go. Yet


                  if you look around, vast portions of the web are now powered by a monolithic CMS such as <a href="https://drupal.org">Drupal</a> or <a href="https:\\wordpress.org">WordPress</a> (or
                  one of their many competitors both OSS and propietary.)[^3] We have now been using the same basic rules and techniques
                  for decades (thanks in no small part to tinkerers like <a href="#">Dries Buytaert</a> and <a href="#">Matt Mullenweg</a>.)  And there is no dispute that these tools are
                  more powerful and capable than ever. We can build anything.
                </p>
                <p>
                  But all of this power comes at a high price: Increasing complexity and cost. Ever-present
                  security threats. Long build cycles. Painfully slow and cumbersome user interfaces. Laborious and
                    error prone update processes. Constant battles with performance, caching, and scaling. And, yes, some real limitations (Drupal or WordPress
                    are both extremely great, until they are not.)
                </p>
                <p>
                  Drupal and WordPress will likely be around for a long time. But thanks to a new generation of rule breakers like <a href="https://en.wikipedia.org/wiki/Ryan_Dahl">Ryan Dahl (Node)</a> and <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">Jordan Walke (React)</a> and <a href="https://www.gatsbyjs.org/contributors/kyle-mathews/">Kyle Matthews (Gatsby)</a> and a
                  long list of pioneers before them, we now have a path forward that promises fundamental improvements in how we
                  work, what we build, and the value we provide to our clients and to the web.
                </p>


                <h3 className="has-text-weight-semibold is-size-2">Join the force today.</h3>
                <p>
                For the youngest and smartest of the new generation of web developers, none of this is news. But for the rest
                  of us, we are now firmly in the middle of an unavoidable sea change that is going
                  to turn everything upside down, again. Thankfully, the barrier to entry is approaching zero.
                </p>
                <p>
                  My life-long fascination with the World Wide Web began in mid-1994. Armed with a fresh install of the Mosiac browser and a 14K internet connection, I pushed my first index.html file up
                  to a univeristy-provided FTP server in mid-1994. I have been "viewing source" and slinging DIVs and configuring ODBC connections and helping make the the web work
                  since that day forward.
                </p>

                <p>
                  When I pushed up my first single page web app in the form a single index.html to a mysterious boomboox.umn.edu FTP server
                  in 1994, myself and the rest of the world learned almost exclusivley by viewing the source.
                  The best part of this of this new world is how easy it is to get started, and to experiment and learn.
                  to s
                </p>


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
      }
    }
  }
`


