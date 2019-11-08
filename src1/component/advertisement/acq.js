import React from 'react'
import _ from 'lodash'
import {loadImage} from '../../utils'

export default ({category, prefix}) => {
  const imgUrl = _.get(category, 'img')

  return <section id='advertisement' className='category-info'>
    <div className='container-info'>
      <div className='wrapper-img'>
        <div className='container'>
          <img src={loadImage(imgUrl)} alt='' />
        </div>
      </div>
      <div className='info'>
        <div className='container'>
          <h2>{category && category.title}</h2>
          <span className='display-block'><a>Home</a> &nbsp;/&nbsp;<a href={`${prefix}/${category && category.link}`}>{category && category.title}</a></span>
        </div>
      </div>
    </div>
  </section>
}
