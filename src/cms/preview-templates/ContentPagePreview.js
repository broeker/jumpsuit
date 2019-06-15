import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview = ({ entry, widgetFor }) => (
  <ContentPageTemplate
    image={entry.getIn(['data', 'image'])}
    subheading={entry.getIn(['data', 'subheading'])}
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    mainpitch={entry.getIn(['data', 'mainpitch'])}

  />
)

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentPagePreview
