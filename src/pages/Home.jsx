import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

// Temporary data for featured courses
const featuredCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 99.99,
    instructor: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, including statistics, Python, machine learning, and data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 79.99,
    instructor: {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  },
  {
    id: 3,
    title: 'UI/UX Design Essentials',
    description: 'Learn modern UI/UX design principles and tools. Create beautiful and user-friendly interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 0,
    instructor: {
      name: 'Mike Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  }
]

// Temporary data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    quote: 'The web development course was exactly what I needed to transition into tech. Now I\'m working as a frontend developer!'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Data Analyst',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    quote: 'The data science course provided practical skills that I use daily in my job. Highly recommended!'
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'UI Designer',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    quote: 'Thanks to the UI/UX course, I was able to build a strong portfolio and land my dream job in design.'
  }
]

function Home() {
  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-green-500 py-20 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Unlock Your Potential with <span className="text-yellow-200">Quality Education</span>
            </h1>
            <p className="text-xl mb-8 text-teal-100 opacity-90 leading-relaxed">
              Learn from industry experts and advance your career with our comprehensive online courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md">
                Explore Courses
              </Link>
              <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100 flex flex-col items-center text-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-green-300 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-xl mb-1 text-gray-900">{testimonial.name}</h4>
                  <p className="text-green-600 text-sm mb-4">{testimonial.role}</p>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-teal-100 opacity-90">Join thousands of students who are already learning with us</p>
          <Link to="/signup" className="bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home