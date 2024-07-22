const posts = [
	{
		title: 'Trice V3 Initialized',
		href: 'example',
		description: `At this time, Trice's core Teams founded the mere thought of a such serious software upgrade, involving innovation at such a level that it
			would shift and restructure our company entirely. TriceAi team, initiated with passion, began to passionately brainstorm and construct the idea of how 
			TriceAi would be birthed. Brainstorming and careful notes of our thoughts and ideas was a several month process, and was revised several times, for the
			better. The journey was a success in the end. TriceAi Team was satisfied, and the development phases began.`,
		date: 'Jul 15, 2019',
		datetime: '2019-07-15',
	},
	{
		title: 'TriceAi Grows Wings',
		href: 'example',
		description: `Starting May 08, 2020 our software development team began working on the early stages of development. TriceAi revised several goals and
			our expectations were set much higher. Due to aiming higher than reasonably expected, this maximized our team's potential and drove top results. Management
			and leadership worked together endlessly, to ensure that the team was able to accomplish our goals and assist as much as possible during roadblocks and difficulty.`,
		date: ' May 08, 2020',
		datetime: '2020-05-08',
	},
	{
		title: 'Uncharted Territory',
		href: 'example',
		description: `TriceAi development got very real in summer of 2021. Our teams worked endlessly to improve the software and ensure is was top-notch as could
			be. While Trice's Software programming Team was working on the core features, our Security Team began to focus on ensuring safety and privacy. All during this
			process, Trice leadership team and management worked alongside Trice's departments to ensure that teams were able to accomplish the goals we envisioned, and to 
			assist as much as possible in any area needed.`,
		date: 'Jul 16th, 2021',
		datetime: '2021-07-16',
	},
	{
		title: 'Try And Try Again',
		href: 'example',
		description: `Trice beta testing was now live! We were so excited to see how our privately launched beta team was going to use TriceAi. We were also so happy to see
	        promising results from our beta testers! This was a great opportunity for us to work on our core features further, and improve the software to new heights. We 
			wanted to ship something shiny to production that would not disappoint! During this time we realized that we had a lot of potential improvement, so we cut right 
			to it, and started improving these areas.`,
		date: 'Aug 24th, 2022',
		datetime: '2022-08-24',
	},
	{
		title: 'Something Truly Spectacular',
		href: 'example',
		description: `On January 21st of 2024, we reached a milestone in Trice V3 were we felt content with our progress and results. This was a memorable time for
			us! We were so excited to finally push Trice V3 into production, and see how it impacted those in the real world. We congratulated our Teams for working super
			hard to make this happen and become a reality! We took a dream and vision and birthed it into reality, now that was something to celebrate for! We gave all our
			teams and staff 2 weeks off to enjoy relaxation time and celebrate the birth of Trice V3!`,
		date: 'Jan 21, 2024',
		datetime: '2024-01-21',
	},
];

const Insight: React.FunctionComponent = () => {
	return (
		<div className='selection:bg-purple-700 selection:text-black'>
			<div className='bg-white dark:bg-dark-secondary pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
				<div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
					<div>
						<h2 className='text-3xl tracking-tight font-extrabold dark:text-gray-100 text-gray-900 sm:text-4xl'>
							Trice <span className='text-blue-700 dark:text-blue-600 selection:text-white'>Ai </span>
							Insight
						</h2>
						<div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
							<p className='text-xl dark:text-gray-100 text-gray-500'>More on TriceAi development</p>
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
									<p className='text-xl font-semibold dark:text-white text-gray-900'>{post.title}</p>
									<p className='mt-3 text-base dark:text-gray-lead text-gray-500'>{post.description}</p>
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
					<span className='px-3 dark:bg-transparent bg-white text-base tablet:text-lg laptop:text-lg font-medium dark:text-white text-gray-900'>
						Payments made simple, for you and your team
					</span>
				</div>
			</div>
		</div>
	);
};

export default Insight;
