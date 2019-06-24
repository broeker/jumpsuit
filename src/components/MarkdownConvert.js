import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'
import footnotes from 'showdown-footnotes'

const converter = new showdown.Converter({ extensions: [footnotes] })

const MarkdownContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
)

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default MarkdownContent