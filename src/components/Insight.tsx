import type { NextPage } from 'next'

const posts = [
  {
    title: 'Trice V3 Initialized',
    href: 'example',
    description:
      `At this time, Trice's core Teams founded the mere thought of a serious software upgrade, involving innovation at such a level that it
       would shift and restructure our company entirely. Trice, initiated with passion, began to viciously brainstorm construct the basis of
       how such an idea would be implemented. Brainstorming and recording our thoughts was a several month process, and was revised several times.
       The process was a success in the end. Trice was satisfied with our Future, and development phases began.`,
    date: 'Jul 15, 2017',
    datetime: '2017-07-15',
  },
  {
    title: 'Trice V3 Early Development',
    href: 'example',
    description:
      `Starting January 03, 2018 our core Development Team began working on the early stages of development. Trice revised several goals and
       our expectations were set much higher. Due to aiming higher than reasonably feasible, this maximized our team's potential and results. Management
       and leadership worked together to ensure that the team was able to accomplish the goals and assist as much as possible during roadblocks and difficulty.`,
    date: ' Jan 03, 2018',
    datetime: '2018-01-03',
  },
  {
    title: 'Furthering Trice Development',
    href: 'example',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Trice Beta Testing',
    href: 'example',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]

const Insight: NextPage = () => {
  return (
    <div className="selection:bg-purple-700 selection:text-black">
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Trice
              <span className="text-indigo-500 selection:text-white"> V3 </span>Insight</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">A little more about
                <span className="text-indigo-500 selection:text-white"> V3 </span> development</p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                    placeholder="Subscribe For Updates"
                  />
                </div>
                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button
                    type="button"
                    className="w-full bg-blue-700 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>

                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>

                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    Watch video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insight