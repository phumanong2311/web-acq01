import React from 'react'

export default ({onClose = () => {}}) => {
  return <div className='alert alert-success'>
    <button type='button' className='close' data-dismiss='alert' aria-hidden='true' onClose={onClose}>×</button>
    <h4><i class='icon fa fa-check' />Send contact success !!!</h4>
    Success alert preview. This alert is dismissable.
  </div>
}
