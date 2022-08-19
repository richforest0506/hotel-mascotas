import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
	const img = require('../../images/logo.png');

	return (
		<nav className='flex items-center justify-between w-full px-4 lg:px-16 mx-auto bg-gray-900'>
			<a className='inline-flex items-center justify-center bg-gray-900 rounded-lg' href='/'>
				<img src={img} alt='Mascotas logo' className='w-26 h-16' />
			</a>

			<ul className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
				<li className='hidden lg:block'>
					<Link
						spy
						smooth
						duration={500}
						className='px-3 py-2 rounded-lg cursor-pointer text-gray-50 transition hover:text-white/75'
						to='details'>
						{' '}
						Szczegóły{' '}
					</Link>
				</li>

				<li className='hidden lg:block'>
					<Link
						spy
						smooth
						duration={500}
						className='px-3 py-2 rounded-lg cursor-pointer text-gray-50 transition hover:text-white/75'
						to='reviews'>
						{' '}
						Opinie{' '}
					</Link>
				</li>

				<li>
					<Link
						spy
						smooth
						duration={500}
						className='px-3 py-2 rounded-lg cursor-pointer text-gray-50 transition hover:text-white/75'
						to='contact'>
						{' '}
						Kontakt{' '}
					</Link>
				</li>
				<RouterLink
					className='inline-flex items-center px-3 py-2 rounded-lg text-gray-50 transition hover:text-white/75 cursor-pointer'
					to='/faq'>
					Info
				</RouterLink>
				<a
					href='https://www.facebook.com/hotelmascotaspl'
					rel='noopener noreferrer'
					target='_blank'
					className='text-white transition hover:text-white/75'>
					<span className='sr-only'>Facebook</span>
					<svg className='w-6 h-6' fill='#2563eb' viewBox='0 0 24 24' aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
							clipRule='evenodd'
						/>
					</svg>
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
