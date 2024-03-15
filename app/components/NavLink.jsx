import Link from 'next/link';

// Définition du composant NavLink avec des propriétés href et title
const NavLink = ({ href, title }) => {
	return (
		// Utilisation du composant Link pour créer un lien hypertexte
		<Link
			href={href} // Propriété href du lien
			className=' block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
		>
			{title} {/* Contenu du lien */}
		</Link>
	);
};

export default NavLink;
