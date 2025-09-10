import { motion } from 'framer-motion';
import './projects.css';

const ProjectsSection = () => {
	const projects = [
		{
			id: 1,
			title: 'E-commerce Platforması',
			category: 'Featured',
			description:
				'Tam funksional e-ticarət tətbiqi React, Node.js və MongoDB istifadə edərək. Ödəniş sistemi, admin paneli və inventory idarəetməsi daxildir.',
			image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=800',
			technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			github: 'https://github.com/Haqverdi56/E-Commerce-Full-Stack',
			demo: 'https://e-commerce-full-stack-pink.vercel.app/',
			featured: true,
		},
		{
			id: 2,
			title: 'Bubble Game',
			description: 'Sadə və əyləncəli bubble oyunu JavaScript ilə hazırlanmış.',
			image: '/bubble.png',
			technologies: ['HTML5', 'CSS', 'JavaScript'],
			github: 'https://github.com/Haqverdi56/Bubble-game-js',
			demo: 'https://bubble-game-js.vercel.app/',
		},
		{
			id: 3,
			title: 'IP Address Tracker',
			description: 'IP adres daxil edərək məkan göstərmə tətbiqi.',
			image: '/ipaddress.png',
			technologies: ['JavaScript', 'React', 'Leaflet'],
			github: 'https://github.com/Haqverdi56/IP-Address-Tracker',
			demo: 'https://ip-address-tracker-ten-pi.vercel.app/',
		},
		{
			id: 4,
			title: 'Hava Durumu',
			description: 'Gözəl UI/UX olan hava durumu tətbiqi geolocation və forecast xüsusiyyətləri ilə.',
			image: 'https://www.bigcountryhomepage.com/wp-content/uploads/sites/56/2019/07/Weather-v2.jpg?w=640&h=360&crop=1',
			technologies: ['React', 'API', 'Charts'],
			github: 'https://github.com/Haqverdi56/Weather-api',
			demo: 'https://weather-api-eta.vercel.app/',
		},
	];

	return (
		<section id='projects' className='projects section'>
			<div className='container'>
				<motion.div className='section-header' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
					<span className='section-number'>04</span>
					<h2 className='section-title'>Layihələr</h2>
					<p className='section-subtitle'>Mənim ən yaxşı işlərimdən nümunələr</p>
				</motion.div>

				<div className='projects-content'>
					{/* Featured Project */}
					{projects
						.filter((p) => p.featured)
						.map((project, index) => (
							<motion.div
								key={project.id}
								className='project-card featured'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
							>
								<div className='project-image'>
									<img src={project.image} alt={project.title} />
									<div className='project-overlay'>
										<div className='project-links'>
											{project.github && (
												<a href={project.demo} target='_blank' rel='noopener noreferrer' className='project-link'>
													<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M9 19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V9H9V19Z'
															stroke='currentColor'
															stroke-width='2'
														></path>
														<path
															d='M20 5C20 3.89543 19.1046 3 18 3H15.5L14.5 2H9.5L8.5 3H6C4.89543 3 4 3.89543 4 5V5C4 6.10457 4.89543 7 6 7H18C19.1046 7 20 6.10457 20 5V5Z'
															stroke='currentColor'
															stroke-width='2'
														></path>
													</svg>
												</a>
											)}
											{project.demo && (
												<a href={project.github} target='_blank' rel='noopener noreferrer' className='project-link'>
													<svg viewBox='0 0 24 24' fill='none'>
														<path d='M18 13V19A2 2 0 0116 21H5A2 2 0 013 19V8A2 2 0 015 6H11' stroke='currentColor' strokeWidth='2' />
														<path d='M15 3H21V9' stroke='currentColor' strokeWidth='2' />
														<path d='M10 14L21 3' stroke='currentColor' strokeWidth='2' />
													</svg>
												</a>
											)}
										</div>
									</div>
								</div>

								<div className='project-info'>
									<div className='project-category'>{project.category}</div>
									<h3 className='project-title'>{project.title}</h3>
									<p className='project-description'>{project.description}</p>
									<div className='project-tech'>
										{project.technologies.map((tech, techIndex) => (
											<span key={techIndex} className='tech-tag'>
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}

					{/* Regular Projects */}
					<div className='projects-grid'>
						{projects
							.filter((p) => !p.featured)
							.map((project, index) => (
								<motion.div
									key={project.id}
									className='project-card'
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ y: -10 }}
								>
									<div className='project-image'>
										<img src={project.image} alt={project.title} />
										<div className='project-overlay'>
											<div className='project-links'>
												{project.github && (
													<a href={project.demo} target='_blank' rel='noopener noreferrer' className='project-link'>
														<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M9 19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V9H9V19Z'
																stroke='currentColor'
																stroke-width='2'
															></path>
															<path
																d='M20 5C20 3.89543 19.1046 3 18 3H15.5L14.5 2H9.5L8.5 3H6C4.89543 3 4 3.89543 4 5V5C4 6.10457 4.89543 7 6 7H18C19.1046 7 20 6.10457 20 5V5Z'
																stroke='currentColor'
																stroke-width='2'
															></path>
														</svg>
													</a>
												)}
												{project.demo && (
													<a href={project.github} target='_blank' rel='noopener noreferrer' className='project-link'>
														<svg viewBox='0 0 24 24' fill='none'>
															<path d='M18 13V19A2 2 0 0116 21H5A2 2 0 013 19V8A2 2 0 015 6H11' stroke='currentColor' strokeWidth='2' />
															<path d='M15 3H21V9' stroke='currentColor' strokeWidth='2' />
															<path d='M10 14L21 3' stroke='currentColor' strokeWidth='2' />
														</svg>
													</a>
												)}
											</div>
										</div>
									</div>

									<div className='project-info'>
										<h3 className='project-title'>{project.title}</h3>
										<p className='project-description'>{project.description}</p>
										<div className='project-tech'>
											{project.technologies.map((tech, techIndex) => (
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
			</div>
		</section>
	);
};

export default ProjectsSection;
