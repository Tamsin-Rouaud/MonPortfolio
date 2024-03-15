// Définition du composant ProjectTag avec des propriétés name, onClick, isSelected
const ProjectTag = ({ name, onClick, isSelected }) => {
	// Détermination des styles du bouton en fonction de isSelected
	const buttonStyles = isSelected
		? 'text-white border-4 border-primary-500'
		: 'text-[#ADB7BE] border-slate-600 hover:border-white';

	
	return (
		<button
			// Classe CSS calculée en fonction de isSelected
			className={`${buttonStyles} rounded-full border-4 px-6 py-3 w-40 text-xl cursor-pointer`}
			// Gestion de l'événement onClick avec la fonction onClick fournie
			onClick={() => onClick(name)}
		>
			{name} {/* Contenu textuel du tag */}
		</button>
	);
};

export default ProjectTag;
