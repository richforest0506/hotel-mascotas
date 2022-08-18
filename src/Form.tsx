const Form = () => {
	return (
		<div className='w-full px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-50' id='contact'>
			<div className='max-w-lg mx-auto'>
				<h1 className='text-2xl font-bold text-center text-indigo-600 sm:text-3xl'>Dowiedz się więcej</h1>

				<p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
					Już dziś napisz do Nas wiadomość, a my postaramy się rozwiać twoje wszystkie wątpliwości! Przed wysłaniem
					zobacz zakładkę FAQ.
				</p>

				<form action='' className='p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl'>
					<p className='text-lg font-medium'>Wyślij zapytanie</p>

					<div>
						<label htmlFor='email' className='text-sm font-medium'>
							E-mail
						</label>

						<div className='relative mt-1'>
							<input
								type='email'
								id='email'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
								placeholder='Wprowadż e-mail'
							/>
						</div>
					</div>

					<div>
						<label htmlFor='password' className='text-sm font-medium'>
							Wiadomość
						</label>

						<div className='relative mt-1'>
							<textarea
								id='password'
								className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm h-40'
								placeholder='Napisz wiadomość...'
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
