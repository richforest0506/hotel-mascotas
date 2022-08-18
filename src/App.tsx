import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';

function App() {
	return (
		<div className='bg-gray-900'>
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
