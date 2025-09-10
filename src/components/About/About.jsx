import { motion } from 'framer-motion';
import './about.css';

const AboutSection = () => {
	return (
		<section id='about' className='about section'>
			<div className='container'>
				<motion.div
					className='section-header'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<span className='section-number'>01</span>
					<h2 className='section-title'>Haqqımda</h2>
					<p className='section-subtitle'>Mənim hekayəm və professional səyahətim</p>
				</motion.div>

				<div className='about-content'>
					<motion.div
						className='about-text'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<p className='about-intro'>
							Salam! Mən Haqverdi, Fullstack Web Developer və texnologiya həvəskarıyam. Yüksək keyfiyyətli web tətbiqlər yaratmaqdan zövq alıram.
						</p>
						<p>
							Frontend və backend texnologiyalarında dərin bilik və təcrübəyə malikəm. React, Node.js, Python və digər müasir texnologiyalarla
							kompleks layihələr həyata keçirmişəm.
						</p>
						<p>
							Hər bir layihəyə yaradıcı yanaşma və texniki mükəmməllik gətirməyə çalışıram. Məqsədim istifadəçi təcrübəsini ən yüksək səviyyəyə
							çatdırmaqla yanaşı, kod keyfiyyətini də ən yüksək standartlarda saxlamaqdır.
						</p>

						<motion.div
							className='about-stats'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<motion.div className='stat' whileHover={{ scale: 1.05 }}>
								<div className='stat-number'>3+</div>
								<div className='stat-label'>İl Təcrübə</div>
							</motion.div>
							<motion.div className='stat' whileHover={{ scale: 1.05 }}>
								<div className='stat-number'>25+</div>
								<div className='stat-label'>Layihə</div>
							</motion.div>
							<motion.div className='stat' whileHover={{ scale: 1.05 }}>
								<div className='stat-number'>15+</div>
								<div className='stat-label'>Texnologiya</div>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div
						className='about-image'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className='about-img-container'>
							<img
								src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
								alt='About me'
								className='about-img'
							/>
							<div className='about-img-overlay' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
export default AboutSection;
