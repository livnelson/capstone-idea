import { useState, useEffect  } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from './Avatar'
import '../styles/SignUp.css'

function CreateUser({ setUser }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatars, setAvatars] = useState([]);

  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handlAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      profile_img: avatar
    };
    console.log(userObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("/create", configObject)
      .then((r) => r.json())
      .then((user) => {
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
        setAvatar("")
        setUser(user)
        navigate(`/UserHome`)
      });
  }

  useEffect(() => {
    fetch ('/avatars')
    .then((res) => res.json())
    .then((avatarArray) => {
      console.log(avatarArray)
      setAvatars(avatarArray)
    })
  },[])

  const mappedAvatars = avatars.map((avatar) => {
    return <Avatar key={avatar.id} id={avatar.id} name={avatar.name} img_url={avatar.img_url} />
  })
  
  return (
    <div>
      <div className="signup-card">
      <Link to="/"  className="back-link">← Back to Log In</Link>
      <h1 className='greeting'>Welcome to Myflix!</h1>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              name="username"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={handleUsernameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={firstName}
              placeholder="Enter Your First Name"
              onChange={handleFirstNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="last_name"
              type="text"
              value={lastName}
              placeholder="Enter Your Last Name"
              onChange={handleLastNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="profile_img"
              value={avatar}
              placeholder="Enter Profile Img URL Here"
              onChange={handlAvatarChange}
              required
            />
            <br />
            <div className="avatars">{mappedAvatars}</div>
            <button className="button" type="submit">Sign Up Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateUser;