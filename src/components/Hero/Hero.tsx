import { Link } from 'react-scroll';
import styled from 'styled-components';

type IWrapperProps = {
	className?: string;
	horizontalImageLink?: React.ElementType | keyof JSX.IntrinsicElements | string;
	verticalImageLink?: React.ElementType | keyof JSX.IntrinsicElements | string;
};

const HeroWrapper = styled.section<IWrapperProps>`
	background-image: ${({ horizontalImageLink }: any) => horizontalImageLink};

	@media screen and (max-width: 768px) {
		background: #0f172a;
	}
`;

const Hero = () => {
	const horizontalImage = require('../../images/hero-hor.jpg');
	const horizontalImageLink = `url(${horizontalImage})`;
	const verticalImage = require('../../images/hero-ver.jpg');
	const verticalImageLink = `url(${verticalImage})`;

	return (
		<HeroWrapper
			horizontalImageLink={horizontalImageLink}
			verticalImageLink={verticalImageLink}
			className={`text-white bg-cover bg-center min-h-screen`}
			id='hero'>
			<div className='max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
				<div className='max-w-3xl mx-auto text-center'>
					<h1 className='text-3xl font-extrabold sm:text-5xl  cursor-default text-indigo-600'>Profesjonalna opieka.</h1>
					<h1 className='text-3xl font-extrabold sm:text-5xl cursor-default text-indigo-600'>Spokojny właściciel.</h1>

					<p className='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl cursor-default'>
						Jesteśmy hotelem dla kotów który stawia na komfort futrzaków oraz właścicieli ponad wszystko, zapewniamy
						spokój rodzicom pociech oraz najlepsze wakacje dla przyjezdnych.
					</p>

					<div className='flex flex-wrap justify-center gap-4 mt-8 cursor-pointer'>
						<Link
							spy
							smooth
							duration={500}
							className='block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring'
							to='details'>
							Dowiedz się więcej
						</Link>
					</div>
				</div>
			</div>
		</HeroWrapper>
	);
};

export default Hero;
