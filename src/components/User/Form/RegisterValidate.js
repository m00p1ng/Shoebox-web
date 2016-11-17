const RegisterValidate = values => {
  const errors = {}
  if(!values.username) {
    errors.username = 'Required'
  } else if(values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters'
  } else if(values.username.length > 20) {
    errors.username = 'Username must be at greatly 20 characters'
  } else if(!/^[a-z][\w\.]{0,20}$/i.test(values.username)) {
    errors.username = 'Username must contain only A-Z, a-z, 0-9 or _'
  }


  if(!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  } else if(!values.repassword) {
    errors.repassword = 'Required'
  } else if(values.password !== values.repassword) {
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

  const address = {}
  if(values.address){
    if(!values.address.city){
      address["city"] = ['Required']
    }
    if(!values.address.district){
      address["district"] = ['Required']
    }
    if(!values.address.street){
      address["street"] = ['Required']
    }
    if(!values.address.zipcode){
      address["zipcode"] = ['Required']
    }
    errors.address = address
  }
  else {
    errors.address = {
      "city": ['Required'],
      "district": ['Required'],
      "street": ['Required'],
      "zipcode": ['Required']
    }
  }

  const ship = {}
  if(values.ship) {
    if(!values.ship.city) {
      ship["city"] = ['Required']
    }
    if(!values.ship.district) {
      ship["district"] = ['Required']
    }
    if(!values.ship.street) {
      ship["street"] = ['Required']
    }
    if(!values.ship.zipcode) {
      ship["zipcode"] = ['Required']
    }
    errors.ship = ship
  }
  else {
    errors.ship = {
      "city": ['Required'],
      "district": ['Required'],
      "street": ['Required'],
      "zipcode": ['Required']
    }
  }

  const credit = {}
  if(values.credit) {
    if(!values.credit.id) {
      credit["id"] = ['Required']
    }
    if(!values.credit.type) {
      credit["type"] = ['Required']
    }
    if(!values.credit.exp) {
      credit["exp"] = ['Required']
    }
    errors.credit = credit
  }
  else {
    errors.credit = {
      "id": ['Required'],
      "type": ['Required'],
      "exp": ['Required']
    }
  }

  return errors
}

export default RegisterValidate
