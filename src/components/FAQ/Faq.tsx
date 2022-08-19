import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Faq = () => {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='space-y-4 max-w-4xl'>
				<button
					className='relative shrink-0 mt-12 mx-6 p-3 inline-block text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring w-10 h-10'
					onClick={() => navigate(-1)}>
					<span className='sr-only'> Cofnij </span>
					<FontAwesomeIcon className='absolute top-50 left-50 -translate-y-2/4 -translate-x-2/4' icon={faArrowLeft} />
				</button>
				<nav className='p-6 flex text-sm pt-0 font-medium border-b border-gray-100'>
					<p className='p-4 -mb-px border-b border-current text-indigo-600 cursor-pointer'>Hotel</p>

					<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Cennik</p>

					<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Procedury</p>

					<p className='p-4 -mb-px border-b border-transparent hover:text-indigo-600 cursor-pointer'>Inne</p>
				</nav>

				<details className='p-6 rounded-lg bg-gray-50 group' open>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Jaki jest dokładny adres hotelu?</h5>

						<span className='relative flex-shrink-0 ml-1.5 w-5 h-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
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
								className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
							</svg>
						</span>
					</summary>

					<p className='mt-4 leading-relaxed text-gray-700'>
						Hotel jest położony jest 5km pod poznaniem, a nasz dokładny adres to Łęczyca ul. Podgórna 26 62-051. Można
						nas znaleźć również na google, aby wygodnie wybrać optymalną trasę do hotelu.
					</p>
				</details>

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
						Pracujemy od 10:00 do 18:00 - natomiast nasz dzień jest podzielony na kilka bloków. Od 10:00 - 12:00 czekamy
						na odbiory pociech z hotelu, a od 14:00 - 18:00 przyjmujemy nowych klientów.
					</p>
				</details>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Ile zapłacę za pobyt kociaka?</h5>

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
						W naszym hotelu jest kilka wartiantów cenowych w zależności od ilości kotów i ich rozkładu po pokojach.
						Kotki od jednego właściciela można umieścić bez obaw w jednym pokoju co zaskutuje mniejszą ceną za każdego
						kolejnego pupila.
						<br />
						<br />
						Przykładowe ceny za dobę w jednym pokoju:
						<br />
						1 kot - 45zł/dobę
						<br />
						2 koty - 65zł/dobę
						<br />3 koty - 83zł/dobę
					</p>
				</details>
				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Czy wszystkie koty przebywają razem?</h5>

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
						Nie pozwalamy obcym kotom mieć ze sobą kontaktu - co oznacza, że wszystkie koty od różnych właścicieli są
						wypuszczane osobno. Pozwala to zredukować stres oraz nie daje możliwości sytuacji konfliktów między
						zwierzakami. Kotki z tych samych domów mogą przebywać razem jeżeli właściciel tego zechce.
					</p>
				</details>
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
						przy przyjeździe jedzenie dla kotka które ma mu wystarczyć na pobyt. Dawki jedzenia uzgadniane są na
						miejscu.
					</p>
				</details>
			</div>
		</div>
	);
};

export default Faq;
