import React from 'react';
import { Link } from 'react-scroll';

const Stats = () => {
	return (
		<section className='text-white bg-gray-900' id='details'>
			<div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
				<div className='max-w-lg mx-auto text-center'>
					<h2 className='text-3xl font-bold sm:text-4xl'>Oddaj kota w zaufane ręce</h2>

					<p className='mt-4 text-gray-300'>
						Hotel działa na podstawie kilku wartości które sprawiają, że nasza współpraca z klientami i opieka nad
						zwierzakami przebiega bezproblemowo i w jak najprzyjemniejszej atmosferze. Przekonaj się sam.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Spokój i wygoda</h3>

						<p className='mt-1 text-sm text-gray-300'>
							Nasze miejsce wypoczunku charakteryzuje się ciszą, pobliską naturą oraz kompletnym brakiem klimatu
							miastowego. Dzięki świetnej lokalizacji oraz wystroju hotelu, twoja pociecha będzie mogła prawdziwie się
							zrelaksować na przytulnym łóżku.
						</p>
					</div>

					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Indywidualne podejście</h3>

						<p className='mt-1 text-sm text-gray-300'>
							Ile kotów tyle charakterów - podejście opiekuna to najważniejsza rzecz decydująca o tym jak zwierzak
							zaklimatyzuje się w nowym otoczeniu. Dbamy o to, żeby pociechy czuły, że są w przyjaznym miejscu i nie
							stresowały się nowymi sytuacjami.
						</p>
					</div>

					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Służymy pomocą</h3>

						<p className='mt-1 text-sm text-gray-300'>
							W każdym momencie twojego urlopu czuj się swobodnie by skontaktować się znami w każdej sprawie. Rozumiemy,
							że nawet chwilowa rozłąka z najważniejszymi członkami rodziny może być ciężka, dlatego zawsze jesteśmy w
							razie jakichkolwiek pytań!
						</p>
					</div>

					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Rodzinna atmosfera</h3>

						<p className='mt-1 text-sm text-gray-300'>
							Naszym celem jest to aby każdy kociak, który zawita w naszym hotelu czuł się kochany oraz potrzebny,
							uczucie miłości i zadbania to najważniejsze fundamenty udanego pobytu. Dbamy o to, żeby pobyt u Nas
							powodował chęć powrotu kota przy każdej najbliższej okazji.
						</p>
					</div>

					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Udany wypoczynek</h3>

						<p className='mt-1 text-sm text-gray-300'>
							Twoje wakacje będą bezstresowe i w końcu poczujesz ulgę, że kot znajduje się w odpowiednim miejscu. Nie
							jest rzadkim przypadkiem, iż pociecha która skorzysta z naszej opieki potrafi mieć lepsze wakacje od
							samego właściciela.
						</p>
					</div>

					<div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-indigo-600/10 hover:border-indigo-600/10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-10 h-10 text-indigo-600'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M12 14l9-5-9-5-9 5 9 5z' />
							<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
							/>
						</svg>

						<h3 className='mt-4 text-xl font-bold text-white'>Pasja to miłość</h3>

						<p className='mt-1 text-sm text-gray-300'>
							Hotel został stworzony w zamysłach o realne potrzeby oraz z powodu ogromnej miłości do kotków. Każdego
							czworonoga dażymy opieką jaką sami byśmy chcieli aby nasze kotki dostały podczas pobytu.
						</p>
					</div>
				</div>

				<div className='mt-12 text-center'>
					<Link
						spy
						smooth
						duration={500}
						className='inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent active:text-indigo-600 focus:outline-none focus:ring cursor-pointer'
						to='contact'>
						<span className='text-sm font-medium'> Get Started </span>

						<svg
							className='w-5 h-5 ml-3'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Stats;
