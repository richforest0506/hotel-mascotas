import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
	const img = require('../../images/logo.png');

	return (
		<nav className='flex items-center justify-between w-full p-4 px-16 mx-auto bg-gray-900'>
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
					FAQ
				</RouterLink>
			</ul>
		</nav>
	);
};

export default Navbar;
