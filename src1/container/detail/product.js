import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import useReactRouter from 'use-react-router'
import Layout from '../layout'
import {Advertisement, ImageDetail} from '../../component'
import {APICommon} from '../../api'
import {prefixSP} from '../storeLink'
import {formatPrice, formatDate, formatTime} from '../../utils'
const prefix = prefixSP

const Details = ({data}) => {
  const categories = _.get(data, 'category.all', [])
  const {match} = useReactRouter()
  const category = categories.find(el => el.link === match.params.catlink)

  if (!category) window.location.href = '/page-not-found'

  const [info, setInfo] = React.useState(null)

  const getData = () => {
    const arr = match.params.productLink.split('-')
    const productId = arr[arr.length - 1]
    APICommon.productDetail({catId: category._id, productId}).then(resp => setInfo({...resp.data}))
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (!info) return null

  return <React.Fragment>
    <Advertisement.ACQ category={category} prefix={prefix} />
    <Layout.SubLayout>
      <div className='product-details'>
        <div className='col-sm-5'>
          <ImageDetail info={info} />
        </div>

        <div className='col-sm-7'>
          <div className='product-information'>
            {info.isNewProduct && <img src='/images/product-details/new.jpg' className='newarrival' alt='' />}
            <h2>{info.title}</h2>
            <p>Mã Sản Phẩm: {info.code}</p>
            <div><img src='/images/product-details/rating.png' alt='' /></div>
            <span>
              <span>Giá: {formatPrice(info.price)}</span>
              <label>Quantity:</label>
              <input type='text' defaultValue='3' />
              <button type='button' className='btn btn-fefault cart'>
                <i className='fa fa-shopping-cart' />
                Add to cart
              </button>
            </span>
            <p><b>Điện Áp:</b> {info.info}</p>
            <p><b>Dung Lượng:</b> {info.info1}</p>
            <p><b>Kích thước (Dài x Rộng x Cao):</b> {info.info2}</p>
            <p><b>Availability:</b> In Stock</p>
            <a href=''><img src='/images/product-details/share.png' className='share img-responsive' alt='' /></a>
          </div>
        </div>
      </div>

      <div className='category-tab shop-details-tab'>
        <div className='col-sm-12'>
          <ul className='nav nav-tabs'>
            <li className='active'><a href='#reviews' data-toggle='tab'>Mô Tả</a></li>
            {/* <li><a href='#companyprofile' data-toggle='tab'>Company Profile</a></li> */}
            <li><a href='#tag' data-toggle='tab'>Chi Tiết</a></li>
            {/* <li><a href='#details' data-toggle='tab'>Reviews (5)</a></li> */}
          </ul>
        </div>

        <div className='tab-content'>
          <div className='tab-pane fade active in' id='reviews' >
            <div className='col-sm-12'>
              <ul>
                <li><a href=''><i className='fa fa-user' />EUGEN</a></li>
                <li><a href=''><i className='fa fa-clock-o' />{info && formatTime(info.createDate, true)}</a></li>
                <li><a href=''><i className='fa fa-calendar-o' />{info && formatDate(info.createDate)}</a></li>
              </ul>
              <p>{info && info.description}</p>
            </div>
          </div>

          <div className='tab-pane fade in' id='tag' >
            <div className='col-sm-12'>
              {info && <div dangerouslySetInnerHTML={{__html: info.content}} />}
            </div>
          </div>
        </div>
      </div>
    </Layout.SubLayout>
  </React.Fragment>
}

export default subscribe({ category: null })(Details)
