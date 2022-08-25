import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Denis, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building state-of-the-art, easy-to-use, user-friendly websites and applications
              and I am confident I would be an excellent addition to any organization.
              In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
