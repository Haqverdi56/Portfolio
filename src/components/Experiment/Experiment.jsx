import { motion } from 'framer-motion';
import './experiment.css';

const ExperienceSection = () => {
	const experiences = [
		{
			title: 'Full-Stack Developer',
			company: 'Freelance',
			period: ' 08/2025 - Hazırda',
			description:
				'Next.js, MongoDB və WebSocket istifadə edərək chat tətbiqi hazırlayıram. Multiplayer oyun və real-time tətbiq üzərində işləyirəm.',
			technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebSocket', 'JWT'],
		},
		{
			title: 'Full-Stack Developer',
			company: 'Aladdin Agency LLC',
			period: ' 06/2025 - Hazırda',
			description:
				'Next.js, Node.js və MongoDB istifadə edərək enterprise səviyyəli web tətbiqlər hazırlayıram. Komanda rəhbərliyi və kod rəyləri həyata keçirirəm.',
			technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'E-Point'],
		},
		{
			title: 'Front-end Developer(Freelance)',
			company: 'Freelance',
			period: '05/2024 - 07/2024',
			description: `Tiktok API ilə canlı yayıma göndərilən hədiyyələrin hesablanması, şərhlərə və bəyənmələrə əsasən bəzi əməliyyatları tətbiq etmək`,
			technologies: ['React', 'Node.js', 'JWT', 'WebSocket', 'MongoDB'],
		},
		{
			title: 'Front-end Developer (Startup)',
			company: 'iGame.az',
			period: '03/2024 - 11/2024',
			description:
				'Web həllərin frontend və backend hissələrinin hazırlanmasında iştirak etdim. HTML, CSS, JavaScript və React texnologiyaları ilə çalışdım.',
			technologies: ['HTML', 'React', 'JavaScript', 'Tailwind CSS'],
		},
		{
			title: 'Front-end Developer (Teacher Assistant)',
			company: 'Code Academy ',
			period: '09/2023 - 03/2024',
			description: `Code Academy-də tələbələrə HTML, CSS, JavaScript və React mövzularında dəstək verirdim. Onların layihələrini nəzərdən keçirir və suallarını cavablandırırdım.`,
			technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
		},
	];

	return (
		<section id='experience' className='experience section'>
			<div className='container'>
				<motion.div
					className='section-header'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<span className='section-number'>02</span>
					<h2 className='section-title'>Təcrübə</h2>
					<p className='section-subtitle'>Mənim professional inkişaf yolum</p>
				</motion.div>

				<div className='experience-timeline'>
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							className='experience-item'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className='experience-content'>
								<h3 className='experience-title'>{exp.title}</h3>
								<div className='experience-company'>{exp.company}</div>
								<div className='experience-period'>{exp.period}</div>
								<p className='experience-description'>{exp.description}</p>
								<div className='experience-tech'>
									{exp.technologies.map((tech, techIndex) => (
										<span key={techIndex} className='tech-tag'>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
