import {
	faArrowLeft,
	faClipboardList,
	faEllipsisVertical,
	faHotel,
	faMoneyBill1Wave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';

const FaqPrice = () => {
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
						<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>
							Cennik <FontAwesomeIcon className='hidden sm:inline-block' icon={faMoneyBill1Wave} />
						</p>
					</RouterLink>
					<RouterLink to='/faq/procedures'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>
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
						<h5 className='font-medium text-gray-900'>Ile zap??ac?? za pobyt kociaka?</h5>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						W naszym hotelu jest kilka wartiant??w cenowych w zale??no??ci od ilo??ci kot??w i ich rozk??adu po pokojach.
						Kotki od jednego w??a??ciciela mo??na umie??ci?? bez obaw w jednym pokoju co zaskutuje mniejsz?? cen?? za ka??dego
						kolejnego pupila. W jednym pokoiku mo??e by?? maksymalnie do 3 kot??w.
						<br />
						<br />
						Przyk??adowe ceny za dob?? w jednym pokoju:
						<br />
						1 kot - 45z??/dob??
						<br />
						2 koty - 73z??/dob??
						<br />3 koty - 83z??/dob??
					</p>
				</div>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Jak wygl??da op??ata za pobyt?</h5>

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
						{' '}
						P??atno??ci za pobyt przyjmowane s?? z g??ry. Op??acenie rezerwacji to 50% ceny pobytu - w przypadku rezygnacji
						wp??ata nie podlega zwrotowi. Ceny pobytu za pok??j nie posiadaj?? ??adnych ukrytych p??atno??ci. Nr konta do
						op??acenia rezerwacji:
						<br />
						<br />
						Dominika Grabowska CREDIT AGRICOLE <span className='text-indigo-700'>74 1940 1076 5934 7369 0000 0000</span>
					</p>
				</details>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Co w razie potrzeby wizyty u weterynarza?</h5>

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
						Je??eli jest taka potrzeba by kot kt??ry jest aktualnie u nas na wczasach, pojecha?? na wizyt?? do weterynarza
						w??a??ciciel jest zobowi??zany op??aci?? koszty weterynaryjne + nale??y doliczy?? op??at?? us??ugi w wysoko??ci 50z??.
					</p>
				</details>
			</div>
		</div>
	);
};

export default FaqPrice;
