import React from 'react'
import PropTypes from 'prop-types'
import MarkdownConvert from '../components/MarkdownConvert'

const Content = ({ contentItems }) => (
  <>
    {contentItems.map(item => (
      <div key={item.heading}>
          <h3>{item.heading}</h3>
          <MarkdownConvert
                      className="blurb"
                      content={item.content} />
      </div>
    ))}
  </>
)

Content.propTypes = {
  contentItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.string,
    })
  ),
}

export default Content
