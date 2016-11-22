const RegisterValidate = values => {
  const errors = {}
  if(!values.username) {
    errors.username = 'Required'
  } else if(!/^[a-z][\w\.]{0,20}$/i.test(values.username)) {
    errors.username = 'Username must contain only A-Z, a-z, 0-9 or _'
  } else if(values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters'
  } else if(values.username.length > 20) {
    errors.username = 'Username must be at greatly 20 characters'
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

  // if(!values.picture) {
  //   errors.picture = 'Required'
  // }

  if(!values.firstname) {
    errors.firstname = 'Required'
  } else if(values.firstname.length > 50) {
    errors.firstname = 'Firstname too long, Please try again'
  }

  if(!values.lastname) {
    errors.lastname = 'Required'
  } else if(values.lastname.length > 50) {
    errors.lastname = 'Lastname too long, Please try again'
  }

  if(!values.gender) {
    errors.gender = 'Required'
  }

  if(!values.phone) {
    errors.phone = 'Required'
  } else if(values.phone.length > 20) {
    errors.phone = 'Phone number too long, Please try again'
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
    } else if(values.address.city.length > 50) {
      address["city"] = ['City too long, Please try again']
    }

    if(!values.address.district){
      address["district"] = ['Required']
    } else if(values.address.district.length > 50) {
      address["district"] = ['District too long, Please try again']
    }

    if(!values.address.street){
      address["street"] = ['Required']
    } else if(values.address.street.length > 50) {
      address["street"] = ['Street too long, Please try again']
    }

    if(!values.address.zipcode){
      address["zipcode"] = ['Required']
    } else if(values.address.zipcode.length > 20) {
      address["zipcode"] = ['Zipcode too long, Please try again']
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
    } else if(values.ship.city.length > 50) {
      ship["city"] = ['City too long, Please try again']
    }

    if(!values.ship.district) {
      ship["district"] = ['Required']
    } else if(values.ship.district.length > 50) {
      ship["district"] = ['District too long, Please try again']
    }

    if(!values.ship.street) {
      ship["street"] = ['Required']
    } else if(values.ship.street.length > 50) {
      ship["street"] = ['Street too long, Please try again']
    }


    if(!values.ship.zipcode) {
      ship["zipcode"] = ['Required']
    } else if(values.ship.zipcode.length > 50) {
      ship["zipcode"] = ['Zipcode too long, Please try again']
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
