export default {
  firstName: {
    config: {
      label: 'First name',
      inputtype: 'input',
      type: 'text',
      placeholder: 'First name',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
  lastName: {
    config: {
      label: 'Last name',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Last name',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
  email: {
    config: {
      label: 'Email',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Email',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
  subject: {
    config: {
      label: 'Subject',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Subject',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      // minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
  message: {
    config: {
      label: 'Message',
      inputtype: 'textarea',
      type: 'text',
      placeholder: 'Message',
      rows: 5

    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      // minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
}