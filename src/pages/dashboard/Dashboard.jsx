import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';

// Temporary data
const enrolledCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 99.99,
    instructor: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    progress: 75,
    totalLessons: 48,
    completedLessons: 36
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
    },
    progress: 30,
    totalLessons: 36,
    completedLessons: 12
  },
];

const recentLessons = [
  {
    id: 1,
    courseId: 1,
    title: 'Advanced React Hooks',
    courseName: 'Complete Web Development Bootcamp',
    lastWatched: '2024-02-20T10:30:00',
    progress: 80
  },
  {
    id: 2,
    courseId: 2,
    title: 'Introduction to Machine Learning',
    courseName: 'Data Science Fundamentals',
    lastWatched: '2024-02-19T15:45:00',
    progress: 60
  },
];

const Dashboard = () => {
  return (
    <div className="py-16 px-4 font-sans antialiased bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">My Dashboard</h1>

      {/* Enrolled Courses Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
              <CourseCard {...course} />
              <div className="p-6 bg-white border-t border-gray-100 rounded-b-2xl">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Watched Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Recently Watched</h2>
        <div className="space-y-6">
          {recentLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 sm:mb-0 sm:mr-6 text-center sm:text-left">
                <h3 className="font-bold text-xl mb-1 text-gray-900">{lesson.title}</h3>
                <p className="text-gray-600 text-md">{lesson.courseName}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Last watched: {new Date(lesson.lastWatched).toLocaleDateString()}
                </p>
              </div>
              <Link
                to={`/dashboard/course-player/${lesson.courseId}?lesson=${lesson.id}`}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 flex-shrink-0"
              >
                Resume
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;