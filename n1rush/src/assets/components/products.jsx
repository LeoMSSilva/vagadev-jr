import '../scss/index.scss';
import game1 from '../imgs/game1.png';
import game2 from '../imgs/game2.png';
import game3 from '../imgs/game3.png';
import highlights from '../svgs/highlights.svg';
import Product from './product';

import Carousel from 'react-elastic-carousel';

function Products() {

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 301, itemsToShow: 2 },
		{ width: 601, itemsToShow: 3 },
		{ width: 901, itemsToShow: 4 },
	];
	const gamesForSale = [
		{
			id: 1,
			image: game1,
			name: 'Outriders',
			price: 'R$ 200,00',
		},
		{
			id: 2,
			image: game2,
			name: 'CYBERPUNK 2077',
			price: 'R$ 200,00',
		},
		{
			id: 3,
			image: game3,
			name: 'Donkey Kong Country Tropical Freeze',
			price: 'R$ 200,00',
		},
	];
	const preview = (id) => {};
	const next = (id) => {};
	return (
		<>
			<div className="highlights">
				<img src={highlights} alt="" />
				<p>Produtos em destaque</p>
			</div>

			
			<div className="games">
				<Carousel breakPoints={breakPoints}>
					{gamesForSale.map((game) => (
						<Product key={game.id} id={game.id} name={game.name} price={game.price} image={game.image} />
					))}
				</Carousel>
			</div>
		</>
	);
}

export default Products;
