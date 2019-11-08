import React from 'react'
import {SideBar} from '../../../component'

export default ({children}) => {
  return <section>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'><SideBar /></div>
        <div className='col-sm-9'>{children}</div>
      </div>
    </div>
  </section>
}
