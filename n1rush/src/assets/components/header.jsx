import '../scss/index.scss';
import Nav from './nav';
import Slider from './slider';
import logo from '../imgs/logo.png';
import buy from '../svgs/shoppingBag.svg';
import contact from '../svgs/contact.svg';
import search from '../svgs/search.svg';

function Header() {
	return (
		<>
			<header>
				<div className="headerLeft">
					<Nav />
					<img src={logo} alt="Logo da N1Rush" />
				</div>
				<div className="headerRight">
					<img src={contact} alt="Página de contato" />
					<p>Contato</p>
					<div className="lineVertical" />
					<img src={search} alt="Página de pesquisa" />
					<p>Buscar</p>
					<div className="lineVertical" />
					<img src={buy} alt="Sacola de compras" />
					<p className="bag" />
				</div>
			</header>
			<Slider/>
		</>
	);
}

export default Header;
