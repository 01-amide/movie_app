import MovieCard from "./MovieCard"

const MovieList = ({movies}) => {
    return (
        <div className="flex justify-between px-5 pt-5">
            {movies.map((movie, index) =>(
                <MovieCard {...movie}/>
            ))}
        </div>
    )
}

export default MovieList
