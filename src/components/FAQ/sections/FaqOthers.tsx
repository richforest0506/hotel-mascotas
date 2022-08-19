import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Hotel</p>
					</RouterLink>
					<RouterLink to='/faq/price'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Cennik</p>
					</RouterLink>
					<RouterLink to='/faq/procedures'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Procedury</p>
					</RouterLink>
					<RouterLink to='/faq/other'>
						<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>Inne</p>
					</RouterLink>
				</nav>

				<div className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Jak koty reagują na nowe miejsce?</h5>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						Wszystko zależy od charakteru kociaka. Zawsze dokładamy największych starań aby wizyta w naszym hotelu była
						dla futrzaków świetnym przeżyciem. Natomiast nie ma tu jednoznacznej odpowiedzi, każdy zwierzak jest inny i
						wymaga indywidualnego podejścia które pozwoli mu się przystosować do nowego miejsca.
					</p>
				</div>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Mój kot przyjmuje leki - czy może przyjechać do hotelu?</h5>

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
						Jeżeli kot choruje i istnieje potrzeba podawania leków w jakiejkolwiek formie, właściciel musi o tym
						poinformować przed rezerwacją pobytu i podać szczegóły ewentualnego prowadzenia leczenia przez hotel.
					</p>
				</details>
			</div>
		</div>
	);
};

export default FaqOthers;
