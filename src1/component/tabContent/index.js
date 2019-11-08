import React from 'react'
import {subscribe} from 'react-hooks-usemodel'
import _ from 'lodash'
import {loadImage, formatPrice} from '../../utils'
import {prefixSP} from '../../container/storeLink'
const prefix = prefixSP

const TabContent = ({data}) => {
  const categoryHome = _.get(data, 'categoryHome', [])
  return <div className='category-tab'>
    <div className='col-sm-12'>

      <ul className='nav nav-tabs'>
        {categoryHome.map((el, k) => {
          return <li key={el._id} className={k === 0 ? 'active' : ''}><a href={`#tab${el._id}`} data-toggle='tab'>{el.title}</a></li>
        })}
      </ul>
    </div>
    <div className='tab-content'>
      {categoryHome.map((el, k) => {
        return <div key={el._id} className={`tab-pane fade ${k === 0 ? 'active in' : ''}`} id={`tab${el._id}`} >
          {el.products.map(pro => {
            const proCat = pro.categoryId._id
            const catLink = _.get(proCat, 'link')
            return <div key={pro._id} className='col-sm-3'>
              <div className='product-image-wrapper'>
                <div className='single-products'>
                  <div className='productinfo text-center'>
                    <img src={`${loadImage(pro.image)}`} alt='' />
                    <h2>{formatPrice(pro.price)}</h2>
                    <p>{pro.title}</p>
                    <a href={`${prefix}/${catLink}/${pro.link}-${pro._id}`} className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart' />View More</a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      })}
    </div>
  </div>
}

export default subscribe({ categoryHome: null })(TabContent)
