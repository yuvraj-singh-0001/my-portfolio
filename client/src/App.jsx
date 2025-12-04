export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-8">
      
      {/* TEST BANNER - Will show if Tailwind works */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-white text-center mb-3">
          ✅ TAILWIND CSS IS WORKING!
        </h1>
        <p className="text-white text-center text-lg">
          If you see this green-blue gradient, Tailwind is working perfectly!
        </p>
      </div>
      
      {/* Simple Portfolio */}
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">MyPortfolio</h1>
            <div className="space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        </nav>
        
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Yuvraj</span>
          </h2>
          <p className="text-xl text-gray-600">Full Stack Developer</p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-700 mb-2">React.js</h3>
            <p className="text-blue-600">Frontend development</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
            <h3 className="text-xl font-bold text-green-700 mb-2">Node.js</h3>
            <p className="text-green-600">Backend development</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300">
            <h3 className="text-xl font-bold text-red-700 mb-2">MySQL</h3>
            <p className="text-red-600">Database management</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Form</h3>
          <form>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold hover:opacity-90 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500">
          <p>Built with React + Vite + Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}