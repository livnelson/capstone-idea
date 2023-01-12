import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login'
import UserHome from './UserHome'
import UserProfile from './UserProfile'
import SignUp from './SignUp'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} navigate={navigate} />} />
        <Route exact path='/UserHome' element={<UserHome user={user} />} isLoggedIn={isLoggedIn} />
        <Route exact path='/UserProfile' element={<UserProfile user={user} />} isLoggedIn={isLoggedIn} />
        <Route exact path='/SignUp' element={<SignUp setUser={setUser} />} isLoggedIn={isLoggedIn} />
      </Routes>
    </div>
  );
}

export default App;