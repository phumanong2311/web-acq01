import React from 'react'

export default ({children, ...otherProps}) => {
  return <div {...otherProps}>{children}</div>
}
