import '../scss/index.scss';
import logo from '../imgs/n1.png';

const Footer = () => {
	return (
		<footer>
			<div className="footer-left">
				<img src={logo} alt="Agência n1" />
			</div>
			<div className="footer-right">
				<p>Agência N1 - Todos os direitos reservados</p>
			</div>
		</footer>
	);
};

export default Footer;
