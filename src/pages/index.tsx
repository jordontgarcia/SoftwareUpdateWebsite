import type { NextPage } from 'next'

import IntroSection from '../components/IntroSection'
import UpdateFlag from '../components/UpdateFlag'

import Stats from '../components/Stats'
import Insight from '../components/Insight'
import Pricing from '../components/Pricing'
import Info from '../components/CoreValues'
import CEOQuote from '../components/CeoQuote'

import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	return (
		<div className='bg-white dark:bg-dark-primary selection:bg-purple-700 dark:selection:bg-yellow-500 selection:text-black'>
			{/* Render Components */}
			<UpdateFlag />
			<IntroSection />
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h1 className='text-lg font-semibold dark:text-white text-indigo-700 tracking-wide uppercase'>Trice Presents</h1>
					<p className='mt-1 text-4xl font-extrabold dark:text-gray-100 text-black sm:text-5xl sm:tracking-tight lg:text-6xl'>
						Trice
						<span className='dark:text-blue-600 text-blue-700 selection:text-white'> V3 </span>
						Public Release
					</p>
					<p className='max-w-xl mt-5 mx-auto text-xl dark:text-white text-gray-600'>
						Trice&apos;s system-wide software upgrade is finally here. 
						Our beta testers made Trice 3 the best it could be, for you.
					</p>
				</div>
			</div>

			{/* Render Components */}
			<Stats />
			<Insight />
			<Pricing />
			<Info />
			<CEOQuote />
			<FAQ />
			<Footer />
		</div>
	);
};

export default Home