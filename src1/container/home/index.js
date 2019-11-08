import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import {Slider, FeatureItem, TabContent, RecommendedItem} from '../../component'
import Layout from '../layout'

const Home = ({data}) => {
  return <React.Fragment>
    <Slider />
    <Layout.SubLayout>
      <FeatureItem items={_.get(data, 'productNew', [])} />
      <TabContent />
      <RecommendedItem />
    </Layout.SubLayout>
  </React.Fragment>
}

export default subscribe({ category: null, productNew: [] })(Home)
