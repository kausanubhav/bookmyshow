import { Link, useLocation } from "react-router-dom"

export default function MovieDetail() {
  const location = useLocation()
  const movie = location.state.movie
  const { image, name, genres, officialSite, rating, summary } = movie
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false
    } else {
      text = text.toString()
    }
    return text.replace(/(<([^>]+)>)/gi, "")
  }

  return (
    <div className=" singleShow">
      <img className="mr-2" src={image} alt="" />

      <div className="singleShow__info">
        <h1>{name}</h1>
        {genres.map((genre) => (
          <span className="singleShow__genre" key={genre}>
            {genre}
          </span>
        ))}
        <p>
          <strong>Rating:</strong>
          {rating}
        </p>
        <p>
          <strong>Official Site: </strong>
          <a href={officialSite} target="_blank" rel="noreferrer">
            {officialSite}
          </a>
        </p>

        <p>
          {" "}
          <strong>Summary: </strong>
          {removeTags(summary)}
        </p>

        <Link to ='/book-ticket' state={{name:name}}>
          <button className="singleShow__booking-btn">Book Ticket</button>
        </Link>
      </div>
    </div>
  )
}
