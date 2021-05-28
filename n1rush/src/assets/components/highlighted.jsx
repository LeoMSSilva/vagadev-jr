import '../scss/index.scss';
import zelda from '../imgs/zeldaBanner.jpg';
import sekiro from '../imgs/sekiroBanner.jpg';

function Highlighteds() {
	const gameshighlighted = [
		{
			id: 1,
			image: zelda,
			name: 'The Legend of Zelda - Breath of th wild',
		},
		{
			id: 2,
			image: sekiro,
			name: 'SEKIRO - Shadows die twice',
		},
	];
	return (
		<div className="highlighted">
			{gameshighlighted.map((banner) => (
				<div className="banner" key={banner.id}>
					<img src={banner.image} alt="" />
					<div className="textBox">
						<div className="name">
							<p>{banner.name}</p>
							<div className="line" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Highlighteds;
