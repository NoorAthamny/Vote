import {  useState } from "react";
// import Noor from "./Noor";
// import Yazan from "./Yazan";
import { useNavigate } from "react-router-dom";
import Users from "./Users";

const Auth = () => {
  const {users , loading , error } = Users();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 

  // const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();




  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      // Save user data in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate(`/user${user.id}`);
    } else {
      setMessage("Invalid email or password.");
    }
  };




  return (
    <section className="form-section">
      <form >
        <img src="public/images/logo-vote-01.png" alt="vote-logo" />
        <h1>SIGN IN</h1>

        <label htmlFor="email">Email</label>
        <input
          className="input"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value) } required 
        />

        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />

        <section>
          <button
            className="signin"
            type="button"
            onClick={handleLogin} 
          >
            Sign In
          </button>

        </section>
        {message && <p>{message}</p>}
        {loading && <p>Loading users...</p>}
        {error && <p>Error fetching users: {error}</p>}
        {/* <button>LogOut</button> */}
      </form>

    </section>
  );
};

export default Auth;