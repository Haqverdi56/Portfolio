import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const Navbar = ({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ href: '#home', label: 'Ana Səhifə', id: 'home' },
		{ href: '#about', label: 'Haqqımda', id: 'about' },
		{ href: '#experience', label: 'Təcrübə', id: 'experience' },
		{ href: '#skills', label: 'Bacarıqlar', id: 'skills' },
		{ href: '#projects', label: 'Layihələr', id: 'projects' },
		{ href: '#contact', label: 'Əlaqə', id: 'contact' },
	];

	return (
		<motion.nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
			<div className='nav-container'>
				<motion.div className='nav-logo' whileHover={{ scale: 1.05 }}>
					Haqverdi
				</motion.div>

				<ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
					{navItems.map((item, index) => (
						<motion.li key={item.id} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
							<a
								href={item.href}
								className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
								onClick={(e) => {
									e.preventDefault();
									document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
									setIsMobileMenuOpen(false);
								}}
							>
								{item.label}
							</a>
						</motion.li>
					))}
				</ul>

				<div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
