import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import useReactRouter from 'use-react-router'
import {Paging, FeatureBlog, Advertisement} from '../../component'
import Layout from '../layout'
import {APICommon} from '../../api'
import {prefixBV} from '../storeLink'
const prefix = prefixBV

const List = ({data}) => {
  const categoryBlogs = _.get(data, 'categoryPost.all', [])
  const {match, history} = useReactRouter()
  const categoryBlog = categoryBlogs.find(el => el.link === match.params.catBloglink)

  if (!categoryBlog) window.location.href = '/page-not-found'

  const [filter, setFilter] = React.useState({ page: match.params.page || 1, pageSize: 1 })

  const [dt, setData] = React.useState({ posts: [], total: 0 })

  React.useEffect(() => {
    getList(filter.page)
  }, [])

  const changePage = (e) => {
    const _page = e.currentTarget.getAttribute('data-page')
    history.push(`${prefix}/${match.params.catBloglink}?page=${parseInt(_page)}`)
    getList(parseInt(_page))
  }

  const getList = (page) => {
    APICommon.blogList({ catPostId: categoryBlog._id, page, pageSize: filter.pageSize }).then(resp => {
      if (page !== filter.page) setFilter({...filter, page})
      setData({...dt, ...resp.data})
    })
  }

  const { posts, total } = dt
  const { page, pageSize } = filter

  return <React.Fragment>
    <Advertisement.ACQ category={categoryBlog} prefix={prefix} />
    <Layout.SubLayout>
      <div className='blog-post-area'>
        <h2 className='title text-center'>{categoryBlog && categoryBlog.title }</h2>
        <FeatureBlog posts={posts} />
      </div>
      <Paging total={total} page={page} pageSize={pageSize} changePage={changePage} />
    </Layout.SubLayout>
  </React.Fragment>
}

export default subscribe({ categoryPost: null })(List)
