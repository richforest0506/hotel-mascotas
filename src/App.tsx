import Footer from './Footer';
import Form from './Form';
import Hero from './Hero';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Stats from './Stats';

function App() {
	return (
		<div className='bg-gray-50'>
			<Navbar />
			<Hero />
			<Stats />
			<Reviews />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
