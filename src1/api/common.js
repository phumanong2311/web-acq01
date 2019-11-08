import API from './api'
import _ from 'lodash'
export default class Common extends API {
  common (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix('all')}) }
  productList (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix(`category/${payload.catId}/products`)}) }
  productDetail (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix(`category/${payload.catId}/product/${payload.productId}`)}) }
  blogList (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix(`category-post/${payload.catPostId}/posts`)}) }
  postDetail (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix(`category-post/${payload.catPostId}/post/${payload.postId}`)}) }
  sendContact (payload = {}) { return super.post(super.basAPI(), null, {...payload, api: super.apiPrefix('contact')}) }
}
