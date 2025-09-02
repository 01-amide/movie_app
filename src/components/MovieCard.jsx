import { Star } from "lucide-react";

const MovieCard = ({
  title = "Unknown",
  description = "No description",
  posterUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s",
  rating = 0.0,
}) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col items-center text-center">
        <p className="font-bold text-lg text-white mb-2">{title}</p>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center justify-center gap-1 pb-3">
        <Star className="text-yellow-400" size={18} fill="yellow" />
        <p className="font-bold text-white">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;

