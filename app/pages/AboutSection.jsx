'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from '../components/TabButton';
import Head from 'next/head';

// Importe mes données depuis mon fichier JSON
import jsonData from '../../public/datasPorfolio.json';

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const content = (id) => {
		const section = jsonData[0]; // Permet d'accéder à la première section de mon JSON
		const skillsAndFormation = section.skillsAndFormation;

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
					<div className='mt-8 '>{content(tab)}</div>
				</div>
			</div>
		</section>
	);
};
export default AboutSection;
