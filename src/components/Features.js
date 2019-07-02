import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MarkdownConvert from '../components/MarkdownConvert'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
              }}
            >
              xxx<PreviewCompatibleImage imageInfo={item.image2} />
            </div>
          </div>
          <h3>{item.heading}</h3>
          <MarkdownConvert
                      className="blurb"
                      content={item.text} />

          <a className="button is-link">Learn more</a>
        </section>

      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
