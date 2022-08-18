import { Link } from 'react-scroll';

const Footer = () => {
	const img = require('../../images/logo.png');

	return (
		<footer className='bg-gray-900'>
			<div className='max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
				<div className='flex justify-center text-indigo-600'>
					<img src={img} alt='Mascotas logo' className='w-26 h-16' />
				</div>

				<p className='max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400'>
					Wszystkie przydatne linki w jednym miejscu właśnie dla ciebie, w razie wątpliwości zapraszamy do kontaktu.
				</p>

				<nav className='mt-12' aria-labelledby='footer-navigation'>
					<h2 className='sr-only' id='footer-navigation'>
						Footer navigation
					</h2>

					<ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
						<li>
							<Link
								spy
								smooth
								duration={500}
								className='text-white transition hover:text-white/75 cursor-pointer'
								to='details'>
								Szczegóły
							</Link>
						</li>

						<li>
							<Link
								spy
								smooth
								duration={500}
								className='text-white transition hover:text-white/75 cursor-pointer'
								to='reviews'>
								Opinie
							</Link>
						</li>

						<li>
							<Link
								spy
								smooth
								duration={500}
								className='text-white transition hover:text-white/75 cursor-pointer'
								to='contact'>
								Contact
							</Link>
						</li>

						<li>
							<a className='text-white transition hover:text-white/75' href='#contact'>
								FAQ
							</a>
						</li>
					</ul>
				</nav>

				<ul className='flex justify-center gap-6 mt-12 md:gap-8'>
					<li>
						<a
							href='https://www.facebook.com/hotelmascotaspl'
							rel='noopener noreferrer'
							target='_blank'
							className='text-white transition hover:text-white/75'>
							<span className='sr-only'>Facebook</span>
							<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
