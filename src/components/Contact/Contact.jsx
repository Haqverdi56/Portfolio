import { useState } from 'react';
import { motion } from 'framer-motion';
import './contact.css';

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsSubmitted(true);

		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ name: '', email: '', subject: '', message: '' });
		}, 3000);
	};

	return (
		<section id='contact' className='contact section'>
			<div className='container'>
				<motion.div
					className='section-header'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<span className='section-number'>05</span>
					<h2 className='section-title'>Əlaqə</h2>
					<p className='section-subtitle'>Gəlin birlikdə möhtəşəm işlər yaradaq</p>
				</motion.div>

				<div className='contact-content'>
					<motion.div
						className='contact-info'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.div className='contact-item' whileHover={{ scale: 1.02 }}>
							<div className='contact-icon'>
								<svg viewBox='0 0 24 24' fill='none'>
									<path
										d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
										stroke='currentColor'
										strokeWidth='2'
									/>
									<path d='M22 6L12 13L2 6' stroke='currentColor' strokeWidth='2' />
								</svg>
							</div>
							<div className='contact-details'>
								<h3>Email</h3>
								<p>qhaqverdi56@gmail.com</p>
							</div>
						</motion.div>

						<motion.div className='contact-item' whileHover={{ scale: 1.02 }}>
							<div className='contact-icon'>
								<svg viewBox='0 0 24 24' fill='none'>
									<path d='M16 8A6 6 0 016 8C6 10.3 8 13 12 17C16 13 18 10.3 18 8A6 6 0 016 8Z' stroke='currentColor' strokeWidth='2' />
									<circle cx='12' cy='8' r='2' stroke='currentColor' strokeWidth='2' />
								</svg>
							</div>
							<div className='contact-details'>
								<h3>Məkan</h3>
								<p>Bakı, Azərbaycan</p>
							</div>
						</motion.div>

						<motion.div className='contact-item' whileHover={{ scale: 1.02 }}>
							<div className='contact-icon'>
								<svg viewBox='0 0 24 24' fill='none'>
									<path d='M22 12H18L15 21L9 3L6 12H2' stroke='currentColor' strokeWidth='2' />
								</svg>
							</div>
							<div className='contact-details'>
								<h3>Status</h3>
								<p>Yeni layihələr üçün açıq</p>
							</div>
						</motion.div>

						<div className='social-links'>
							<motion.a
								href='https://github.com/Haqverdi56'
								className='social-link'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<svg
									height='32'
									aria-hidden='true'
									viewBox='0 0 24 24'
									version='1.1'
									width='32'
									data-view-component='true'
									class='octicon octicon-mark-github v-align-middle'
								>
									<path
										fill='white'
										d='M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z'
									></path>
								</svg>
							</motion.a>
							<motion.a
								href='https://www.linkedin.com/in/haqverdi-quliyev-65b1ab202/'
								className='social-link'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<svg viewBox='0 0 24 24' fill='none'>
									<path d='M16 8A6 6 0 016 8V21H10V8A2 2 0 0114 8V21H18V8Z' stroke='currentColor' strokeWidth='2' />
									<rect x='2' y='9' width='4' height='12' stroke='currentColor' strokeWidth='2' />
									<circle cx='4' cy='4' r='2' stroke='currentColor' strokeWidth='2' />
								</svg>
							</motion.a>
						</div>
					</motion.div>

					<motion.form
						className='contact-form'
						onSubmit={handleSubmit}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className='form-group'>
							<label htmlFor='name'>Ad Soyad</label>
							<input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} required placeholder='Adınızı daxil edin' />
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleInputChange}
								required
								placeholder='email@example.com'
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='subject'>Mövzu</label>
							<input
								type='text'
								id='subject'
								name='subject'
								value={formData.subject}
								onChange={handleInputChange}
								required
								placeholder='Mesajın mövzusu'
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='message'>Mesaj</label>
							<textarea
								id='message'
								name='message'
								rows='5'
								value={formData.message}
								onChange={handleInputChange}
								required
								placeholder='Mesajınızı yazın...'
							/>
						</div>

						<motion.button
							type='submit'
							className={`btn btn-primary submit-btn ${isSubmitted ? 'submit-success' : ''}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							disabled={isSubmitted}
						>
							<span>{isSubmitted ? 'Göndərildi ✓' : 'Mesaj Göndər'}</span>
							{!isSubmitted && (
								<svg className='btn-icon' viewBox='0 0 24 24' fill='none'>
									<path d='M2 12L22 12' stroke='currentColor' strokeWidth='2' />
									<path d='M15 5L22 12L15 19' stroke='currentColor' strokeWidth='2' />
								</svg>
							)}
						</motion.button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
