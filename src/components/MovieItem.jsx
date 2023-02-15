import { Link } from "react-router-dom"

export default function MovieItem(props) {
    const {name,image,rating}=props
console.log(props)
  return (
    <Link to="/movie-details" state={{ movie: props }} className="link">
      <div className=" movie-item my-3">
        <div className="card border border-dark border-1 shadow ">
          <img
            src={
             image
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">
              Rating:{rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
