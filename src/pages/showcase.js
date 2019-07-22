import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout'
import { Img } from 'gatsby-image';

const Showcase = () => (

  <StaticQuery
    query={graphql`
      query {
        allAirtable {
          edges {
            node {
              id
              data {
                Notes
                Name
                Lighthouse_Score
                URL
                Images {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 400, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                 
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ShowcaseLinks
      links={data.allAirtable.edges}
    />
    }
  />
);

const ShowcaseLinks = ({links}) => (

<>
<Layout>
  <div>
      <div
      className="full-width-image margin-top-0"
      style={{
       padding: 0,
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
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
         Gatsby Showcase
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
        Cool projects and sites in the wild
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          { links.map(({ node: item }) => (
            <>
              <h3>{item.data.Name}</h3>

                <div class="columns">
            <div class="column">

            <a href={item.data.URL}>
              {item.data.Name}
            </a>
            </div>
              <div class="column">
            {item.data.Notes}
              </div>
            </div>
            </>
          ))
        }
        </div>
      </div>

    </section>

  </div>

    </Layout>

  </>
);

export default Showcase;
