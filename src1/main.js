import React from 'react'
import ReactDom from 'react-dom'
import {withData} from 'react-hooks-usemodel'
import {APICommon} from './api'

import './scss/main.scss'

import App from './container/App'

APICommon.common().then(resp => {
  const Application = withData({...resp.data})(App)
  ReactDom.render(<Application />, document.getElementById('app'))
})
