import NavLink from './NavLink'; 

// Définition du composant MenuOverlay avec une propriété 'links'
const MenuOverlay = ({ links }) => {
	
	return (
		<ul className='flex flex-col py-4 items-center'>
			{' '}
			{/* Liste non ordonnée avec des éléments alignés verticalement grâce à flex-col */}
			{links.map(
				(
					link,
					index // Map pour itérer sur le tableau 'links' et générer les liens
				) => (
					<li key={index}>
						{' '}
						{/* Chaque élément de la liste est un lien hypertexte */}
						{/* Utilisation du composant NavLink avec les propriétés 'href' et 'title' de chaque objet dans 'links' */}
						<NavLink href={link.path} title={link.title} />{' '}
					</li>
				)
			)}
		</ul>
	);
};
export default MenuOverlay;
