import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Login from './Login'
import UserHome from './UserHome'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const {id} = useParams()

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
        <Route exact path='/UserHome' element={<UserHome user={user} />} />
      </Routes>
    </div>
  );
}

export default App;