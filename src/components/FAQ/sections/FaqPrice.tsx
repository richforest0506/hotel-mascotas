import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Hotel</p>
					</RouterLink>
					<RouterLink to='/faq/price'>
						<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>Cennik</p>
					</RouterLink>
					<RouterLink to='/faq/procedures'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Procedury</p>
					</RouterLink>
					<RouterLink to='/faq/other'>
						<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Inne</p>
					</RouterLink>
				</nav>

				<div className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Ile zapłacę za pobyt kociaka?</h5>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						W naszym hotelu jest kilka wartiantów cenowych w zależności od ilości kotów i ich rozkładu po pokojach.
						Kotki od jednego właściciela można umieścić bez obaw w jednym pokoju co zaskutuje mniejszą ceną za każdego
						kolejnego pupila. W jednym pokoiku może być maksymalnie do 3 kotów.
						<br />
						<br />
						Przykładowe ceny za dobę w jednym pokoju:
						<br />
						1 kot - 45zł/dobę
						<br />
						2 koty - 73zł/dobę
						<br />3 koty - 83zł/dobę
					</p>
				</div>
				<details className='p-6 rounded-lg bg-gray-50 group' open>
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
						Jeżeli jest taka potrzeba by kot który jest aktualnie u nas na wczasach, pojechał na wizytę do weterynarza
						właściciel jest zobowiązany opłacić koszty weterynaryjne + należy doliczyć opłatę usługi w wysokości 50zł.
					</p>
				</details>
			</div>
		</div>
	);
};

export default FaqPrice;
