// pages/index.js
import Image from 'next/image';
import IntroSection from './pages/IntroSection';
import AboutSection from './pages/AboutSection';
import Navbar from './components/Navbar';
import ProjectsSection from './pages/ProjectsSection';
import EmailSection from './pages/EmailSection';
import Footer from './components/Footer';
import AchievementSection from './pages/AchievementSection';
import Head from 'next/head';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Head>
				<title>Portfolio by Tamsin Rouaud</title>
				<meta
					name='description'
					content='Vous recherchez un développeur Web pour une idée, un projet en tête, une maquette ? Contactez-moi !'
				/>
				<meta
					name='keywords'
					content='développeur web, front-end, React, Next.js, JavaScript'
				/>
				<meta name='author' content='Tamsin Rouaud' />

				{/* Balises pour améliorer le référencement (SEO) */}
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='robots' content='index, follow' />
				<link rel='canonical' href='URL_de_votre_page_canonique' />

				{/* Balises pour les réseaux sociaux (Open Graph) */}
				<meta property='og:title' content='Portfolio de Tamsin ROUAUD' />
				<meta
					property='og:description'
					content='Découvrez le portfolio de Tamsin ROUAUD, développeur web spécialisé dans le Front-end.'
				/>
				<meta property='og:image' content='/public/images/avatar-photo.webp' />
				<meta property='og:image:alt' content='Mon avatar' />
				<meta property='og:url' content='URL_de_votre_page_canonique' />
				<meta property='og:type' content='website' />

				
			</Head>
			<Navbar />
			<div className='container mt-24 mx-auto px-12 py-4'>
				<IntroSection />
				<AchievementSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
