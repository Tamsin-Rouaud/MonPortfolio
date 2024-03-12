const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyles = `text-white border-${
		isSelected ? 'primary-700' : 'slate-800 hover:border-white'
	} font-bold rounded-full border-2 px-6 py-2 text-2xl cursor-pointer`;

	return (
		<div>
			<button className={buttonStyles} onClick={() => onClick(name)}>
				{name}
			</button>
		</div>
	);
};

export default ProjectTag;
