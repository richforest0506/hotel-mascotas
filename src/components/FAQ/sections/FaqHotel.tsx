import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';

const FaqHotel = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<div className='space-y-4 max-w-4xl'>
					<RouterLink to='/'>
						<button className='relative shrink-0 mt-12 mx-6 p-3 inline-block text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring w-10 h-10'>
							<span className='sr-only'> Cofnij </span>
							<FontAwesomeIcon
								className='absolute top-50 left-50 -translate-y-2/4 -translate-x-2/4'
								icon={faArrowLeft}
							/>
						</button>
					</RouterLink>
					<nav className='p-6 flex text-sm pt-0 font-medium border-b border-gray-100'>
						<RouterLink to='/faq'>
							<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>Hotel</p>
						</RouterLink>
						<RouterLink to='/faq/price'>
							<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Cennik</p>
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
							<h5 className='font-medium text-gray-900'>Jaki jest dokładny adres hotelu?</h5>
						</summary>

						<p className='mt-4 leading-relaxed text-gray-700'>
							Hotel położony jest 5km pod poznaniem, a nasz dokładny adres to Łęczyca ul. Podgórna 26 62-051. Można nas
							znaleźć również na google, aby wygodnie wybrać optymalną trasę do hotelu.
						</p>
					</div>

					<details className='p-6 rounded-lg bg-gray-50 group'>
						<summary className='flex items-center justify-between cursor-pointer'>
							<h5 className='font-medium text-gray-900'>W jakich godzinach hotel funkcjonuje?</h5>

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
							Pracujemy od 10:00 do 18:00 - natomiast nasz dzień jest podzielony na kilka bloków. Od 10:00 - 12:00
							czekamy na odbiory pociech z hotelu, a od 14:00 - 18:00 przyjmujemy nowych klientów. Godziny zmieniają się
							w sobotę - kotka można odebrać w godzinach 10:00 - 11:00, a przywieźć 13:00 - 15:00.
						</p>
					</details>
					<details className='p-6 rounded-lg bg-gray-50 group'>
						<summary className='flex items-center justify-between cursor-pointer'>
							<h5 className='font-medium text-gray-900'>Jak można ustalić termin pobytu?</h5>

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
							Zapraszamy na naszego facebooka lub bezpośredni kontakt przez formularz w celu ustalenia odpowiedniego
							terminu. Można równiez zadzwonić na numer{' '}
							<a href='tel:500227824' className='text-indigo-700 hover:text-indigo-900'>
								500-227-824
							</a>{' '}
							lub napisać maila na adres{' '}
							<a href='mailto:biuro@hotelmascotas.pl' className='text-indigo-700 hover:text-indigo-900'>
								biuro@hotelmascotas.pl
							</a>
							.
						</p>
					</details>
				</div>
			</div>
		</>
	);
};

export default FaqHotel;
