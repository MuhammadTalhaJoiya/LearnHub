import { Link } from 'react-router-dom'

function CourseCard({ id, title, description, image, price, instructor }) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-blue-100 hover:border-blue-400/40 group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {price === 0 && (
          <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">FREE</span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1 text-blue-900 group-hover:text-blue-700 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{description}</p>
        <div className="flex items-center mb-4">
          <img 
            src={instructor.avatar} 
            alt={instructor.name}
            className="w-9 h-9 rounded-full mr-3 border-2 border-blue-300 shadow-sm"
          />
          <span className="text-sm text-gray-700 font-medium">{instructor.name}</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-blue-700">
            {price === 0 ? '' : `$${price}`}
          </span>
          <Link 
            to={`/course/${id}`}
            className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard