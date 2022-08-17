import React from 'react';

const Hero = () => {
	return (
		<section className='bg-gray-50 h-screen flex justify-center items-center'>
			<div className='max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
				<div className='max-w-xl mx-auto text-center'>
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						Understand User Flow.
						<strong className='font-extrabold text-indigo-600 sm:block'>Increase Conversion.</strong>
					</h1>

					<p className='mt-4 sm:leading-relaxed sm:text-xl'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className='flex flex-wrap justify-center gap-4 mt-8'>
						<a
							className='block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-indigo-600 focus:outline-none focus:ring'
							href='/get-started'>
							Get Started
						</a>

						<a
							className='block w-full px-12 py-3 text-sm font-medium text-indigo-600 rounded shadow sm:w-auto hover:text-indigo-600 active:text-red-500 focus:outline-none focus:ring'
							href='/about'>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
