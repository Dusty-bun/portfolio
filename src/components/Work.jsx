import React from 'react';
import WorkImg from '../assets/workImg.jpg';
import sucert from '../assets/sucert.jpeg'
import youtube from '../assets/youtube.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work & Achievements
          </p>
          <p className='py-6'>// Check this out</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

     

        {/* Grid Item */}
        <div
            style={{ backgroundImage: `url(${youtube})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Dusty-bun/youtube_clone' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                  </a>
               </div>
              </div>
            </div>

      
            <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/Dusty-bun/chillapp' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                  </a>
               </div>
              </div>
            </div>

                {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${sucert})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Software University
              </span>
              <div className='pt-8 text-center'>
                <a href='https://softuni.bg/certificates/details/141730/3652c93f' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Original
                  </button>
                  </a>
               </div>
              </div>
            </div>




         </div>
       </div>
      </div>

  );
};

export default Work;
