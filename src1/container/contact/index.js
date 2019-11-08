import React from 'react'
import {ContactForm} from '../../form'

export default () => {
  return <div id='contact-page' className='container'>
    <br />
    <br />
    <br />
    <br />
    <div className='bg'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2 className='title text-center'>Contact <strong>Us</strong></h2>
          <div id='gmap' className='contact-map' />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8'>
          <div className='contact-form'>
            <h2 className='title text-center'>Get In Touch</h2>
            <div className='status alert alert-success hidden' />
            <ContactForm />
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='contact-info'>
            <h2 className='title text-center'>Contact Info</h2>
            <address>
              <p>E-Shopper Inc.</p>
              <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
              <p>Newyork USA</p>
              <p>Mobile: +2346 17 38 93</p>
              <p>Fax: 1-714-252-0026</p>
              <p>Email: info@e-shopper.com</p>
            </address>
            <div className='social-networks'>
              <h2 className='title text-center'>Social Networking</h2>
              <ul>
                <li>
                  <a href='#'><i className='fa fa-facebook' /></a>
                </li>
                <li>
                  <a href='#'><i className='fa fa-twitter' /></a>
                </li>
                <li>
                  <a href='#'><i className='fa fa-google-plus' /></a>
                </li>
                <li>
                  <a href='#'><i className='fa fa-youtube' /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
