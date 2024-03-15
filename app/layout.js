import { Inter } from 'next/font/google';
import './globals.css';

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Portfolio by Tamsin Rouaud',
	description:
		'Vous recherchez un développeur Web pour une idée, un projet en tête, une maquette ? Contactez-moi !',
};

export default function RootLayout({ children }) {
	return (
		<html lang='fr'>
			<Head>
				<title>Portfolio by Tamsin Rouaud</title>
				<meta
					name='description'
					content="Découvrez mon profil, Tamsin Rouaud, développeuse web front-end passionnée par la création d'expériences web exceptionnelles. Explorez mon portfolio et mes compétences."
				/>
				<meta
					name='keywords'
					content='développeur web, front-end, React, Next.js, JavaScript'
				/>
				<meta name='author' content='Tamsin Rouaud' />

				{/* Balises pour améliorer le référencement (SEO) */}
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='robots' content='index, follow' />
				<link
					rel='canonical'
					href='https://mon-portfolio-wxtt-six.vercel.app/'
				/>

				{/* Balises pour les réseaux sociaux (Open Graph) */}
				<meta property='og:title' content='Portfolio de Tamsin ROUAUD' />
				<meta
					property='og:description'
					content='Découvrez le portfolio de Tamsin ROUAUD, développeur web spécialisé dans le Front-end.'
				/>
				<meta property='og:image' content='/public/images/avatar-photo.webp' />
				<meta property='og:image:alt' content='Mon avatar' />
				<meta
					property='og:url'
					content='https://mon-portfolio-wxtt-six.vercel.app/'
				/>
				<meta property='og:type' content='website' />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
