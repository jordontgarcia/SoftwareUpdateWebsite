import { Popover } from '@headlessui/react';
import ToggleButton from './ToggleButton';
import { motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
];

const variantPrimary = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.25, duration: 1 } },
};

const variantSecondary = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.25, duration: 1 } },
};

const variantThird = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
};

const motionProps = {
	initial: 'hidden',
	animate: 'visible',
};
const IntroSection: React.FunctionComponent = () => {
	return (
		<div className='relative bg-rose-800 overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				<div className='relative z-10 pb-8 dark:bg-dark-primary bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
					<svg
						className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>

					<Popover>
						<div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
							<nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
								<div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
									<div className='flex items-center justify-between w-full md:w-auto'>
										<div className='-mr-2 flex items-center md:hidden'>
											{/* Render ToggleButton Component */}
											<ToggleButton />
										</div>
									</div>
								</div>
								<div className='select-none hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='font-medium dark:text-gray-400 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900'
										>
											{item.name}
										</a>
									))}
									{/* Render ToggleButton Component */}
									<ToggleButton />

									<a href='./login' className=' font-medium text-blue-600 hover:text-blue-500 dark:text-white'>
										Log in
									</a>
								</div>
								<a href='./login' className='tablet:hidden mr-1 font-medium text-blue-600 hover:text-blue-500 dark:text-white'>
									Log in
								</a>
							</nav>
						</div>
					</Popover>

					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<div className='sm:text-center lg:text-left'>
							<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl'>
								<motion.div variants={variantThird} {...motionProps}>
									<span className='block xl:inline'>Trice Studios</span>{' '}
									<span className='block  selection:text-white xl:inline'>Announcement 📣</span>
								</motion.div>
							</h1>
							<p className='mt-3 text-base dark:text-gray-300 text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Trice Studios is honored to introduce the next chapter in our AI Software Application journey. We are
								revolutionizing what Artificial Intelligence can do, and what it has been.
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<motion.div variants={variantSecondary} {...motionProps}>
									<div className='rounded-md shadow'>
										<a
											href='#'
											className='select-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-650 md:py-4 md:text-lg md:px-10'
										>
											Trice Consultation
										</a>
									</div>
								</motion.div>

								<motion.div variants={variantThird} {...motionProps}>
									<div className='mt-3 sm:mt-0 sm:ml-3'>
										<a
											href='#'
											className='select-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-50 bg-rose-700 hover:bg-rose-650 md:py-4 md:text-lg md:px-10'
										>
											Conference Event
										</a>
									</div>
								</motion.div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className='select-none contrast-92 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<motion.div variants={variantPrimary} {...motionProps}>
					<Image
						className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
						src='/main.png'
						layout='fill'
						priority={true}
						loading='eager'
						alt='Main Image'
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default IntroSection;
