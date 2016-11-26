import React from 'react'
import { HeaderBarApp } from '../App/HeaderBarApp'

const UserDetail = ({user}) => (
  <div className="container">
    <img src={user.picture} />
    <p>Register date:{' '}
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
    </p>
    <p>Username: {user.username}</p>
    <p>Firstname: {user.firstname}</p>
    <p>Lastname: {user.lastname}</p>
    <p>Gender: {user.gender}</p>
    <p>Birthday:{' '}
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
    <p>Address:</p>
    {
      (user.address) ? (
        <div>
          <p>Street: {user.address.street}</p>
          <p>District: {user.address.district}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
        </div>
      ) : (<span></span>)
    }
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
