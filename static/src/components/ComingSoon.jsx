import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo-white1.png" alt="TEDx logo" className="h-14 sm:h-16 w-auto" />
        </div>
        <div className="text-4xl sm:text-5xl font-bold tracking-tight">
          Coming Soon
        </div>
        <div className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          2.0
        </div>
        <div className="mt-4 text-base sm:text-lg text-gray-600">
          We’re working on something new. Check back soon.
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/home"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-white font-semibold transition"
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
