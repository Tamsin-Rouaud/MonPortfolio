'use client'; // Directive d'utilisation de module client-side

import Link from 'next/link'; 
import NavLink from './NavLink'; 
import { useState } from 'react'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Import des icônes du menu déroulant depuis Heroicons
import MenuOverlay from './MenuOverlay';

// Définition des liens de navigation
const navLinks = [
	{
		title: 'À propos',
		path: '#about',
	},
	{
		title: 'Projets',
		path: '#projects',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false); // Déclaration d'un état navbarOpen pour gérer l'ouverture/fermeture du menu

	return (
		<nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
			<div className='flex container lg:py-4 items-center justify-between mx-auto px-4 py-2'>
				<Link
					href={'/'}
					className='text-2xl md:text-4xl text-white font-semibold'
				>
					Accueil
				</Link>
				<div className='mobile-menu block lg:hidden '>
					{!navbarOpen ? ( // Condition pour afficher l'icône de menu ou de fermeture selon l'état navbarOpen
						<button
							aria-label='Affichage du menu'
							onClick={() => setNavbarOpen(true)}
							className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'
						>
							<Bars3Icon className='h-5 w-5' /> {/* Icône de menu */}
						</button>
					) : (
						<button
							aria-label='Fermeture du menu'
							onClick={() => setNavbarOpen(false)}
							className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
						>
							<XMarkIcon className='h-5 w-5' />{' '}
							{/* Icône de fermeture du menu */}
						</button>
					)}
				</div>
				{/* Menu de navigation */}
				<div
					className='menu hidden md-flex md:w-auto lg:flex lg:w-auto '
					id='navbar'
				>
					<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
						{navLinks.map((link, index) => (
							// Mapping des liens de navigation
							<li key={index}>
								<NavLink href={link.path} title={link.title} />{' '}
								{/* Utilisation du composant NavLink avec les données de chaque lien */}
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Affichage du MenuOverlay si navbarOpen est true */}
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar; 

// Ce code représente un composant de barre de navigation (Navbar) qui affiche un titre "Accueil", une liste de liens de navigation ("À propos", "Projets", "Contact"), et un MenuOverlay pour afficher les liens de navigation lorsqu'ils sont cliqués sur les appareils mobiles, sans oublier un bouton de menu sur les appareils mobiles