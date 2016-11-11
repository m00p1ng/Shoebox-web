import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { sendRegisterForm } from '../../actions/user'
import { connect } from 'react-redux'
import { RegisterApp } from '../../components'


// let RegisterAppContainer = (props) => {
//   const { handleSubmit, pristine, reset, submitting, sendRegisterForm } = props
//   return(
//     <div className="row">
//       <h1>Register</h1>
//       <div className="col s6 offset-s3">
//
//
//         <form onSubmit={handleSubmit(sendRegisterForm)}>
//           <div>
//             <label>First Name</label>
//             <div>
//               <Field name="firstname" component="input" type="text" placeholder="First Name"/>
//             </div>
//           </div>
//
//           <div>
//             <label>First Name</label>
//             <div>
//               <Field name="member.firstname" component="input" type="text" placeholder="First Name"/>
//               <Field name="member.lastname" component="input" type="text" placeholder="First Name"/>
//             </div>
//           </div>
//
//           <div>
//             <button type="submit" disabled={pristine || submitting}>Submit</button>
//             <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//           </div>
//         </form>
//
//       </div>
//     </div>
//   )
// }

class RegisterAppContainer extends Component {
  render() {
      const { handleSubmit, pristine, reset, submitting, sendRegisterForm } = this.props
      return(
        <RegisterApp
          handleSubmit={handleSubmit(sendRegisterForm)}
          pristine={pristine}
          reset={reset}
          submitting={submitting}/>
      )
    }
}

RegisterAppContainer = reduxForm({
  form: 'register'
})(RegisterAppContainer);

export default connect(null, { sendRegisterForm })(RegisterAppContainer)
