import {Home, List, Detail, Contact, NotFound} from './index'
import STORELINK from './storeLink'
const {
  CONTACT,
  CATEGORY_PRODUCT_LIST,
  CATEGORY_PRODUCT_DETAIL,
  CATEGORY_BLOG_LIST,
  CATEGORY_BLOG_DETAIL
} = STORELINK

export default () => {
  return [
    {key: 'home', path: '/', exact: true, component: Home},
    {key: 'contact', path: CONTACT, exact: true, component: Contact},
    {key: 'product-list', path: CATEGORY_PRODUCT_LIST, component: List},
    {key: 'product-detail', path: CATEGORY_PRODUCT_DETAIL, component: Detail},
    {key: 'blog-list', path: CATEGORY_BLOG_LIST, component: List.BlogList},
    {key: 'blog-detail', path: CATEGORY_BLOG_DETAIL, component: Detail.BlogDetail},
    {key: 'default', component: NotFound}
  ]
}
