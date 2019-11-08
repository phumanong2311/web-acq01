import React from 'react'
import {loadImage} from '../../utils'

export default ({info}) => {
  const {mainImg, setImage} = React.useState(info.image)
  let items = {}
  info.gallery.forEach((el, k) => {
    const number = k + 1
    const keyItems = 'key-' + Math.ceil(number / 3)
    if (keyItems in items) {
      items[keyItems].push(<img key={el._id} onClick={() => setImage(el)} src={loadImage(el)} alt='' />)
    } else {
      items[keyItems] = []
      items[keyItems].push(<img key={el._id} onClick={() => setImage(el)} src={loadImage(el)} alt='' />)
    }
  })

  const blockItems = (key, items, active) => {
    return (
      <div key={key} className={`item ${active}`}>
        {items}
      </div>
    )
  }

  return <React.Fragment>
    <div className='view-product'>
      {mainImg && <img src={loadImage(mainImg)} alt='' />}
      {info && info.isHot && <h3>HOT</h3>}
    </div>
    <div id='similar-product' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        {Object.keys(items).map((el, k) => blockItems(el, items[el], k === 0 ? 'active' : ''))}
      </div>
      <a className='left item-control' href='#similar-product' data-slide='prev'>
        <i className='fa fa-angle-left' />
      </a>
      <a className='right item-control' href='#similar-product' data-slide='next'>
        <i className='fa fa-angle-right' />
      </a>
    </div>
  </React.Fragment>
}
