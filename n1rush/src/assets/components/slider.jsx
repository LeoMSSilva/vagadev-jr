import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobile } from 'react-device-detect';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import '../scss/slider.scss';

import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/core';

import bannerDesktop1 from '../imgs/principalBannerDesktop1.jpg';
import bannerDesktop2 from '../imgs/principalBannerDesktop2.jpg';
import bannerMobile1 from '../imgs/principalBannerMobile1.jpg';
import bannerMobile2 from '../imgs/principalBannerMobile2.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Keyboard]);

const Slider = () => {
	const [mobile, setMobile] = useState(false);
	useEffect(() => {
		isMobile && setMobile(true);
	}, []);

	const game1 = mobile ? bannerMobile1 : bannerDesktop1;
	const game2 = mobile ? bannerMobile2 : bannerDesktop2;
	const gamesSlide = [
		{
			id: 1,
			image: game1,
			name: 'MORTAL KOMBAT',
			preci: 'R$ 299',
			cents: ',99',
			description:
				'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
		},
		{
			id: 2,
			image: game2,
			name: 'Red Dead',
			preci: 'R$ 185',
			cents: ',97',
			description:
				'Trace o seu próprio caminho, combatendo homens da lei, bandidos e animais selvagens para construir uma vida na fronteira americana.\nMonte seu acampamento, viaje sozinho ou com o seu bando e explore tudo, das montanhas nevadas no norte aos pântanos no sul, de postos avançados remotos a fazendas e cidades movimentadas.',
		},
	];

	return (
		<>
			<Swiper
				effect={'fade'}
				navigation={true}
				pagination={{ type: 'fraction' }}
				loop={true}
				autoplay={{ delay: 5000 }}
				keyboard={{ enabled: true }}
			>
				{gamesSlide.map((game) => (
					<SwiperSlide key={game.id}>
						<img className="imageSlide" src={game.image} alt="" />
						<div className="aboutGame">
							<h1>{game.name}</h1>
							<p className="price">
								{game.preci}
								<span className="cents">{game.cents}</span>
							</p>
							<p className="description">{game.description}</p>
						</div>
						<div className="sidebar">
							<div className="nameForGame">{game.name}</div>
							<div className="line" />
							<div className="control" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
