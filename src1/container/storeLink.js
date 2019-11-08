const prefixSP = '/san-pham'
const prefixBV = '/bai-viet'

export {
  prefixBV,
  prefixSP
}

export default {
  HOME: '/',
  CONTACT: '/contact',
  CATEGORY_PRODUCT_LIST: prefixSP + '/:catlink',
  CATEGORY_PRODUCT_DETAIL: prefixSP + '/:catlink/:productLink',
  CATEGORY_BLOG_LIST: prefixBV + '/:catBloglink',
  CATEGORY_BLOG_DETAIL: prefixBV + '/:catBloglink/:postLink'
}
