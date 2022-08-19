import { Dispatch, SetStateAction } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFAQProps {
	setShowFAQ: Dispatch<SetStateAction<boolean>>;
}

const Faq = ({ setShowFAQ }: IFAQProps) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='space-y-4 max-w-4xl'>
				<button
					className='relative shrink-0 m-6 p-3 inline-block text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring w-10 h-10'
					onClick={() => setShowFAQ(prevState => !prevState)}>
					<span className='sr-only'> Cofnij </span>
					<FontAwesomeIcon className='absolute top-50 left-50 -translate-y-2/4 -translate-x-2/4' icon={faArrowLeft} />
				</button>

				<details className='p-6 rounded-lg bg-gray-50 group' open>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing?</h5>

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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae
						laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
						corporis earum similique!
					</p>
				</details>

				<details className='p-6 rounded-lg bg-gray-50 group'>
					<summary className='flex items-center justify-between cursor-pointer'>
						<h5 className='font-medium text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing?</h5>

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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae
						laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
						corporis earum similique!
					</p>
				</details>
			</div>
		</div>
	);
};

export default Faq;
