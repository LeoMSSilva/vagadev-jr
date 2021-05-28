// import { useState, useEffect } from 'react';
import lightbox from '../imgs/lightbox.png';
import '../scss/index.scss';

function Lightbox() {
	function closeLightbox() {
		document.querySelector('.backgroundLightbox').classList.toggle('hidden');
	}
	return (
		<>
			<div className="backgroundLightbox hidden">
				<div className="lightbox">
					<button className="close" onClick={closeLightbox} />
					<div className="text">
						<div className="line" />
						<p>Pedido realizado com sucesso!</p>
						<div className="line" />
					</div>
					<img className="success" src={lightbox} alt="" />
				</div>
			</div>
		</>
	);
}

export default Lightbox;
