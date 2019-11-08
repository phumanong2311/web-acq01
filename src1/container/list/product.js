import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import useReactRouter from 'use-react-router'
import {Paging, FeatureItem, Advertisement} from '../../component'
import Layout from '../layout'
import {APICommon} from '../../api'
import {prefixSP} from '../storeLink'
const prefix = prefixSP

const List = ({data}) => {
  const categories = _.get(data, 'category.all', [])
  const {match, history} = useReactRouter()
  const category = categories.find(el => el.link === match.params.catlink)

  if (!category) window.location.href = '/page-not-found'

  const [filter, setFilter] = React.useState({ page: match.params.page || 1, pageSize: 1 })

  const [dt, setData] = React.useState({ products: [], total: 0 })

  React.useEffect(() => {
    getList(filter.page)
  }, [])

  const changePage = (e) => {
    const _page = e.currentTarget.getAttribute('data-page')
    history.push(`${prefix}/${match.params.catlink}?page=${parseInt(_page)}`)
    getList(parseInt(_page))
  }

  const getList = (page) => {
    APICommon.productList({ catId: category._id, page, pageSize: filter.pageSize }).then(resp => {
      setFilter({...filter, page})
      setData({...dt, ...resp.data})
    })
  }

  const { products, total } = dt
  const { page, pageSize } = filter

  return <React.Fragment>
    <Advertisement.ACQ category={category} prefix={prefix} />
    <Layout.SubLayout>
      <FeatureItem items={products} />
      <Paging total={total} page={page} pageSize={pageSize} changePage={changePage} />
    </Layout.SubLayout>
  </React.Fragment>
}

export default subscribe({ category: null })(List)
