'use client';
import { useState } from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = '/api/send';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};
		const response = await fetch(endpoint, options);
		const resData = await response.json();
		if (response.status === 200) {
			console.log('Message envoyé');
			setEmailSubmitted(true);
		}
	};

	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
		>
			<Head>
				<title>Contactez-moi - Tamsin Rouaud, Développeuse Web Front-end</title>
				<meta
					name='description'
					content='Contactez moi, développeuse web front-end passionnée. Envoyez-moi un message pour discuter de projets, opportunités professionnelles ou simplement pour dire bonjour!'
				/>
			</Head>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>
			<div className='z-10'>
				<h3 className='text-xl font-bold text-white my-2'>Contactez-moi</h3>
				<p className='text-[#ABD7BE] mb-4 max-w-md '>
					Je recherche des opportunités de travail et suis prête à vous aider
					dans le développement de votre site internet, alors n'hésitez pas
					à me contacter pour toutes informations !
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/tamsin-rouaud' target='_blank'>
						<Image src={GithubIcon} alt='Icône Github'></Image>
					</Link>
					<Link
						href='https://www.linkedin.com/in/tamsin-rouaud'
						target='_blank'
					>
						<Image src={LinkedinIcon} alt='Icône Linkedin'></Image>
					</Link>
				</div>
			</div>
			<div>
				<form className='flex flex-col ' onSubmit={handleSubmit}>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='text-white mb-2 block text-sm font-medium'
						>
							Votre email
						</label>
						<input
							name='email'
							type='email'
							id='email'
							className='bg-[#18191E] border border-[#33353F] placehholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'
							required
							placeholder='Exemple: votreemail@votrefournisseur.fr'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='subject'
							className='text-white block mb-2 text-sm font-medium'
						>
							Objet
						</label>
						<input
							name='subject'
							type='text'
							id='subject'
							className='bg-[#18191E] border border-[#33353F] placehholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'
							required
							placeholder='Objet de votre mail'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='message'
							className='text-white block text-sm mb-2 font-medium'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							className='bg-[#18191E] border border-[#33353F] placehholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'
							placeholder='Parlez-moi de votre projet'
						/>
					</div>
					<button
						type='submit'
						className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
					>
						Envoyer votre message
					</button>
					{emailSubmitted && (
						<p className='text-green-500 text-sm mt-2'>
							Votre email a bien été envoyé !
						</p>
					)}
				</form>
			</div>
		</section>
	);
};
export default EmailSection;
