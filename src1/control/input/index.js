import React from 'react'

export default (props) => {
  const {error, className = 'form-control', ...otherProps} = props
  return <React.Fragment>
    <input className={className} {...otherProps} />
    {error && <span className='error-msg'>{error.message}</span>}
  </React.Fragment>
}
