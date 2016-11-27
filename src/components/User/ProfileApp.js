import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'

const UserDetail = ({user}) => (
  <div className="container">
    <div className="card">
      <div className="card-content">
      <div className="row">
      <div className="col">
      <img src={user.picture} width="300" style={{paddingTop: '20px', paddingLeft: '20px'}}/>
    </div>
    <div className="col" style={{paddingLeft: '30px'}}>
      <h3><strong>Profile:</strong> {user.username}</h3>
      <h5><strong>Register date:</strong>{' '}
        {
          (user.date_joined) ? (
            <span>
              {user.date_joined.day}
              /
              {user.date_joined.month}
              /
              {user.date_joined.year}
            </span>
          ) : (<span></span>)
        }
      </h5>
      <p style={{marginTop: '30px', fontSize: '20px'}}><strong>Firstname:</strong> {user.firstname}</p>
      <p style={{fontSize: '20px'}}><strong>Lastname:</strong> {user.lastname}</p>
      <p style={{fontSize: '20px'}}><strong>Gender:</strong> {user.gender}</p>
      <p style={{fontSize: '20px'}}><strong>Birthday:</strong>{' '}
        {
          (user.birthday) ? (
            <span>
              {user.birthday.day}
              /
              {user.birthday.month}
              /
              {user.birthday.year}
            </span>
          ) : (<span></span>)
        }
      </p>
      <p style={{marginTop: '30px', marginBottom: '10px', fontSize: '20px'}}><strong>Address:</strong></p>
      {
        (user.address) ? (
          <div>
            <p style={{fontSize: '20px'}}>Street: {user.address.street}</p>
            <p style={{fontSize: '20px'}}>District: {user.address.district}</p>
            <p style={{fontSize: '20px'}}>City: {user.address.city}</p>
            <p style={{fontSize: '20px'}}>Zipcode: {user.address.zipcode}</p>
          </div>
        ) : (<span></span>)
      }
    </div>
    </div>
  </div>
    </div>
  </div>
)

const ProfileApp = ({user}) => (
  <div>
    <HeaderBarApp
      title="Profile"
      link="profile"/>
    <UserDetail
      user={user} />
  </div>
)

export default ProfileApp
