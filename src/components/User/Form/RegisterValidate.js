const RegisterValidate = values => {
  const errors = {}
  if(!values.username) {
    errors.username = 'Required'
  } else if(values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters'
  } else if(values.username.length > 20) {
    errors.username = 'Username must be at greatly 20 characters'
  }


  if(!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if(!values.repassword) {
    errors.repassword = 'Required'
  }

  if(values.password !== values.repassword) {
    errors.repassword = 'Password didn\'t match'
  }

  if(!values.picture) {
    errors.picture = 'Required'
  }

  if(!values.firstname) {
    errors.firstname = 'Required'
  }

  if(!values.lastname) {
    errors.lastname = 'Required'
  }

  if(!values.gender) {
    errors.gender = 'Required'
  }

  if(!values.phone) {
    errors.phone = 'Required'
  }

  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // if(!values.address){
  //   errors.address = 'Required'
  // }

  // if(!values.address.district){
  //   errors.address.district = 'Required'
  // }
  //
  // if(!values.address.street){
  //   errors.address.street = 'Required'
  // }
  //
  // if(!values.address.zipcode){
  //   errors.address.zipcode = 'Required'
  // }

  return errors
}

export default RegisterValidate
