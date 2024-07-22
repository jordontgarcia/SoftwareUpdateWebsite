import IntroSection from '../components/Index/Intro';
import UpdateFlag from '../components/Index/UpdateFlag';
import CEOQuote from '../components/Index/CeoQuote';

import Pricing from '../components/Index/Pricing';
import Insight from '../components/Index/Insight';
import Footer from '../components/Index/Footer';

import CoreValues from '../components/Index/CoreValues';
import Stats from '../components/Index/Stats';
import FAQ from '../components/Index/FAQ';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className='bg-white dark:bg-dark-primary'>
			{/* Render Components */}
			<UpdateFlag />
			<IntroSection />
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h1 className='text-base laptop:text-lg font-semibold dark:text-white text-indigo-700 tracking-wide uppercase'>
						Trice Studios
					</h1>
					<p className='mt-1 text-3xl laptop:text-6xl font-extrabold dark:text-gray-100 text-black sm:text-5xl sm:tracking-tight'>
						Trice
						<span className='dark:text-blue-600 text-blue-700 selection:text-white'> Ai </span>
						Public Release
					</p>
					<p className='max-w-xl mt-5 mx-auto text-lg laptop:text-xl dark:text-white text-gray-600'>
						Trice&apos;s Ai driven software upgrade has finally landed. Special thanks to all our beta testers who helped make
						TriceAi what it is today. See below what Ai optimizations can accomplish for you, and your team.
					</p>
				</div>
			</div>

			{/* Render Components */}
			<Stats />
			<Insight />
			<Pricing />
			<CoreValues />
			<CEOQuote />
			<FAQ />
			<Footer />
		</div>
	);
};

export default Home;
