'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Compétences',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2 grid grid-cols-2 gap-1'>
				<li>JavaScript</li>
				<li>React.js</li>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>MongoDB</li>
				<li>Mongoose</li>
				<li>VSCode</li>
				<li>HTML/CSS</li>
				<li>TailwindCSS</li>
				<li>SASS</li>
				<li>Github</li>
				<li>AdobeXD</li>
				<li>Photoshop</li>
				<li>Figma</li>
			</ul>
		),
	},
	{
		title: 'Formation',
		id: 'formation',
		content: (
			<ul className='list-disc pl-2'>
				<li>BAC</li>
				<li>Langue Maternelle anglais</li>
				<li>Développeur Web </li>
			</ul>
		),
	},
	{
		title: 'Expériences',
		id: 'experiences',
		content: (
			<ul className='list-disc pl-2'>
				<li>Gestionnaire RH</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:16 '>
				<Image
					src='/images/laptop.jpg'
					alt='À propos'
					width={500}
					height={500}
				/>
				<div className=' mt-4 md:mt-0 text-left flex flex-col h-full '>
					<h2 className=' text-4xl font-bold text-white mb-4 '>
						À propos de moi
					</h2>
					<p className='text-base lg:text-lg'>
						En tant que développeuse Web spécialisée dans le Front-end et le
						responsive, je maîtrise les technologies telles que JavaScript,
						React, Next, Node, SASS et Tailwind CSS, ainsi que les fondamentaux
						tels que HTML, CSS et Git. Ma palette s'étend aux outils de
						conception tels que Figma, AdobeXD et Photoshop, me permettant de
						créer des interfaces utilisateur attrayantes et fonctionnelles. Ma
						créativité s'allie à mon efficacité, et je reste constamment à la
						recherche de nouvelles connaissances pour repousser les limites de
						mes compétences, forgées par mes expériences antérieures.
					</p>

					<div className=' flex flex-row justify-start mt-8'>
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
						<TabButton
							selectTab={() => handleTabChange('experiences')}
							active={tab === 'experiences'}
						>
							Expériences
						</TabButton>
					</div>
					<div className='mt-8 '>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutSection;
