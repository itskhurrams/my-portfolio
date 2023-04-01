import React from 'react';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            I am a developer with leadership skills
          </p>
          <p className='py-2 text-gray-600'>
            A passionate technologist with keen interest in software engineering
            over 18 years of industry experience.
          </p>
          <p className='py-2 text-gray-600'>
            Being a product enthusiast, full stack developer & architect I
            always love to engineer a solution for complete product lifecycle. I
            always have provided strategic direction for technical assessment,
            definition, prioritization, architecture, design and deployment of
            new products and services. Providing IT vision and strategy to
            C-level executives that are emerging or are in process of building
            their IT division.
          </p>
          <p className='py-2 text-gray-600'>
            Diverse and thorough hands-on experience with technology stack of
            Microsoft .Net platform, Node Js & Python. Designing solution and
            software architecture, selecting application stack, developing
            framework, technology standards, project methodology, build process
            and coding standards have been some of frequent responsibilities
            that I have carried out. Furthermore, steering team members along
            the project life cycle, providing technical leadership and mentoring
            them are some of the valuable contributions made along the way.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400'>
          <img
            src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 1170w'
            alt='Coding'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
