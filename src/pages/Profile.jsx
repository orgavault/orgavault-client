import React from 'react'
import '../css/Profile.css'


function Profile() {
  return (
    <div className='Profile'>
      <h1>Your Profile</h1>
      <div className="profile-head">
        <img className="pic"></img>
        <hr />
        <div className="infos">
          <h3>Username : <span>user123</span></h3>
          <h3>Name : <span>user</span></h3>
          <h3>Email : <span>user@orgavault.com</span></h3>
          <h3>password : <span>xxxxxxxx</span></h3>
        </div>
      </div>


    </div>
  )
}

export default Profile