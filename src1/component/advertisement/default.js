import React from 'react'
import _ from 'lodash'
import {loadImage} from '../../utils'

export default ({category, prefix}) => {
  const imgUrl = _.get(category, 'img')

  // return <section id='advertisement' className='category-info'>

  return <div className='container category-info'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='category-info'>
          <h1>{category && category.title}</h1>
        </div>
      </div>
      <div className='col-md-6'><img src={loadImage(imgUrl)} alt='' /></div>
    </div>

    {/* <div className='category-info'>
      <div className='info'>
        <h2>{category && category.title}</h2>
        <span><a>Home</a>/<a>{category && category.title}</a></span>
      </div>
      <div className='img'><img src={loadImage(imgUrl)} alt='' /></div>
    </div> */}
  </div>
  // </section>
}
