import { useState, CSSProperties, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import FaqHotel from './components/FAQ/sections/FaqHotel';
import FaqOthers from './components/FAQ/sections/FaqOthers';
import FaqPrice from './components/FAQ/sections/FaqPrice';
import FaqProcedures from './components/FAQ/sections/FaqProcedures';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
};

const App: React.FC = () => {
	const [errorPopUp, setErrorPopUp] = useState<boolean>(false);
	const [popUp, setPopUp] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if (popUp) {
			setTimeout(() => {
				setPopUp(false);
			}, 5000);
		}
	}, [popUp]);

	useEffect(() => {
		if (errorPopUp) {
			setTimeout(() => {
				setErrorPopUp(false);
			}, 8000);
		}
	}, [errorPopUp]);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<Router>
			<div className={isLoading ? 'relative min-h-screen flex justify-center items-center' : ''}>
				{isLoading ? (
					<CircleLoader className='transition' color='#4f46e5' loading={isLoading} cssOverride={override} size={150} />
				) : (
					<div className='bg-gray-50 min-h-screen'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<Navbar />
										<Hero />
										<Stats />
										<Reviews />
										<Form setPopUp={setPopUp} setErrorPopUp={setErrorPopUp} />
										<Footer />
									</>
								}
							/>
							<Route path='/faq' element={<FaqHotel />} />
							<Route path='/faq/price' element={<FaqPrice />} />
							<Route path='/faq/procedures' element={<FaqProcedures />} />
							<Route path='/faq/other' element={<FaqOthers />} />
						</Routes>
					</div>
				)}
				{popUp && (
					<div className='fixed top-2 right-2 flex items-center gap-4 p-4 text-white bg-gray-900 rounded' role='alert'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 text-green-500'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fill-rule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clip-rule='evenodd'
							/>
						</svg>

						<strong className='text-sm font-normal'>Wiadomość została wysłana</strong>
					</div>
				)}
				{errorPopUp && (
					<div className='flex items-center gap-4 p-4 text-white bg-gray-900 rounded' role='alert'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5 text-red-500'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							stroke-width='2'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
							/>
						</svg>

						<strong className='text-sm font-normal'> Post has been deleted! </strong>
					</div>
				)}
			</div>
		</Router>
	);
};

export default App;
