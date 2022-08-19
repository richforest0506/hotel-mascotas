import { Dispatch, SetStateAction, useRef } from 'react';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

interface IFormProps {
	setPopUp: Dispatch<SetStateAction<boolean>>;
	setErrorPopUp: Dispatch<SetStateAction<boolean>>;
}

const Form: React.FC<IFormProps> = ({ setPopUp, setErrorPopUp }: IFormProps) => {
	const formRef = useRef<any>();

	const PUBLIC_API_KEY: string = 'xo6zRwvL2H6_z362c';
	const SERVICE_ID: string = 'service_ujc5rr8';
	const TEMPLATE_ID: string = 'template_w906w2f';

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (!formRef.current) return;
		emailjs.init(PUBLIC_API_KEY);
		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
			.then(result => {
				if (result) setPopUp(true);
				console.log(result);
			})
			.catch(error => {
				if (error) setErrorPopUp(true);
				console.log(error);
			});
		e.target.reset();
	};

	return (
		<div className='w-full px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-50' id='contact'>
			<div className='max-w-lg mx-auto'>
				<h1 className='text-2xl font-bold text-center text-indigo-600 sm:text-3xl cursor-default'>
					Dowiedz się więcej <FontAwesomeIcon className='w-8 h-8 text-indigo-600' icon={faUserGraduate} />
				</h1>

				<p className='max-w-md mx-auto mt-4 text-center text-gray-500 cursor-default'>
					Już dziś napisz do Nas wiadomość, a my postaramy się rozwiać twoje wszystkie wątpliwości! Przed wysłaniem
					zobacz zakładkę info.
				</p>

				<form onSubmit={sendEmail} ref={formRef} className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
					<p className='text-lg font-medium cursor-default'>Wyślij zapytanie</p>

					<div>
						<label htmlFor='email' className='text-sm font-medium'>
							E-mail
						</label>

						<div className='relative mt-1'>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
								placeholder='Wprowadż e-mail'
								required
							/>
						</div>
					</div>

					<div>
						<label htmlFor='name' className='text-sm font-medium'>
							Imię
						</label>

						<div className='relative mt-1'>
							<input
								type='text'
								id='name'
								name='name'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
								placeholder='Wpisz swoje imię...'
								required
							/>
						</div>
					</div>

					<div>
						<label htmlFor='title' className='text-sm font-medium'>
							Tytuł
						</label>

						<div className='relative mt-1'>
							<input
								type='text'
								id='title'
								name='title'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
								placeholder='Uzupełnij tytuł...'
								required
							/>
						</div>
					</div>

					<div>
						<label htmlFor='message' className='text-sm font-medium'>
							Wiadomość
						</label>

						<div className='relative mt-1'>
							<textarea
								id='message'
								name='message'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm h-40'
								placeholder='Napisz wiadomość...'
								required
							/>
						</div>
					</div>

					<button
						type='submit'
						className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent active:text-indigo-600 focus:outline-none focus:ring hover:text-indigo-600'>
						<span className='text-sm font-medium'> Wyślij </span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
