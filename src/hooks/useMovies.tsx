import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieDBNowPlaying, Movie } from "../interfaces/movieInterface"

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesInTheather, setMoviesInTheather] = useState<Movie[]>([])
    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        /* const movies = resp.data.results
        setMoviesInTheather(movies) */
        setMoviesInTheather(resp.data.results)
        setIsLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [])

    return {
        moviesInTheather,
        isLoading
    }

}

