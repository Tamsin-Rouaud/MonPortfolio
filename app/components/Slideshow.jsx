import { useState } from 'react'; 
import arrowSlide from '../../public/images/ArrowSlide.webp'; 
import Image from 'next/image'; 

// Définition du composant SlideShow avec une propriété previewUrl
const SlideShow = ({ previewUrl }) => {
	// Importation de l'image de la flèche
	const arrow = arrowSlide;

	// Définition de l'état pour l'index de l'image actuelle
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Fonction pour passer à l'image suivante
	const handleNextClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === previewUrl.length - 1 ? 0 : prevIndex + 1
		);
	};

	// Fonction pour passer à l'image précédente
	const handlePrevClick = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? previewUrl.length - 1 : prevIndex - 1
		);
	};

	
	return (
		<div className='relative sm:h-[350px] sm:w-[500px] md:w-[700px] md:h-[500px] lg:h-[600px] lg:w-[900px] ]  overflow-hidden'>
			{/* Vérification si le diaporama contient plus d'une image */}
			{previewUrl.length > 1 && (
				<div className='relative h-full'>
					{/* Affichage de l'image actuelle */}
					<Image
						src={previewUrl[currentImageIndex]}
						alt=''
						className=' h-full object-cover rounded-[25px] md:rounded-[10px]'
						width={1500}
						height={515}
						loading='lazy'
					/>

					{/* Boutons de navigation vers l'image précédente et suivante */}
					<div className='absolute bottom-0 left-0 w-full flex flex-row justify-between items-center p-10'>
						<div
							className='cursor-pointer flex items-center'
							onClick={handlePrevClick}
							aria-label='Image précédente'
						>
							<Image
								src={'/circle-chevron-left-solid.svg'}
								alt='Précedent'
								width={48}
								height={48}
								loading='lazy'
							/>
						</div>

						<div
							className='cursor-pointer flex items-center'
							onClick={handleNextClick}
							aria-label='Image suivante'
						>
							<Image
								src={'/circle-chevron-right-solid.svg'}
								alt='Suivant'
								width={48}
								height={48}
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			)}
			{/* Si le diaporama contient une seule image */}
			{previewUrl.length <= 1 && (
				<Image
					src={previewUrl[currentImageIndex]}
					alt=''
					className='w-full h-full object-cover rounded-[25px] md:rounded-[10px]'
				/>
			)}
		</div>
	);
};

export default SlideShow;