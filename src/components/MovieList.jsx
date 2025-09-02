import MovieCard from "./MovieCard"

const MovieList = ({movies}) => {
    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {movies.map((movie, index) =>(
                <MovieCard {...movie}/>
            ))}
        </div>
    )
}

export default MovieList
