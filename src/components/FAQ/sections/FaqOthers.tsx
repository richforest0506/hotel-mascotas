import {
	faArrowLeft,
	faClipboardList,
	faEllipsisVertical,
	faHotel,
	faMoneyBill1Wave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';

const FaqOthers = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='space-y-4 max-w-4xl'>
				<RouterLink to='/'>
					<button className='relative shrink-0 mt-12 mx-6 p-3 inline-block text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring w-10 h-10'>
						<span className='sr-only'> Cofnij </span>
						<FontAwesomeIcon className='absolute top-50 left-50 -translate-y-2/4 -translate-x-2/4' icon={faArrowLeft} />
					</button>
				</RouterLink>
				<nav className='p-6 flex text-sm pt-0 font-medium border-b border-gray-100'>
					<RouterLink to='/faq'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>
							Hotel <FontAwesomeIcon className='hidden sm:inline-block' icon={faHotel} />
						</p>
					</RouterLink>
					<RouterLink to='/faq/price'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>
							Cennik <FontAwesomeIcon className='hidden sm:inline-block' icon={faMoneyBill1Wave} />
						</p>
					</RouterLink>
					<RouterLink to='/faq/procedures'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>
							Procedury <FontAwesomeIcon className='hidden sm:inline-block' icon={faClipboardList} />
						</p>
					</RouterLink>
					<RouterLink to='/faq/other'>
						<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>
							Inne <FontAwesomeIcon className='hidden sm:inline-block' icon={faEllipsisVertical} />
						</p>
					</RouterLink>
				</nav>

				<div className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Jak koty reaguj?? na nowe miejsce?</h5>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						Wszystko zale??y od charakteru kociaka. Zawsze dok??adamy najwi??kszych stara?? aby wizyta w naszym hotelu by??a
						dla futrzak??w ??wietnym prze??yciem. Natomiast nie ma tu jednoznacznej odpowiedzi, ka??dy zwierzak jest inny i
						wymaga indywidualnego podej??cia kt??re pozwoli mu si?? przystosowa?? do nowego miejsca.
					</p>
				</div>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>M??j kot przyjmuje leki - czy mo??e przyjecha?? do hotelu?</h5>

						<span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='absolute inset-0 opacity-100 group-open:opacity-0'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='absolute inset-0 opacity-0 group-open:opacity-100'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
							</svg>
						</span>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						Je??eli kot choruje i istnieje potrzeba podawania lek??w w jakiejkolwiek formie, w??a??ciciel musi o tym
						poinformowa?? przed rezerwacj?? pobytu i poda?? szczeg????y ewentualnego prowadzenia leczenia przez hotel.
					</p>
				</details>
			</div>
		</div>
	);
};

export default FaqOthers;
