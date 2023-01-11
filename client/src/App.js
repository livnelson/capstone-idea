import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login'
import UserHome from './UserHome'


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
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />} />
        <Route path={`/users/${user.id}`} element={<UserHome setIsLoggedIn={setIsLoggedIn} user={user} />} />
      </Routes>
    </div>
  );
}

export default App;