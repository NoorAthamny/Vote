import { useNavigate } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {

  const navigate = useNavigate();
  const [toggle , setToggle] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  
  const handleToggle = () => {
    setToggle(!toggle)
  }


  return (
    <nav>
        <img src="images\logo-vote-01.png" alt="" />
        <ul>
            <button onClick={handleToggle}   className="profile-btn" type="button"> <i className="fa-solid fa-user"></i> User Name <i className="fa-solid fa-caret-down"></i> </button>
            <section className={`dropDwon ${toggle === true ? "show" : ""}`}>
                  <button onClick={handleLogout} type="button">Log Out</button>
            </section>
        </ul>
    </nav>
  )
}

export default NavBar
