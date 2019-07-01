import React from 'react'
import LazyHero from 'react-lazy-hero';

const InlineHeader = ( props ) => {
  return (
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
                  imageSrc={props.image}
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
                    {props.title}
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
                    {props.subheading}
                  </h3>
                </LazyHero>
              </div>
  )
}
export default InlineHeader
