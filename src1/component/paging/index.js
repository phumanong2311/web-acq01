import React from 'react'

const Paging = ({ page = 1, total, pageSize = 1, changePage }) => {
  var count = Math.ceil(parseInt(total) / parseInt(pageSize))

  var pages = []

  const pageNumber = parseInt(page)

  var pre = (pageNumber > 1) ? pageNumber - 1 : 1
  var next = (pageNumber < count) ? pageNumber + 1 : count

  let start = 1
  if (pageNumber > 3) {
    start = pageNumber - 2
  }

  if (count > 2) pages.push(<li key='first' data-page='1' onClick={changePage}><a>First</a></li>)
  pages.push(<li key='pre' data-page={pre} onClick={changePage}><a>{'<'}</a></li>)

  for (var i = start; i <= count; i++) {
    if (pageNumber + 3 === i) break
    var active = i === pageNumber ? 'paginate_button active' : 'paginate_button'
    pages.push(<li key={i} data-page={i} onClick={changePage} className={'page-item ' + active}><a>{i}</a></li>)
  }

  pages.push(<li key='next' data-page={next} onClick={changePage}><a>{'>'}</a></li>)
  if (count > 2) pages.push(<li key='last' data-page={count} onClick={changePage}><a>Last</a></li>)
  return <ul className='pagination'>{pages}</ul>
}

export default Paging
