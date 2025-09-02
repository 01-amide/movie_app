import MovieCard from "./MovieCard"

const Filter = ({ movies, title, rating }) => {
    return (
        <div className="flex gap-3 flex-wrap">
        {rating
            ? movies
            .filter((movie) =>
                movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .filter((movie) => movie.rating == rating)
            .map((movie, index) => <MovieCard {...movie} />)
        : movies
            .filter((movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .map((movie, index) => <MovieCard {...movie} />)
        }
        </div>
    )
}

export default Filter
