import conf from '../conf/public'

const loadImage = (uri) => conf.domain + '/' + uri

const formatPrice = (price, locale = 'vi-VN') => price ? parseFloat(price).toLocaleString(locale, { style: 'currency', currency: 'VND' }) : ''

const formatDate = (date) => (new Date(date)).toLocaleString('vi-VN', { dateStyle: 'medium' })

const formatTime = (dateTime, hour12 = false) => (new Date(dateTime)).toLocaleString('en-EN', { timeZone: 'UTC', timeStyle: 'short', hour12 })

export {
  loadImage,
  formatPrice,
  formatDate,
  formatTime
}
