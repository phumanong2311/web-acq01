import React from 'react'
import {loadImage, formatDate, formatTime} from '../../utils'
import {prefixBV} from '../../container/storeLink'
const prefix = prefixBV

export default ({posts = []}) => {
  return <React.Fragment>
    {posts.map(el => {
      const cate = el.categoryPostId
      return <div key={`post-${el._id}`} className='single-blog-post'>
        <h3>{el.introTitle}</h3>
        <div className='post-meta'>
          <ul>
            {/* <li><i className='fa fa-user' /> Mac Doe</li> */}
            <li><i className='fa fa-clock-o' /> {formatTime(el.createDate, true)}</li>
            <li><i className='fa fa-calendar' /> {formatDate(el.createDate)}</li>
          </ul>
          <span>
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star' />
            <i className='fa fa-star-half-o' />
          </span>
        </div>
        <a href={`${prefix}/${cate.link}/${el.link}-${el._id}`}>
          <img src={loadImage(el.image)} alt='' />
        </a>
        <p>{el.description}</p>
        <a className='btn btn-primary' href={`${prefix}/${cate.link}/${el.link}-${el._id}`}>Read More</a>
      </div>
    })}
  </React.Fragment>
}
