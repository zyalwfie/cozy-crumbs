import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Signature from '../sections/Signature/Signature';

const Home = () => {
	return (
		<>
			<main>
				<Hero />
				<Signature />
				<Gallery />
			</main>
		</>
	);
};

export default Home;
