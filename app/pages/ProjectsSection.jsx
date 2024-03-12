'use client';
import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectTag from '../components/ProjectTag';
import { motion, useInView } from 'framer-motion';
import Head from 'next/head';

const ProjectsSection = () => {
	const [tag, setTag] = useState('Web');
	const [projectData, setProjectData] = useState([]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [filteredProjectData, setFilteredProjectData] = useState([]);

	const handleTagChange = (newTag) => {
		setTag(newTag);

		// Filtre les projets en fonction du nouveau tag
		const filteredProjects = projectData.projects.filter((project) =>
			project.tag.includes(newTag)
		);

		// Met à jour l'état des projets filtrés
		setFilteredProjectData(filteredProjects);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Effectue une requête pour récupérer les données JSON.
				const response = await fetch('/datasPorfolio.json');

				if (!response.ok) {
					throw new Error('La requête a échoué');
				}

				// Parse la réponse JSON.
				const data = await response.json();

				// Met à jour l'état des données du projet avec les données du fichier JSON.
				setProjectData(data[0]);
				const filteredProjects = data[0].projects.filter((project) =>
					project.tag.includes('Web')
				);

				// Met à jour l'état des projets filtrés
				setFilteredProjectData(filteredProjects);
			} catch (error) {
				// En cas d'erreur, affiche un message d'erreur dans la console.
				console.error(
					'Erreur lors de la récupération des données JSON :',
					error
				);
			}
		};

		// Appelle la fonction fetchData pour récupérer les données JSON.
		fetchData();
	}, []);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id='projects'>
			<Head>
				<title>Mes Projets - Développeuse Web Front-end</title>
				<meta
					name='description'
					content="Découvrez mes projets. Explorez mes applications web, mes sites mobiles et d'autres créations développées avec passion et expertise."
				/>
			</Head>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				Mes Projets
			</h2>
			<div className='flex flex-row justify-around mb-6 mt-0 xs:text-2xl xs:py-2 items-center gap-5 text-white py-6'>
				<ProjectTag
					onClick={() => handleTagChange('Web')}
					name='Web'
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={() => handleTagChange('Mobile')}
					name='Mobile'
					isSelected={tag === 'Mobile'}
				/>
			</div>
			<ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12'>
				{filteredProjectData.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						{/* Composant de carte de projet */}
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

// Exporte le composant ProjectsSection comme composant par défaut.
export default ProjectsSection;
