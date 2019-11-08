import React from 'react'
import _ from 'lodash'
import MegaProduct from './megaProduct'
import {subscribe} from 'react-hooks-usemodel'
import {prefixBV} from '../../../../../container/storeLink'
const prefix = prefixBV

const HeaderMiddle = ({data}) => {
  const category = _.get(data, 'category', null)
  const categoryPostParent = _.get(data, 'categoryPost.parent', null)
  const ref = React.useRef()
  const [stateData, setStateData] = React.useState({
    activeMenu: '',
    isOpen: false
  })

  const resize = () => {
    reset()
  }

  const reset = () => {
    if (window.innerWidth <= 767) {
      if (stateData.activeMenu === '' && !stateData.isOpen) return
      setStateData({
        activeMenu: '',
        isOpen: false
      })
    }
  }

  const onOpen = () => {
    if (window.innerWidth <= 767) {
      setStateData({ activeMenu: '', isOpen: !stateData.isOpen })
    }
  }

  const onActiveMenu = (name) => {
    if (window.innerWidth <= 767) {
      setStateData({ activeMenu: name === stateData.activeMenu ? '' : name, isOpen: true })
    }
  }

  const handleClickOutside = (event) => {
    if (ref && !ref.current.contains(event.target) && window.innerWidth <= 767) reset()
  }

  React.useEffect(() => {
    window.addEventListener('resize', resize)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return <div className='wrap_nav' ref={ref}>
    <span className='icon-mobile' onClick={onOpen} />
    <div className='main_nav Module Module-42'>
      <div className='ModuleContent'>
        <ul className={stateData.isOpen ? 'noli topmenu active' : 'noli topmenu'}>
          <li className='prd_li1 active flex-grow-0'><a className='active' href='/' target='_self'>TRANG CHỦ</a></li>
          {/* <li className='prd_li2 p-relative'>
            <a onClick={() => this.onActiveMenu('gioi-thieu')} className='trainsion p-relative' target='_self'>
              GIỚI THIỆU
              <span className='arrow-menu' />
            </a>
            <ul className={this.state.activeMenu === 'gioi-thieu' ? 'noli submenu active' : 'noli submenu'}>
              <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/thong-tin-gsv-1.html' target='_self'>Thông tin GSV</a></li>
              <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/lich-su-hinh-thanh-phat-trien.html' target='_self'>Lịch sử hình thành-phát triển</a></li>
              <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/chung-nhan.html' target='_self'>Chứng nhận-Giải thưởng</a></li>
            </ul>

          </li> */}
          <li className='prd_li3'>
            <a onClick={() => onActiveMenu('san-pham')} className='trainsion p-relative' target='_self'>
              SẢN PHẨM
              <span className='arrow-menu' />
            </a>
            <div className={stateData.activeMenu === 'san-pham' ? 'menu_prd_wrap active' : 'menu_prd_wrap'}>
              <MegaProduct category={category} />
            </div>

          </li>
          <li className='prd_li4 p-relative'>
            <a onClick={() => onActiveMenu('bai-viet')} className='trainsion p-relative' target='_self'>
              TIN TỨC
              <span className='arrow-menu' />
            </a>
            <ul className={stateData.activeMenu === 'bai-viet' ? 'noli submenu active' : 'noli submenu'}>
              {categoryPostParent.map(el => !el.parentId && <li key={`bai-viet-${el._id}`}><a className='trainsion' href={`${prefix}/${el.link}`} target='_self'>{el.title}</a></li>)}
              {/* <li><a className='trainsion' href='tin-tuc/tin-gsv.html' target='_self'>Tin GSV</a></li>
              <li><a className='trainsion' href='tin-tuc/catalogue-dien-tu.html' target='_self'>Catalogue điện tử</a></li>
              <li><a className='trainsion' href='tin-tuc/thu-vien-anh.html' target='_self'>Thư viện ảnh</a></li>
              <li><a className='trainsion' href='tin-tuc/video-clips-1.html' target='_self'>Video clips</a></li>
              <li><a className='trainsion' href='tin-tuc/tap-chi-noi-bo.html' target='_self'>Tạp chí nội bộ</a></li> */}
            </ul>

          </li>
          {/* <li className='prd_li5 p-relative'>
            <a onClick={() => this.onActiveMenu('dich-vu')} className='trainsion p-relative' target='_self'>
              DỊCH VỤ
              <span className='arrow-menu' />
            </a>
            <ul className={this.state.activeMenu === 'dich-vu' ? 'noli submenu active' : 'noli submenu'}>
              <li><a className='trainsion' href='dich-vu/dich-vu/thong-tin-ve-ac-quy/chuc-nang-cua-ac-quy.html' target='_self'>Thông tin về ắc quy</a></li>
              <li><a className='trainsion' href='dich-vu/dich-vu/huong-dan-su-dung/huong-dan-ac-quy-acid.html' target='_self'>Hướng dẫn sử dụng</a></li>
              <li><a className='trainsion' href='dich-vu/dich-vu/meo-su-dung-ac-quy-2/10-dau-hieu-ac-quy-can-duoc-cham-soc.html' target='_self'>Mẹo sử dụng ắc quy</a></li>
              <li><a className='trainsion' href='dich-vu/hoi-dap.html' target='_self'>Hỏi đáp</a></li>
            </ul>
          </li> */}
          {/* <li className='prd_li6 p-relative'>
            <a onClick={() => this.onActiveMenu('tuyen-dung')} className='trainsion p-relative' target='_self'>
              Tuyển dụng
              <span className='arrow-menu' />
            </a>
            <ul className={this.state.activeMenu === 'tuyen-dung' ? 'noli submenu active' : 'noli submenu'}>
              <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/lam-viec-tai-gsv.html' target='_self'>Môi trường làm việc</a></li>
              <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/che-do-dai-ngo.html' target='_self'>Chế độ đãi ngộ</a></li>
              <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/dao-tao-va-phat-trien.html' target='_self'>Đào tạo và Phát triển</a></li>
              <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/co-hoi-nghe-nghiep.html' target='_self'>Cơ hội nghề nghiệp</a></li>
            </ul>

          </li> */}
          <li className='prd_li7 p-relative flex-grow-0'><a className='trainsion' href='/contact' target='_self'>Liên hệ</a></li>
        </ul>
      </div>
    </div>
  </div>
}

export default subscribe({ category: null, categoryPost: null })(HeaderMiddle)
