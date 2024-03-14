// pages/index.js
import Image from 'next/image';
import IntroSection from './pages/IntroSection';
import AboutSection from './pages/AboutSection';
import Navbar from './components/Navbar';
import ProjectsSection from './pages/ProjectsSection';
import EmailSection from './pages/EmailSection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar />
			<div className='container mt-24 mx-auto px-12 py-4'>
				<IntroSection />

				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
