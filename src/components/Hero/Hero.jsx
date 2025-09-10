import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './hero.css';

const HeroSection = () => {
	const [currentText, setCurrentText] = useState(0);
	const texts = ['Fullstack Developer', 'React Developer', 'Next.js Developer', 'Node.js Developer'];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentText((prev) => (prev + 1) % texts.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div id='home' className='hero section'>
			<div className='hero-background'>
				<div className='hero-shapes'>
					<motion.div
						className='shape shape-1'
						animate={{
							y: [0, -20, 0],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
					<motion.div
						className='shape shape-2'
						animate={{
							y: [0, -15, 0],
							rotate: [0, -180, -360],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 2,
						}}
					/>
					<motion.div
						className='shape shape-3'
						animate={{
							y: [0, -25, 0],
							rotate: [0, 90, 180],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 4,
						}}
					/>
				</div>
			</div>

			<div className='container'>
				<div className='hero-container'>
					<div className='hero-content'>
						<motion.div className='hero-text' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
							<h1 className='hero-name'>
								<motion.span
									className='name-first'
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									Haqverdi
								</motion.span>
								<motion.span
									className='name-last'
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									Quliyev
								</motion.span>
							</h1>

							<div className='hero-title'>
								<AnimatePresence mode='wait'>
									<motion.span
										key={currentText}
										className='typing-text'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.5 }}
									>
										{texts[currentText]}
									</motion.span>
								</AnimatePresence>
							</div>

							<motion.p
								className='hero-description'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								Full-stack Developer kimi JS, React və Node.js-də lazımı qədər bilik və bacarıqlarım var. Mən fərqli mövzularda layihə və proyektlər
								yığmağı sevirəm. Yeni çıxan istənilən bir texnologiyaya sürətli şəkildə adaptasiya ola bilirəm.
							</motion.p>

							<motion.div
								className='hero-buttons'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
							>
								<motion.a
									href='#projects'
									className='btn btn-primary'
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									<span>Layihələrə Bax</span>
									<svg className='btn-icon' viewBox='0 0 24 24' fill='none'>
										<path d='M7 17L17 7M17 7H7M17 7V17' stroke='currentColor' strokeWidth='2' />
									</svg>
								</motion.a>
								<motion.a
									href='#contact'
									className='btn btn-secondary'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									<span>Əlaqə Saxla</span>
								</motion.a>
							</motion.div>
						</motion.div>

						<motion.div
							className='hero-image'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.2, delay: 0.4 }}
						>
							<div className='image-container'>
								<div className='image-backdrop' />
								<img src='/public/haki.jfif' alt='Haqverdi Quliyev' className='hero-img' />
							</div>
						</motion.div>
					</div>

					<motion.div
						className='scroll-indicator'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1.2 }}
					>
						<div className='scroll-line' />
						<span className='scroll-text'>Scroll</span>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
