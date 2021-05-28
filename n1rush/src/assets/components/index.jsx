import '../scss/index.scss';
import Lightbox from './lightbox';
import Header from './header';
import Footer from './footer';
import Main from './main';
import BagProvider from '../contexts/bagContext';

function App() {
	return (
		<BagProvider>
			<Lightbox />
			<Header />
			<Main />
			<Footer />
		</BagProvider>
	);
}

export default App;
