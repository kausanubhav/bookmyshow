import axios from "axios"
import { useEffect, useState } from "react"
import uuid from "react-uuid"

import InfiniteScroll from "react-infinite-scroll-component"
import MovieItem from "./MovieItem"
import Spinner from "./Spinner"

export default function MoviesList(props) {
  const [shows, setShows] = useState([])

  const updateList = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all"
    let response = await axios.get(url)
    setShows([...shows, ...response.data])
  }
  console.log(shows)

  useEffect(() => {
    updateList()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={shows ? shows.length : 0}
        next={updateList}
        hasMore={shows?.length <= 500}
        loader={<Spinner />}
      >
        <div className="container moviesList ">
          <div className="row">
            {shows &&
              shows.map((element) => {
                return (
                  <div key={element.show.id + uuid()} className="col-md-4 col-sm-6 col-xs-12">
                    <MovieItem
                      image={
                        element.show.image
                          ? element.show.image.original
                          : "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                      }
                      genres={element.show.genres ? element.show.genres : ["none"]}
                      name={element.show.name}
                      rating={element.show.rating ? element.show.rating.average : "no rating"}
                      officialSite={element.show.officialSite ? element.show.officialSite : "No offical site"}
                      summary={element.show.summary ? element.show.summary : "None provided"}
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
