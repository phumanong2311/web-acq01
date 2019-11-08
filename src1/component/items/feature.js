import React from 'react'
import _ from 'lodash'
import {loadImage, formatPrice} from '../../utils'
import {prefixSP} from '../../container/storeLink'
const prefix = prefixSP

export default ({items = []}) => {
  return <div className='features_items'>
    <h2 className='title text-center'>Sản Phẩm Mới</h2>
    {items.map(el => {
      const cat = el.categoryId
      return <div key={el._id} className='col-sm-4'>
        <div className='product-image-wrapper'>
          <div className='single-products'>
            <div className='productinfo text-center'>
              <a href={`/san-pham/${cat.link}/${el.link}-${el._id}`}>
                <img src={`${loadImage(el.image)}`} alt='' />
              </a>
              <h2>{formatPrice(el.price)}</h2>
              <p>{el.title}</p>
              <a href={`${prefix}/${cat.link}/${el.link}-${el._id}`} className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart' />Chi Tiết</a>
            </div>
            {/* <div className='product-overlay'>
              <div className='overlay-content'>
                <h2>$56</h2>
                <p>{el.title}</p>
                <a href='#' className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart'></i>Add to cart</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    })}

    {/* {isPaging && total > 0 && <div className='col-sm-12'><Paging page={page} total={total} pageSize={pageSize} changePage={onChangePaging} /></div>} */}
  </div>
}
