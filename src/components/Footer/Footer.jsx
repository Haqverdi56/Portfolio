import { motion } from 'framer-motion';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content'>
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
						&copy; 2024 Haqverdi Quliyev. Bütün hüquqlar qorunur.
					</motion.p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
