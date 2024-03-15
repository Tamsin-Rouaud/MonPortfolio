import { motion } from 'framer-motion'; 

// Définition des variants pour l'animation de transition
const variants = {
	default: { width: 0 }, // Variant pour l'état par défaut du bouton
	active: { width: 'calc(100% - 0.75rem)' }, // Variant pour l'état actif du bouton
};

// Définition du composant TabButton avec des propriétés active, selectTab et children
const TabButton = ({ active, selectTab, children }) => {
	// Détermination des classes CSS du bouton en fonction de son état actif
	const buttonClasses = active
		? 'text-white ' // Classes lorsque l'onglet est actif
		: 'text-[#ADB7BE] '; // Classes lorsque l'onglet n'est pas actif

	
	return (
		<button onClick={selectTab}>
			{/* Contenu du bouton */}
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
			{/* Composant motion.div pour l'animation de transition */}
			<motion.div
				animate={active ? 'active' : 'default'} // Animation basée sur l'état actif ou par défaut
				variants={variants} // Utilisation des variants définis précédemment
				className='h-1 bg-primary-500 mt-2 mr-3' 
			></motion.div>
		</button>
	);
};

export default TabButton;
