import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import {loadImage, formatPrice} from '../../utils'

const RecommendedItems = ({data}) => {
  const productHot = _.get(data, 'productHot', [])
  const blockItems = (key, items, active = '') => {
    return <div key={key} className={`item ${active}`}>
      {items}
    </div>
  }

  const renderBlockComponent = (item, catLink) => {
    return <div key={item._id} className='col-sm-4'>
      <div className='product-image-wrapper'>
        <div className='single-products'>
          <div className='productinfo text-center'>
            <img src={`${loadImage(item.image)}`} alt='' />
            <h2>{formatPrice(item.price)}</h2>
            <p>{item.title}</p>
            <a href={`/san-pham/${catLink}/${item.link}`} className='btn btn-default add-to-cart'>
              <i className='fa fa-shopping-cart' />
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  }

  let items = {}
  productHot.forEach((el, k) => {
    const cat = el.categoryId._id
    const catLink = _.get(cat, 'link')
    const number = k + 1
    const keyItems = 'key-' + Math.ceil(number / 3)
    if (keyItems in items) {
      items[keyItems].push(renderBlockComponent(el, catLink))
    } else {
      items[keyItems] = []
      items[keyItems].push(renderBlockComponent(el, catLink))
    }
  })

  return <div className='recommended_items'>
    <h2 className='title text-center'>Sản Phẩm HOT</h2>
    <div id='recommended-item-carousel' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        {Object.keys(items).map((el, k) => blockItems('recommended-' + el, items[el], k === 0 ? 'active' : ''))}
      </div>
      <a className='left recommended-item-control' href='#recommended-item-carousel' data-slide='prev'>
        <i className='fa fa-angle-left' />
      </a>
      <a className='right recommended-item-control' href='#recommended-item-carousel' data-slide='next'>
        <i className='fa fa-angle-right' />
      </a>
    </div>
  </div>
}

export default subscribe({ productHot: [] })(RecommendedItems)
