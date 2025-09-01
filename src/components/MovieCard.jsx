

const MovieCard = ({title='Unknown',
        description='No description',
        posterUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s',
        rating=0.0
    }) => {
    return (
        <div className="border w-[200px] rounded flex-col justify-center">
            <img src={posterUrl} alt="" className="w-[100%] h-[250px] object-cover" />
            <div className="px-3 py-1">
                <p className="font-bold">{title}</p>
                <p className="line-clamp-2">{description}</p>
            </div>
            <p className="flex justify-end px-3 py-1 font-bold">{rating}</p>
        </div>
    )
}

export default MovieCard
