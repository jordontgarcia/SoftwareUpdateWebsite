const posts = [
	{
	  title: 'Trice V3 Initialized',
	  href: 'example',
	  description: `At this time, Trice's core Teams founded the mere thought of a serious software upgrade, involving innovation at such a level that it
			would shift and restructure our company entirely. Trice, initiated with passion, began to passionately brainstorm construct the basis of how such
			an idea would be implemented. Brainstorming and careful notes of our thoughts was a several month process, and was revised several times.
			The process was a success in the end. Trice was satisfied with our Future, and development phases began.`,
	  date: 'Jul 15, 2017',
	  datetime: '2017-07-15',
	},
	{
	  title: 'Trice V3 Grows Wings',
	  href: 'example',
	  description: `Starting January 03, 2018 our core Development Team began working on the early stages of development. Trice revised several goals and
			our expectations were set much higher. Due to aiming higher than reasonably feasible, this maximized our team's potential and results. Management
			and leadership worked together to ensure that the team was able to accomplish the goals and assist as much as possible during roadblocks and difficulty.`,
	  date: ' Jan 03, 2018',
	  datetime: '2018-01-03',
	},
	{
	  title: 'Uncharted Territory',
	  href: 'example',
	  description: `Trice development got very real in summer of 2018. Our teams worked endlessly to improve the software and ensure is was top-notch as could
			be. While Trice's Software programming Team was working on the core features, our Security Team began to work on safety and privacy. All during this
			process, Trice leadership team and management worked alongside Trice's departments to ensure that teams were able to accomplish the goals we visioned, 
			and to assist as much as possible.`,
	  date: 'Jul 16th, 2018',
	  datetime: '2018-07-16',
	},
	{
	  title: 'Try And Try Again',
	  href: 'example',
	  description: `Trice beta testing was now live! We were so excited to see how our beta testers were going to use Trice 3.0. We were also so happy to see
			positive, promising results from our beta testers! This was a great opportunity for us to work on our core features even more, and improve the software
			further. We wanted to ship something to production that would not disappoint! During this time we realized that we had a lot of potential improvement, so
			we cut right to it and started improving these areas!`,
	  date: 'Apr 5th, 2021',
	  datetime: '2021-05-11',
	},
	{
	  title: 'Something Truly Spectacular',
	  href: 'example',
	  description: `On January 21st of 2022, we reached a milestone in Trice V3 were we felt content with our progress and results. This was a memorable time for
			us! We were so excited to finally push Trice V3 into production, and see how it impacted those in the real world. We congratulated our Teams for working super
			hard to make this happen and become a reality! We took a dream and vision and birthed it into reality, now that was something to celebrate for! We gave all our
			teams and staff 2 weeks off to enjoy relaxation time and celebrate the birth of Trice V3!`,
	  date: 'Jan 21, 2022',
	  datetime: '2022-01-21',
	},
  ];
  
  const Insight: React.FunctionComponent = () => {
	return (
	  <div className='selection:bg-purple-700 dark:selection:bg-yellow-500 selection:text-black'>
		<div className='bg-white dark:bg-dark-secondary pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
		  <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
			<div>
			  <h2 className='text-3xl tracking-tight font-extrabold dark:text-gray-100 text-gray-900 sm:text-4xl'>
				Trice{' '}
				<span className='text-indigo-500 dark:text-blue-600 selection:text-white'>
				  V3{' '}
				</span>
				Insight
			  </h2>
			  <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
				<p className='text-xl dark:text-gray-100 text-gray-500'>
				  More on V3 development
				</p>
				<form className='mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end'>
				  <div>
					<label htmlFor='email-address' className='sr-only'>
					  Email address
					</label>
					<input
					  id='email-address'
					  name='email-address'
					  type='email'
					  autoComplete='off'
					  required
					  className='dark:text-gray-100 appearance-none w-full px-4 py-2 border dark:border-gray-600 border-gray-300 text-base rounded-md text-gray-900 bg-white 
								dark:bg-gray-900 dark:placeholder-gray-200 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs'
					  placeholder='Subscribe For Updates'
					/>
				  </div>
				  <div className='mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex'>
					<button
					  type='button'
					  className='w-full dark:bg-slate-800 dark:hover:bg-slate-900 bg-blue-700 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium 
								text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-700 sm:w-auto sm:inline-flex'
					>
					  Notify me
					</button>
				  </div>
				</form>
			  </div>
			</div>
			<div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
			  {posts.map((post) => (
				<div key={post.title}>
				  <p className='text-sm dark:text-gray-400 text-gray-500'>
					<time dateTime={post.datetime}>{post.date}</time>
				  </p>
				  <a className='mt-2 block'>
					<p className='text-xl font-semibold dark:text-white text-gray-900'>
					  {post.title}
					</p>
					<p className='mt-3 text-base dark:text-gray-lead text-gray-500'>
					  {post.description}
					</p>
				  </a>
				  <div className='mt-3'>
					<a
					  href={post.href}
					  className='text-base font-semibold dark:text-gray-100 text-indigo-600 hover:text-indigo-500'
					>
					  Watch video
					</a>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</div>
		<div className='relative mb-5 dark:mb-0 dark:mt-3'>
		  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
			<div className='w-full border-t dark:border-none border-gray-300' />
		  </div>
		  <div className='relative flex justify-center'>
			<span className='px-3 dark:bg-transparent bg-white text-lg font-medium dark:text-white text-gray-900'>
			  Payments made simple, for you and your team
			</span>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Insight