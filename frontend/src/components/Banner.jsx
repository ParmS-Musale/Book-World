import React from 'react'
import banner from "/Banner.jpg" // Use the root path for files in the public directory

function Banner() {
  return (
  <>
    <div className="max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full md:w-1/2 dark:bg-slate-900 dark:text-white order-2 md:order-1 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello, Welcome Here To Learn Something{" "}
            <span className="text-pink-500">
              New Everyday..!!!
            </span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat laudantium, quaerat ut non excepturi asperiores aliquam sunt eaque ea quo, fugit molestias id.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <button className="btn mt-6 btn-secondary">Get Started</button>
      </div>
      <div className="order-1 w-full md:w-1/2 dark:bg-slate-900 dark:text-white">
        <img src={banner} className="w-92 h-92" alt="Banner" /> {/* Use the root path for files in the public directory */}
      </div>
    </div>
  </>
  );
}

export default Banner
