import { motion } from 'framer-motion';
import './skills.css';

const SkillsSection = () => {
	const skillCategories = [
		{
			title: 'Frontend',
			icon: '🎨',
			skills: [
				{ name: 'React.js', percentage: 90 },
				{ name: 'Next.js', percentage: 95 },
				{ name: 'JavaScript', percentage: 95 },
				{ name: 'TypeScript', percentage: 70 },
				{ name: 'WebSocket', percentage: 80 },
				{ name: 'RTK Query', percentage: 90 },
				{ name: 'React Query', percentage: 85},
				{ name: 'CSS/SCSS', percentage: 90 },
				{ name: 'TAILWIND', percentage: 95 },
			],
		},
		{
			title: 'Backend',
			icon: '⚙️',
			skills: [
				{ name: 'Node.js', percentage: 88 },
				{ name: 'Express.js', percentage: 82 },
				{ name: 'MongoDB', percentage: 80 },
				{ name: 'JWT', percentage: 75 },
				{ name: 'Socket.io', percentage: 75 },
			],
		},
		{
			title: 'Alətlər',
			icon: '🛠️',
			skills: [
				{ name: 'MS Word', percentage: 85 },
				{ name: 'Adobe Premiere Pro', percentage: 70 },
				{ name: 'Adobe After Effects', percentage: 65 },
				{ name: 'Adobe Illustrator', percentage: 70 },
			],
		},
	];

	return (
		<section id='skills' className='skills section'>
			<div className='container'>
				<motion.div
					className='section-header'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<span className='section-number'>03</span>
					<h2 className='section-title'>Bacarıqlar</h2>
					<p className='section-subtitle'>Mənim texniki bilgilərim və alətlərim</p>
				</motion.div>

				<div className='skills-categories'>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							className='skill-category'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
						>
							<div className='category-header'>
								<div className='category-icon'>
									{category.icon}
								</div>
								<h3>{category.title}</h3>
							</div>

							<div className='skills-list'>
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className='skill-item'>
										<div className='skill-name'>
											<span>{skill.name}</span>
											<span className='skill-percentage'>{skill.percentage}%</span>
										</div>
										<div className='skill-bar'>
											<motion.div
												className='skill-progress'
												initial={{ width: '0%' }}
												whileInView={{ width: `${skill.percentage}%` }}
												transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
												viewport={{ once: true }}
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
