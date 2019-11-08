import React from 'react'
import {subscribe} from 'react-hooks-usemodel'
import _ from 'lodash'
import PanelGroup from '../panelGroup'
import {prefixBV, prefixSP} from '../../container/storeLink'

const SideBar = ({data, isProduct}) => {
  const categories = _.get(data, 'category.all', [])
  const categoryPosts = _.get(data, 'categoryPost.all', [])
  return <div className='left-sidebar'>
    {isProduct
      ? <React.Fragment>
        <PanelGroup categories={categories} title='Sản Phẩm' prefix={prefixSP} />
        <PanelGroup categories={categoryPosts} title='Bài Viết' prefix={prefixBV} />
      </React.Fragment>
      : <React.Fragment>
        <PanelGroup categories={categoryPosts} title='Bài Viết' prefix={prefixBV} />
        <PanelGroup categories={categories} title='Sản Phẩm' prefix={prefixSP} />
      </React.Fragment>}

    <div className='shipping text-center'>
      <img src='/images/home/shipping.jpg' alt='' />
    </div>
  </div>
}
export default subscribe({ category: null, categoryPost: null })(SideBar)
