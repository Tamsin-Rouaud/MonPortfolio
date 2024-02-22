'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const IntroSection = () => {
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className=' text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r  from-pink-600  via-purple-600 to-blue-500 '>
							Salut, je suis {''}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								
								'Tamsin,',
								1000, 
								'Développeur Web',
								1000,
								'à votre service',
								1000,
								"n'hésitez pas à me contacter !",
								1000,
							]}
							wrapper='span'
							speed={50}
							style={{ fontSize: '1em', display: 'inline-block' }}
							repeat={Infinity}
						/>
					</h1>
					<p className=' text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
						corporis expedita! Ipsam neque explicabo quam?
					</p>
					<div>
						<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-800 via-purple-600  to-blue-500 text-white hover:bg-slate-200'>
							Engagez-moi
						</button>
						<button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-800 via-purple-600  to-blue-500 hover:bg-slate-800 text-white  mt-3'>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
								{' '}
								Télécharger mon CV{' '}
							</span>
						</button>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative lg:h-[400px]'>
						<Image
							src='/images/avatar-photo.jpg'
							alt='Mon avatar'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default IntroSection;
