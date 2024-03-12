'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const IntroSection = () => {
	const href = '#contact';

	return (
		<section className='lg:py-16'>
			<Head>
				<title>Tamsin Rouaud - Développeuse Web Front-end</title>
				<meta
					name='description'
					content="Découvrez mon profil, Tamsin Rouaud, développeuse web front-end passionnée par la création d'expériences web exceptionnelles. Explorez mon portfolio et mes compétences."
				/>
				<link
					rel='preload'
					href='/public/images/avatar-photo.webp'
					as='image'
				/>
			</Head>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-8 place-self-center text-center sm:text-left justify-self-start '
				>
					<h1 className=' text-white mb-2 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r  from-secondary-600  via-primary-600 to-thirdly-500 '>
							Salut, je suis {''}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								'développeur web,',
								1000,
								'spécialisée en Front-end,',
								1000,
								'à votre service !',
								1000,
							]}
							wrapper='span'
							speed={50}
							style={{ fontSize: '0.8em', display: 'inline-block' }}
							repeat={2}
						/>
					</h1>
					<p className=' text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl z-10'>
						Une idée en tête, un projet de site ? Vous êtes au bon endroit.
					</p>
					<div>
						<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-900 via-primary-700  to-thirdly-500 font-bold text-white hover:bg-slate-200'>
							<Link href={href}>Envoyez-moi un message</Link>
						</button>
						<button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-900 via-primary-700  to-thirdly-500 hover:bg-slate-800 text-white  mt-3'>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
								<Link href='/cv.pdf' download target='_blank'>
									Télécharger mon CV
								</Link>
							</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='col-span-4 place-self-center mt-4 lg:mt-0'
				>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative lg:h-[400px]'>
						<Image
							src='/images/avatar-photo.webp'
							alt='Mon avatar'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
							width={300}
							height={300}
							priority={true}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default IntroSection;
