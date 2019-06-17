import React from 'react'
import PropTypes from 'prop-types'
import { ContentPageTemplate } from '../../templates/content-page'
const remarkHTML = require('remark-html');
const remark = require('remark');

const ContentPagePreview = ({ entry, getAsset, widgetFor }) => {

const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
  <ContentPageTemplate
    image={entry.getIn(['data', 'image'])}
    subheading={entry.getIn(['data', 'subheading'])}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    main={data.main || { content: [] }}
    mainpitch={{
      title: entry.getIn(['data', 'mainpitch', 'title']),
      description: entry.getIn(['data', 'mainpitch', 'description']),
    }}
  />
    )}
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentPagePreview
