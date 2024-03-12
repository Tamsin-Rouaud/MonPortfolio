'use client';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const AnimatedNumbers = dynamic(
	() => {
		return import('react-animated-numbers');
	},
	{ ssr: false }
);

const achievementsList = [
	{
		prefix: '+ ',
		metric: 'Heures de code',
		value: 999,
	},
	
	
];

const AchievementSection = () => {
	return (
		<div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-12'>
			<Head>
				<title>
					Mes Réalisations - Tamsin Rouaud, Développeuse Web Front-end
				</title>
				<meta
					name='description'
					content='Découvrez mes réalisations et accomplissements en tant que développeuse web front-end. Explorez mes succès, mes compétences et mon parcours dans le domaine du développement web.'
				/>
				
			</Head>
			<div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row flex-row-wrap items-center justify-center '>
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className='flex flex-col  items-center  justify-center mx-4 '
						>
							<h2 className='text text-white text-5xl font-bold flex flex-row'>
								{achievement.prefix}
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(achievement.value)}
									locale='fr-FR'
									className=' text-white text-5xl font-bold'
									configs={(_, index) => {
										return {
											mass: 1,
											friction: 100,
											tensions: 140 * (index + 1),
										};
									}}
								/>
								{achievement.postfix}
							</h2>
							<p className='text-[#ADB7BE] text-2xl text-center'>
								{achievement.metric}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default AchievementSection;
