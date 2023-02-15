import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import MovieDetail from "./components/MovieDetail"
import MovieTicket from "./components/MovieTicket"
import Home from "./pages/Home"
import Login from "./pages/Login"
import "./style.scss"
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  return (
    <div>
      <Routes>
        <Route exact path="/" element={user ? <Home setUser={setUser} /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/movie-details" element={<MovieDetail />} />
        <Route path="/book-ticket" element={<MovieTicket />} />
      </Routes>
    </div>
  )
}

export default App
