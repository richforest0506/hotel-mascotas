import { useState } from 'react';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';

function App() {
	const [showFAQ, setShowFAQ] = useState<boolean>(false);

	return (
		<div className={`${showFAQ ? 'bg-gray-50 min-h-screen' : 'bg-gray-900'}`}>
			{!showFAQ && (
				<>
					<Navbar setShowFAQ={setShowFAQ} />
					<Hero />
					<Stats />
					<Reviews />
					<Form />
					<Footer setShowFAQ={setShowFAQ} />
				</>
			)}
			{showFAQ && <Faq setShowFAQ={setShowFAQ} />}
		</div>
	);
}

export default App;
