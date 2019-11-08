import React from 'react'
import {useModel} from 'react-hooks-usemodel'
import contactModel from './model/contact'
import Field from './field'
import {Input, Area} from '../control'
import {APICommon} from '../api'
import {Alert} from '../component'

export default () => {
  const model = useModel(contactModel)

  const {email, name, subject, message} = model

  const [showMessage, setShowMessage] = React.useState(false)

  const onChange = (e) => {
    if (showMessage) setShowMessage(false)
    model.extractFromEvent(e)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!model.errors) {
      const data = model.data
      APICommon.sendContact(data).then(resp => {
        model.clearData()
        setShowMessage(true)
      })
    }
  }

  const closeMessage = () => setShowMessage(false)

  return <form id='main-contact-form' onSubmit={onSubmit} className='contact-form row' name='contact-form'>
    {showMessage && <Alert onClose={closeMessage} />}
    <Field className='form-group col-md-6'>
      <Input name={email.name} placeholder={email.placholder} value={email.value} onChange={onChange} error={email.error} />
    </Field>

    <Field className='form-group col-md-6'>
      <Input name={name.name} placeholder={name.placholder} value={name.value} onChange={onChange} error={name.error} />
    </Field>

    <Field className='form-group col-md-6'>
      <Input name={subject.name} placeholder={subject.placholder} value={subject.value} onChange={onChange} error={subject.error} />
    </Field>

    <Field className='form-group col-md-12'>
      <Area name={message.name} rows='8' id='message' value={message.value} placeholder={message.placholder} onChange={onChange} error={message.error} />
    </Field>
    <div className='form-group col-md-12'>
      <input disabled={!model.isValid} type='submit' name='submit' className='btn btn-primary pull-right' value='Submit' />
    </div>
  </form>
}
