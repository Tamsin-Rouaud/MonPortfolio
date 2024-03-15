'use client'; // Directive d'utilisation de module client-side

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TabButton from '../components/TabButton';

const AboutSection = () => {
	const [tab, setTab] = useState('skills'); // Déclaration d'un état 'tab' initialisé à 'skills'
	const [skillsAndFormation, setSkillsAndFormation] = useState(null); // État pour stocker les données

	useEffect(() => {
		// Effet secondaire pour effectuer la requête au chargement du composant
		const fetchData = async () => {
			try {
				const response = await fetch('/datasPorfolio.json'); 
				const data = await response.json(); // 
				setSkillsAndFormation(data[0].skillsAndFormation); // Met à jour les données avec celles récupérées
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData(); // Appel de la fonction pour récupérer les données
	}, []); // Utilisation du tableau vide pour s'assurer que cet effet ne s'exécute qu'une seule fois au chargement du composant

	const handleTabChange = (id) => {
		setTab(id); // Mise à jour de l'état 'tab' avec l'ID fourni
	};

	const content = (id) => {
		if (!skillsAndFormation) return null; // Si les données ne sont pas encore disponibles, retourne null

		switch (id) {
			case 'skills':
				return (
					<ul className='list-disc pl-2 grid grid-cols-2 gap-1'>
						{skillsAndFormation.skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				);
			case 'formation':
				return (
					<ul className='list-disc pl-2'>
						{skillsAndFormation.formation.map((formation, index) => (
							<li key={index}>{formation}</li>
						))}
					</ul>
				);
			default:
				return null;
		}
	};

	return (

		<section id='about' className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
				<Image
					src='/images/laptop.webp'
					alt='À propos'
					width={500}
					height={500}
					className=' rounded-md '
					priority={true}
				/>
				<div className=' mt-4 md:mt-0 text-left flex flex-col h-full '>
					<h2 className=' text-4xl font-bold text-white mb-4 '>
						À propos de moi
					</h2>
					<p className='text-base lg:text-lg'>
						Développeuse web spécialisée dans le Front-end, toutes mes créations
						seront rendues dans un format responsive. Je pratique les
						technologies telles que JavaScript, React, Next, Express, MongoDB,
						Node, et Tailwind CSS, ainsi que les fondamentaux, HTML/CSS et Git.
					</p>
					<div className=' flex flex-row justify-between mt-8 text-center '>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							Compétences
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('formation')}
							active={tab === 'formation'}
						>
							Formations
						</TabButton>
					</div>
					{/* Affichage du contenu en fonction de l'ID 'tab' */}
					<div className='mt-8 '>{content(tab)}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection; 
