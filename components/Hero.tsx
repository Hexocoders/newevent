export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-purple-900 pt-16 pb-48">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      
      {/* Animated Gradient Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-white mb-4">Discover Amazing Events</span>
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Near You
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Find and book tickets for the most exciting concerts, sports events, theater shows, and more. Your next unforgettable experience is just a click away.
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 whitespace-nowrap">
                Find Events
              </button>
            </div>
            <br /><br /><br /> <br />
          </div>
        </div>
      </div>
      
      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="rgb(17 24 39)"
            d="M0,128L40,133.3C80,139,160,149,240,176C320,203,400,245,480,234.7C560,224,640,160,720,149.3C800,139,880,181,960,186.7C1040,192,1120,160,1200,144C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
} 