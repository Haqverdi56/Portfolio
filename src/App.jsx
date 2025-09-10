import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Hero/Hero';
import AboutSection from './components/About/About';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ContactSection from './components/Contact/Contact';
import ProjectsSection from './components/Projects/Projects';
import './App.css';
import SkillsSection from './components/Skills/Skills';
import ExperienceSection from './components/Experiment/Experiment';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

// Main App Component
const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [activeSection, setActiveSection] = useState('home');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		// Simulate loading
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
			const scrollPosition = window.scrollY + 100;

			for (let section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<div className='App'>
			<Navbar activeSection={activeSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
			<CustomCursor />
		</div>
	);
};

export default App;
