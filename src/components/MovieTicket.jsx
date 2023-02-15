import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { runFireworks } from "../assets/utils"

export default function MovieTicket() {
  const location = useLocation()
  const name = location.state.name
  const user = JSON.parse(localStorage.getItem("user"))
  const [email, setEmail] = useState(user.email)
  const navigate = useNavigate()

  const handleConfirmation = () => {
    runFireworks()
    setTimeout(() => {
        navigate("/")
        
    }, 5000);
  }
  return (
    <div>
      <h1 className="my-5 text-center">Book your ticket now</h1>
      <form className="mx-3">
        <div className="form-group row my-5">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Name of the show
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value={name}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center my-5">
          <button type="button" class="btn btn-primary btn-lg" onClick={handleConfirmation}>
            Confirm booking
          </button>
        </div>
      </form>
    </div>
  )
}
