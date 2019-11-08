import React from 'react'

export default ({prefix, title, categories}) => {
  return <React.Fragment>
    <h2>{title}</h2>
    <div className='panel-group category-products' id='accordian'>
      {
        categories.map(el => {
          if (el.parentId) return
          const childrens = categories.filter(e => e.parentId === el._id)
          if (childrens.length > 0) {
            return (
              <div key={el._id} className='panel panel-default'>
                <div className='panel-heading'>
                  <h4 className='panel-title'>
                    <a data-toggle='collapse' data-parent='#accordian' href={`#childrens-${el._id}`}>
                      <span className='badge pull-right'><i className='fa fa-plus' /></span>
                      {el.title}
                    </a>
                  </h4>
                </div>
                <div id={`childrens-${el._id}`} className='panel-collapse collapse'>
                  <div className='panel-body'>
                    <ul>
                      {childrens.map(item => <li key={`children-${item._id}`}><a href={`${prefix}/${item.link}`}>{item.title}</a></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div key={el._id} className={`panel panel-default `}>
                <div className='panel-heading'>
                  <h4 className='panel-title'><a href={prefix + '/' + el.link}>{el.title}</a></h4>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  </React.Fragment>
}
