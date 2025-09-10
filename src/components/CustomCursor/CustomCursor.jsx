import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		const mouseEnter = () => setCursorVariant('hover');
		const mouseLeave = () => setCursorVariant('default');

		window.addEventListener('mousemove', mouseMove);

		const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .btn, .card, .link');

		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', mouseEnter);
			el.addEventListener('mouseleave', mouseLeave);
		});

		return () => {
			window.removeEventListener('mousemove', mouseMove);
			interactiveElements.forEach((el) => {
				el.removeEventListener('mouseenter', mouseEnter);
				el.removeEventListener('mouseleave', mouseLeave);
			});
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			scale: 1,
			opacity: 0.9,
		},
		hover: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			scale: 1.8,
			opacity: 1,
		},
	};

	const isMobile = window.innerWidth <= 768;
	if (isMobile) return null;

	return (
		<>
			<style jsx global>{`
				@media (min-width: 769px) {
					* {
						cursor: none !important;
					}
				}
			`}</style>

			{/* Neon outer circle */}
			<motion.div
				className='cursor-outer'
				variants={variants}
				animate={cursorVariant}
				transition={{
					type: 'spring',
					stiffness: 1000,
					damping: 45,
					bounce: 0.25,
				}}
				style={{
					position: 'fixed',
					left: 0,
					top: 0,
					width: '40px',
					height: '40px',
					border: '2px solid #00f6ff',
					borderRadius: '50%',
					pointerEvents: 'none',
					zIndex: 9999,
					boxShadow: '0 0 15px #00f6ff, 0 0 30px #00f6ff',
					mixBlendMode: 'difference',
				}}
			/>

			{/* Inner dot */}
			<motion.div
				className='cursor-dot'
				animate={{
					x: mousePosition.x - 4,
					y: mousePosition.y - 4,
				}}
				transition={{
					type: 'tween',
					duration: 0,
				}}
				style={{
					position: 'fixed',
					left: 10,
					top: 10,
					width: '8px',
					height: '8px',
					backgroundColor: '#00f6ff',
					borderRadius: '50%',
					pointerEvents: 'none',
					zIndex: 10000,
					boxShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff',
				}}
			/>
		</>
	);
};

export default CustomCursor;
