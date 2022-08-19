import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-scroll';

interface INavbarProps {
	setShowFAQ: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowFAQ }: INavbarProps) => {
	const img = require('../../images/logo.png');

	return (
		<nav className='flex items-center justify-between max-w-3xl p-4 mx-auto bg-gray-900'>
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

				<li>
					<p
						className='inline-flex items-center px-3 py-2 rounded-lg text-gray-50 transition hover:text-white/75 cursor-pointer'
						onClick={() => setShowFAQ(prevState => !prevState)}>
						FAQ
					</p>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
