import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="text-4xl sm:text-5xl font-bold tracking-tight">
          Coming Soon
        </div>
        <div className="mt-4 text-base sm:text-lg text-gray-600">
          We’re working on something new. Check back soon.
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/home"
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white font-semibold hover:bg-gray-900 transition"
          >
            View Our Past Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
