import MovieCard from "./MovieCard"

const Filter = () => {
    return (
        <div>
            {movies.map((movie, index) =>(
                <MovieCard {...movie}/>
            ))}
        </div>
    )
}

export default Filter
