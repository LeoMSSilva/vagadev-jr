import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import '../scss/index.scss';
import navebar from '../svgs/iconHamburguer.svg';
import navebarClicked from '../svgs/iconHamburguerClose.svg';

function Nav() {
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		isMobile && setMobile(true);
	}, []);

	const imageExchange = () => {
		document.querySelector('.navbarImage').classList.toggle('hidden');
		document.querySelector('.navbarImageClicked').classList.toggle('hidden');
	};

	const navebarClick = () => {
		if (mobile) {
			document.querySelector('.navebar').classList.toggle('hidden');
			document.querySelector('header').classList.toggle('blue');
			document.querySelector('body').classList.toggle('backgroundColorNavebar');
			document.querySelector('footer').classList.toggle('navFullScreen');
			imageExchange();
		}
	};

	const navebarHover = () => {
		if (!mobile) {
			document.querySelector('.navebar').classList.toggle('hidden');
		}
	};

	const navebarOut = () => {
		document.querySelector('.navebar').classList.add('hidden');
	};

	return (
		<div className="nav" onMouseLeave={navebarOut} onMouseEnter={navebarHover}>
			<button id="navbarIcon" onClick={navebarClick}>
				<img className="navbarImage" src={navebar} alt="" />
				<img className="navbarImageClicked hidden" src={navebarClicked} alt="" />
			</button>
			<div className="navebar hidden">
				<div id="triangle" />
				<nav>
					<ul>
						<li>
							<a href="/#">Luta</a>
							<ul className="sub">
								<li>
									<a href="/#">Mortal Kombat</a>
								</li>
								<li>
									<a href="/#">Smash Bros</a>
								</li>
								<li>
									<a href="/#">Killer Instict</a>
								</li>
								<li>
									<a href="/#">DBZ Kakarot</a>
								</li>
							</ul>
						</li>
						<div className="line" />
						<li>
							<a href="/#">Ação / Aventura</a>
							<ul className="sub">
								<li>
									<a href="/#">GTA V</a>
								</li>
								<li>
									<a href="/#">Tomb Raider</a>
								</li>
								<li>
									<a href="/#">HALO</a>
								</li>
								<li>
									<a href="/#">Call of Duty</a>
								</li>
							</ul>
						</li>
						<div className="line" />
						<li>
							<a href="/#">Corrida</a>
							<ul className="sub">
								<li>
									<a href="/#">NEED For SPEED</a>
								</li>
								<li>
									<a href="/#">Forza Horizon</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Nav;
