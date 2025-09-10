import { motion } from 'framer-motion';
import './loadingscreen.css';

const LoadingScreen = () => {
	return (
		<motion.div className='loading-screen' initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
			<motion.div className='loader-text' initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
				HQ
			</motion.div>
			<div className='loader-bar'>
				<div className='loader-progress' />
			</div>
		</motion.div>
	);
};

export default LoadingScreen;
