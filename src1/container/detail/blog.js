import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import useReactRouter from 'use-react-router'
import Layout from '../layout'
import {Advertisement} from '../../component'
import {APICommon} from '../../api'
import {loadImage, formatDate, formatTime} from '../../utils'
import {prefixBV} from '../../container/storeLink'
const prefix = prefixBV

const BlogDetails = ({data}) => {
  const categoryPosts = _.get(data, 'categoryPost.all', [])
  const {match} = useReactRouter()
  const categoryBlog = categoryPosts.find(el => el.link === match.params.catBloglink)

  if (!categoryBlog) window.location.href = '/page-not-found'

  const [info, setInfo] = React.useState(null)

  const getData = () => {
    const arr = match.params.postLink.split('-')
    const postId = arr[arr.length - 1]
    APICommon.postDetail({catPostId: categoryBlog._id, postId}).then(resp => setInfo({...resp.data}))
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (!info) return null
  console.log('info', info)
  return <React.Fragment>
    <Advertisement.ACQ category={categoryBlog} prefix={prefix} />
    <Layout.SubLayout>
      <section>
        <div className='blog-post-area'>
          <h2 className='title text-center'>{categoryBlog && categoryBlog.title}</h2>
          <div className='single-blog-post'>
            <h3>{info && info.title}</h3>
            <div className='post-meta'>
              <ul>
                {/* <li><i className='fa fa-user' /> Mac Doe</li> */}
                <li><i className='fa fa-clock-o' /> {formatTime(info.createDate)}</li>
                <li><i className='fa fa-calendar' />{formatDate(info.createDate)}</li>
              </ul>
              <span>
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star-half-o' />
              </span>
            </div>
            <a href=''>
              <img src={loadImage(info.image)} alt='' />
            </a>
            <div>
              {info.description}
            </div>
            <br />
            <br />
            <div>
              {info && <div dangerouslySetInnerHTML={{__html: info.content}} />}
            </div>
          </div>
        </div>
      </section>
    </Layout.SubLayout>
  </React.Fragment>
}

export default subscribe({ categoryPost: null })(BlogDetails)
