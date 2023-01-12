import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/UserProfile.css'

function UserProfile({ user }) {
  const [editUsername, setEditUsername] = useState();
  const [editPassword, setEditPassword] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [errors, setErrors] = useState(false)


  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setEditUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setEditPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setEditFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setEditLastName(e.target.value);
  }

  function handlAvatarChange(e) {
    setEditAvatar(e.target.value);
  }

  const handleEdit = () => {
    const editUser = {};
    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(editUser),
    };
    // fetch(`/users/${user.id}`, configObject)
    //   .then((r) => r.json())
    //   .then((updatedUser) => {
    //     console.log(updatedUser);
    // setPosts(
    //   posts.map((post) => {
    //     if (updatedPost.id === post.id) {
    //       return updatedPost;
    //     } else return post;
    //   })
    // );
    // setEdit(!edit);
    // });
  };

  function handleDeleteProfile(){
    //DELETE to `/productions/${params.id}`
    fetch(`/users/${user.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
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

  console.log(user)

  return (
    <div>
      <div>
      <h1>Hello {user.first_name}!</h1>
        <button onClick={goToHome}>Back to Home</button>
      </div>
      <img src={user.avatar} alt={user.username} />


      <div className="new-user-card">
        <div className="create-user-form">

          <form onSubmit={handleEdit}>
            <h3>Edit Your Profile</h3>
            <input
              className="input-field"
              name="username"
              type="text"
              value={editUsername}
              placeholder="Enter your username"
              onChange={handleUsernameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              value={editPassword}
              placeholder="Enter a new password"
              onChange={handlePasswordChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={editFirstName}
              placeholder="Enter your first name"
              onChange={handleFirstNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="last_name"
              type="text"
              value={editLastName}
              placeholder="Enter your last name"
              onChange={handleLastNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="profile_img"
              value={editAvatar}
              placeholder="Choose your avatar"
              onChange={handlAvatarChange}
              required
            />
            <br />
            <button className="button" type="submit">Save Profile</button>
          </form>
            <button className="button" type="submit" onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      </div>
      </div >
  )}

export default UserProfile