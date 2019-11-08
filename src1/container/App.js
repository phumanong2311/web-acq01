import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routerLink from './routerLink'

import Layout from './layout'

export default () => {
  return <BrowserRouter>
    <Layout>
      <Switch>
        {routerLink().map(el => <Route {...el} />)}
      </Switch>
    </Layout>
  </BrowserRouter>
}
