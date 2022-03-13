import { CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const includedFeatures = [
	'Lifetime Updates',
	'Priority 24/7 support',
	'Performance servers at no cost',
	'Access to Beta Programs',
	'Welcome Kit sent to your home',
	'Official Trice Jacket, T-Shirt, and Hat',
];

const Pricing: React.FunctionComponent = () => {
	return (
		<div className='bg-gray-50 dark:bg-transparent'>
			<div className='pt-12 sm:pt-16 lg:pt-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h2 className='text-3xl font-extrabold dark:text-gray-100 text-gray-900 sm:text-4xl lg:text-5xl'>
							No strings attached, all in your control
						</h2>
						<p className='mt-4 text-xl dark:text-gray-400 text-gray-600'>
							If you&apos;re not satisfied, kindly contact us within the first 90 days and we&apos;ll send you a full refund.
						</p>
					</div>
				</div>
			</div>
			<div className='mt-8 bg-white dark:bg-transparent pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
				<div className='relative'>
					<div className='absolute inset-0 h-1/2 dark:bg-transparent bg-gray-800' />
					<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex'>
							<div className='flex-1 bg-white dark:bg-gray-900 px-6 py-8 lg:p-12'>
								<h3 className='text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl'>Lifetime Membership</h3>
								<p className='mt-6 text-base dark:text-gray-200 text-gray-500'>
									Upon access, we will send you a custom welcome kit, with our own designed official Trice brand clothing as a
									thank you. We highly value our customers user experience, don&apos;t hesitate to contact us if you have any
									questions or concerns. We hope you enjoy Trice V3 and it&apos;s amazing uses, and we look forward to seeing
									what your thoughts are! - 💖 Trice Team
								</p>
								<div className='mt-8'>
									<div className='flex items-center'>
										<h4 className='flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-blue-700'>
											What&apos;s included
										</h4>
										<div className='flex-1 border-t-2 border-gray-200' />
									</div>
									<ul role='list' className='mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5'>
										{includedFeatures.map((feature) => (
											<li key={feature} className='flex items-start lg:col-span-1'>
												<div className='flex-shrink-0'>
													<CheckCircleIcon className='h-5 w-5 text-green-400 dark:text-green-600' aria-hidden='true' />
												</div>
												<p className='ml-3 text-sm dark:text-gray-200 text-gray-700'>{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className='py-8 px-6 text-center bg-gray-50 dark:bg-dark-secondary lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12'>
								<p className='text-lg leading-6 font-medium dark:text-gray-100 text-gray-900'>
									One payment, lifetime ownership
								</p>
								<div className='mt-4 flex items-center justify-center text-5xl font-extrabold dark:text-gray-100 text-gray-900'>
									<span>$3,899</span>
									<span className='ml-3 text-xl font-medium dark:text-gray-200 text-gray-500'>USD</span>
								</div>
								<p className='mt-4 text-sm'>
									<a href='#' className='select-none font-medium dark:text-blue-800 text-gray-500 underline'>
										Learn about our membership policy
									</a>
								</p>
								<div className='mt-6'>
									<div className='rounded-md shadow'>
										<a
											href='#Pricing'
											className='select-none flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-slate-800 hover:bg-gray-800 dark:hover:bg-slate-700'
										>
											Lifetime Access
										</a>
									</div>
								</div>
								<div className='mt-4 text-sm'>
									<a href='#' className='font-medium dark:text-gray-200 text-gray-900'>
										Free Documentation <span className='font-normal dark:text-gray-200 text-gray-500'>(34MB)</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white dark:bg-transparent relative mb-8'>
				<div className='absolute inset-0 flex items-center' aria-hidden='true'>
					<div className='w-full border-t dark:border-none border-gray-300' />
					{/* TODO: Change the border-none to gray 100 or something to see a strike-though through the entire title/text. There are several of these on the page */}
					{/* TODO: Use new TailwindUI Component that doesn't strike all the way through, instead stops before text so you can use a light border on dark mode */}
				</div>
				<div className='relative flex justify-center'>
					<span className='px-3 bg-white dark:bg-transparent text-lg font-medium dark:text-white text-gray-900'>
						Trice&apos;s core values and what we stand for:
					</span>
				</div>
			</div>
		</div>
	);
};

export default Pricing