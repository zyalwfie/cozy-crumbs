import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';
import Signature from '../sections/Signature/Signature';

const Home = () => {
	return (
		<>
			<main>
				<Hero />
				<Signature />
				<Gallery />
				<Menu />
			</main>
		</>
	);
};

export default Home;
