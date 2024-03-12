import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import SlideShow from './Slideshow';
import Modal from 'react-modal';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	const [showSlideshow, setShowSlideshow] = useState(false);
	const [showFullDescription, setShowFullDescription] = useState(false);

	const openSlideshow = () => {
		setShowSlideshow(true);
	};

	const closeSlideshow = () => {
		setShowSlideshow(false);
	};

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div>
			<div
				className='rounded-t-xl relative group'
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: 'cover',
					height: 250 ,
					width: 'auto',
					objectFit: 'cover',
					layout: 'fill',
				}}
			>
				<div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
					<Link
						className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
						href={gitUrl}
						target='_blank'
					>
						<CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
					<div
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/bislink'
						onClick={openSlideshow}
					>
						<EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/bislink:text-white' />
					</div>
				</div>
			</div>
			
			<div className='text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-[#ADB7BE]'>
					{showFullDescription
						? description
						: `${description.slice(0, 100)}...`}
					<Image
						src={'/comment-dots-regular.svg'}
						alt='Afficher plus'
						width={24}
						height={24}
						onClick={toggleDescription}
					/>
				</p>
			</div>

			{/* Modale pour le composant Slideshow */}
			<Modal
				ariaHideApp={false}
				isOpen={showSlideshow}
				onRequestClose={closeSlideshow}
				style={{
					content: {
						position: 'absolute',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
					},
				}}
			>
				<SlideShow previewUrl={previewUrl} />
				<button onClick={closeSlideshow}>X</button>
			</Modal>
		</div>
	);
};

export default ProjectCard;
