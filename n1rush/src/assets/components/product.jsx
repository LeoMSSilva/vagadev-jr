import { useState } from 'react';
import '../scss/index.scss';
import boughtIten from '../imgs/lightbox.png';
import { useBag } from '../contexts/bagContext';

function Product({ id, name, price, image }) {
	const { bag, setBag } = useBag();
	const [bought, setBought] = useState(false);
	const showLightBox = () => {
		document.querySelector('.backgroundLightbox').classList.remove('hidden');

	};
	const checked = (id) => {
		document.querySelector(`#buy${id} .boughtImg`).classList.toggle('hidden');
		document.querySelector(`#buy${id}`).classList.toggle('bought');
	};

	const buy = (id) => {
		checked(id);
		let button = document.querySelector(`#buy${id}`);
		if (button.classList.contains('bought')) {
			setBought(true);
			setBag(bag + 1);
			showLightBox();
		} else {
			setBought(false);
			setBag(bag - 1);
		}
	};

	return (
		<div className="game">
			<div className="game-image">
				<img src={image} alt="" />
			</div>
			<div className="description">
				<p>{name}</p>
				<p className="price">{price}</p>
				<button id={`buy${id}`} className="comprar" onClick={() => buy(id)}>
					<p className="boughtText">{bought ? 'Comprado!' : 'Comprar'}</p>
					<img className="boughtImg hidden" src={boughtIten} alt="" />
				</button>
			</div>
		</div>
	);
}

export default Product;
