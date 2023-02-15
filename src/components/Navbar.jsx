import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
export default function Navbar({setUser}) {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    //cleanup function
    return () => (window.onscroll = null)
  }

  const handleClick=()=>{
    localStorage.removeItem('user');
    setUser(null)
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
        </div>
        <div className="right">
          <img
            className="navbarImg"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
