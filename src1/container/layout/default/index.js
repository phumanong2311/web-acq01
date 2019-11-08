import React from 'react'
import {Header1} from '../component/header'
import Footer from '../component/footer'
import Sub from './sub'

const Layout = ({children}) => {
  return <React.Fragment>
    <Header1 />
    {children}
    <Footer />
  </React.Fragment>
}

Layout.SubLayout = Sub

export default Layout
