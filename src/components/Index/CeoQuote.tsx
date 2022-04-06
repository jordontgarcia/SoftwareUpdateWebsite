const CeoMessage: React.FunctionComponent = () => {
	return (
		<div className='dark:bg-gray-900 selection:bg-purple-500 selection:text-black'>
			<section className='py-12 overflow-hidden md:py-20 lg:py-24'>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<svg
						className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
						width={404}
						height={404}
						fill='none'
						viewBox='0 0 404 404'
						role='img'
						aria-labelledby='svg-workcation'
					>
						<title id='svg-workcation'>Workcation</title>
						<defs>
							<pattern
								id='ad119f34-7694-4c31-947f-5c9d249b21f3'
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits='userSpaceOnUse'
							>
								<rect x={0} y={0} width={4} height={4} className='dark:text-slate-400 text-blue-500' fill='currentColor' />
							</pattern>
						</defs>
						<rect width={404} height={404} fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)' />
					</svg>

					<div className='relative'>
						<blockquote className='mt-3 tablet:mt-6 laptop:mt-10'>
							<div className='max-w-3xl mx-auto text-center text-xl tablet:text-2xl leading-9 font-medium dark:text-gray-200 text-gray-900'>
								<p>
									“Trice is passionately committed on providing a positive impact for our tech world. Only together, we achieve
									The Impossible.”
								</p>
							</div>
							<footer className='mt-16 tablet:mt-12 laptop:mt-8'>
								<div className='md:flex md:items-center md:justify-center'>
									<div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
										<div className='text-xl tablet:text-lg laptop:text-base font-medium dark:text-gray-200 text-gray-900'>
											Jordon Tyler Garcia
										</div>

										<svg
											className='hidden md:block mx-1 h-5 w-5 dark:text-blue-700 text-blue-600'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M11 0h3L9 20H6l5-20z' />
										</svg>

										<div className='text-sm tablet:text-base laptop:text-base font-medium dark:text-gray-400 text-gray-500'>
											Founder and CEO @Trice
										</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CeoMessage;