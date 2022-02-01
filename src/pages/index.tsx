import Stats from '../components/Stats'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Trice Presents</h1>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Trice 3 Public Release
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Trice&apos;s system-wide software upgrade is finally here.
            Our exclusive beta testers have loved Trice 3.0
          </p>
        </div>
      </div>

      {/* Import and render components */}
      <Stats />

    </div>
  )
}

export default Home