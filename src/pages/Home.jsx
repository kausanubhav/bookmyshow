import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

export default function Home({setUser}) {
  return (
    <div className="home bg-red">
      <Navbar setUser={setUser} />
      <MoviesList/>
      
    </div>
  )
}