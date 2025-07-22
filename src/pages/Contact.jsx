import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-16 font-sans antialiased">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">Get in Touch</h1>
      
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        {/* Contact Information */}
        <div className="md:w-1/2 p-12 bg-gradient-to-br from-teal-500 to-green-500 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Reach Out to Us</h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            Have questions about our courses or need help getting started? We're here to help!
            Fill out the form or use the contact information below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-yellow-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m1.21-1.21L12 10.51l4.444 4.444m-1.93-1.93l2.828-2.828m-2.828 2.828L12 10.51l-2.828 2.828m2.828-2.828l-2.828 2.828M12 21.001V12.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V21a.5.5 0 00.5.5h1a.5.5 0 00.5-.5zM12 10.51V3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v7.51a.5.5 0 00.5.5h1a.5.5 0 00.5-.5zM12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                <p className="text-teal-100 opacity-90">
                  123 Education Street, Learning City, LC 12345, United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-yellow-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13.5v-3m0-6V7.5a2.5 2.5 0 00-2.5-2.5h-13A2.5 2.5 0 003 7.5V16.5A2.5 2.5 0 005.5 19h13A2.5 2.5 0 0021 16.5V7.5A2.5 2.5 0 0018.5 5h-13a2.5 2.5 0 00-2.5 2.5z"></path></svg>
              <div>
                <h3 className="text-lg font-semibold mb-1">Contact Info</h3>
                <p className="text-teal-100 opacity-90">
                  Email: contact@learnhub.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Support Hours: Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-yellow-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2.885-9.432a2.828 2.828 0 013.99 0l7.121 7.121a2.828 2.828 0 010 3.99L10.99 21.01a2.828 2.828 0 01-3.99 0L3 14.008a2.828 2.828 0 010-3.99l7.121-7.121z"></path></svg>
              <div>
                <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-yellow-200 hover:text-white transition-colors duration-200 text-lg"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-yellow-200 hover:text-white transition-colors duration-200 text-lg"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-yellow-200 hover:text-white transition-colors duration-200 text-lg"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-yellow-200 hover:text-white transition-colors duration-200 text-lg"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200 input-placeholder-gray-400"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200 input-placeholder-gray-400"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200 input-placeholder-gray-400"
                placeholder="Course Inquiry"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-colors duration-200 input-placeholder-gray-400"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact