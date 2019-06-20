import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const remarkHTML = require('remark-html');
const remark = require('remark');

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (

      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
        mainbody={{
        heading: entry.getIn(['data', 'mainbody', 'heading']),
        intro: entry.getIn(['data', 'mainbody', 'intro']),
        content: entry.getIn(['data', 'mainbody', 'content']),
        image1: {
          image: getAsset(entry.getIn(['data', 'mainbody', 'image1', 'image'])),
          alt: entry.getIn(['data', 'mainbody', 'image1', 'alt']),
        },
      }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
