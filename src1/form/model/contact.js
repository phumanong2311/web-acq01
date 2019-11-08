import { required, email } from 'react-hooks-usemodel/dist/utils/validators'

export default () => {
  return {
    email: {
      label: 'Email',
      placholder: 'Email',
      validators: [
        { test: required(), errorMessage: '%(label)s is required' },
        { test: email(), errorMessage: '%(label)s invalid' }
      ]
    },

    name: {
      label: 'name',
      placholder: 'Name',
      validators: [
        { test: required(), errorMessage: '%(label)s is required' }
      ]
    },

    subject: {
      label: 'subject',
      placholder: 'Subject'
    },

    message: {
      label: 'message',
      placholder: 'Your Message Here'
    }
  }
}
