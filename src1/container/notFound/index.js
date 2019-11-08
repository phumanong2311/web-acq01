import React from 'react'

export default () => {
  return <div className='container text-center'>
    <div className='logo-404'>
      <a href='/'><img src='images/home/logo.png' alt='' /></a>
    </div>
    <div className='content-404'>
      <img src='/images/404/404.png' className='img-responsive' alt='' />
      <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
      <p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
      <h2><a href='/'>Bring me back Home</a></h2>
    </div>
  </div>
}