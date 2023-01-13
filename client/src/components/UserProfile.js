import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import '../styles/UserProfile.css'

function UserProfile({ user, setUser }) {
  const [showEdit, setShowEdit] = useState(false)
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();


  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  function handleDeleteProfile() {
    //DELETE to `/productions/${params.id}`
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          console.log('User Deleted')
          navigate('/')
        } else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
  }

  function goToHome() {
    navigate('/UserHome')
  }

  return (
    <div>
    <div className='user-profile'>
      <Link to='/UserHome' onClick={goToHome} className='back-link'>← Back to Home</Link>
      <img src={user.avatar} alt={user.username} className='avatar' />
      <h1 className='greeting'>Hello {user.first_name}!</h1>
      <button className="button" type="submit" onClick={handleShowEdit}>Edit  Profile</button>
      {showEdit ? <EditProfile user={user} setUser={setUser} /> : null}
      <button className="button" type="submit" onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
    <h2 className='my-faves'>My Faves List</h2>
    </div>
  )
}

export default UserProfile