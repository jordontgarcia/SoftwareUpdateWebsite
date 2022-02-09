import ToggleButton from '../components/ToggleButton'
import CEOQuote from '../components/CeoQuote'
import Pricing from '../components/Pricing'
import Insight from '../components/Insight'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Info from '../components/Info'
import type { NextPage } from 'next'
import FAQ from '../components/FAQ'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-dark-primary selection:bg-purple-700 dark:selection:bg-yellow-500 selection:text-black">
      {/* Render ToggleButton Component */}
      <ToggleButton />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-lg font-semibold dark:text-white text-indigo-600 tracking-wide uppercase">
            Trice Presents
          </h1>
          <p className="mt-1 text-4xl font-extrabold dark:text-gray-100 text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Trice
            <span className="dark:text-blue-600 text-indigo-500 selection:text-white">
              {' '}
              V3{' '}
            </span>
            Public Release
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl dark:text-white text-gray-500">
            Trice&apos;s system-wide software upgrade is finally here. Our
            exclusive beta testers have loved Trice 3.0
          </p>
        </div>
      </div>

      {/* Render Components */}
      <Stats />
      <Insight />
      <Pricing />
      <Info />
      <FAQ />
      <CEOQuote />
      <Footer />
    </div>
  );
};

export default Home