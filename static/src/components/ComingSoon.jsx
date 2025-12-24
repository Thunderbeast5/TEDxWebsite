import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    // Changed to min-h-screen to ensure it's vertically centered on the whole page
    <section className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-4xl w-full text-center -mt-20"> 
        {/* Added -mt-20 to visually balance the "middle" appearance */}
        
        {/* Logo and 2.0 Container */}
        <div className="flex items-center justify-center gap-0 mb-10">
          <img 
            src="/logo-white1.png" 
            alt="TEDx kkwieeer logo" 
            className="h-32 sm:h-44 w-auto object-contain" 
          />
          <span className="text-[45px] sm:text-[105px] font-light tracking-tighter text-white leading-none -ml-2 sm:-ml-4">
            2.0
          </span>
        </div>

        <div className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Coming Soon
        </div>
        
        {/* Line break added here */}
        <div className="mt-6 text-lg sm:text-xl text-gray-400 max-w-md mx-auto">
          We’re working on something new. 
          <span className="block mt-1">Check back soon.</span>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/home"
            className="inline-flex items-center justify-center rounded-md px-8 py-4 text-white font-semibold transition text-lg"
            style={{ backgroundColor: '#EB0028' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#C40022')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#EB0028')}
          >
            View Our Past Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;