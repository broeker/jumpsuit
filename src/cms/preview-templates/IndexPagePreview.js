import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const remarkHTML = require('remark-html');
const remark = require('remark');

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  var foo = data.main.description

  const markdown = data.main.description;
  var moo =  data.main.description = remark()
    .use(remarkHTML)
    .processSync(foo)
    .toString();


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
        main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: moo,
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
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
