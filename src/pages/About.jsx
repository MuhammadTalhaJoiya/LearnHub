import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-16 font-sans antialiased">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">About LearnHub</h1>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="bg-green-50 p-8 rounded-2xl shadow-lg border border-green-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At LearnHub, we believe that quality education should be accessible to everyone. Our mission is to empower individuals worldwide with the knowledge and skills they need to succeed in today's digital world.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We collaborate with industry experts and leading professionals to create comprehensive, practical courses that prepare our students for real-world challenges.
          </p>
        </section>

        <section className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 2023, LearnHub started with a simple idea: to bridge the gap between traditional education and the rapidly evolving tech industry. What began as a small collection of programming courses has grown into a diverse platform offering everything from web development to data science.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Today, we serve thousands of students globally, helping them transform their careers and achieve their professional goals.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Instructors</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn from industry professionals with years of real-world experience in their respective fields.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"></path></svg>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Practical Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Hands-on projects and real-world applications to ensure you can apply what you learn.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.653-.105-1.285-.304-1.857M17 20v-2h-3M9 12V4m0 8a3 3 0 01-3 3H4a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2H9a3 3 0 01-3-3zM12 4a3 3 0 013-3h1a2 2 0 012 2v1h-3.64l-1.455 3.018A2.96 2.96 0 0012 11zM12 4c1.657 0 3-1.343 3-3V1h-6v3c0 1.657 1.343 3 3 3z"></path></svg>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Community Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Join a vibrant community of learners and get support whenever you need it.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 15h.01M7 18h.01M13 12h.01M13 15h.01M13 18h.01M16 7h.01M16 12h.01M16 15h.01M16 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn at your own pace with lifetime access to course materials.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <svg className="w-8 h-8 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Quality Education</h3>
                <p className="text-gray-700 leading-relaxed">We maintain high standards in our course content and delivery.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <svg className="w-8 h-8 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v14m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">We constantly update our curriculum to reflect industry trends.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <svg className="w-8 h-8 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">Inclusivity</h3>
                <p className="text-gray-700 leading-relaxed">We believe everyone deserves access to quality education.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About