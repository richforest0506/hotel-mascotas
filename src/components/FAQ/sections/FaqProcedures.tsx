import {
	faArrowLeft,
	faHotel,
	faMoneyBill1Wave,
	faClipboardList,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';

const FaqProcedures = () => {
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
						<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>
							Procedury <FontAwesomeIcon className='hidden sm:inline-block' icon={faClipboardList} />
						</p>
					</RouterLink>
					<RouterLink to='/faq/other'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>
							Inne <FontAwesomeIcon className='hidden sm:inline-block' icon={faEllipsisVertical} />
						</p>
					</RouterLink>
				</nav>

				<div className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Czy wszystkie koty przebywają razem?</h5>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						Nie pozwalamy obcym kotom mieć ze sobą kontaktu - co oznacza, że wszystkie koty od różnych właścicieli są
						wypuszczane osobno. Nie daje to możliwości sytuacji konfliktów między zwierzakami. Kotki z tych samych domów
						mogą przebywać razem jeżeli właściciel tego zechce.
					</p>
				</div>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Co jedzą kotki? Czy każdy dostaje to samo jedzenie?</h5>

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
						Każdy kot ma przechowywaną swoją własną karmę i to ją spożywa. Nie karmimy kota jedzeniem którego nie ma na
						codzień w domu by nie spowodować problemów żoładkowych. Każdy właściciel jest zobowiązany przywieźć ze sobą
						przy przyjeździe jedzenie dla kotka które ma mu wystarczyć na cały pobyt. Dawki jedzenia uzgadniane są na
						miejscu.
					</p>
				</details>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Czy koty muszą mieć aktualne szczepienia?</h5>

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
						Tak, jest to wymóg bez którego nie ma możliwości odbycia wizyty w naszym hotelu. Kot musi posiadać aktualne
						szczepienia na choroby zakaźne. <span className='text-indigo-700'>Uwaga: </span>
						data samego szczepienia kota nie może być krótsza niż 2 tygodnie w stosunku do przyjazdu kota.
					</p>
				</details>
			</div>
		</div>
	);
};

export default FaqProcedures;
