import type { NextPage } from 'next'

import {
	BadgeCheckIcon,
	ChatIcon,
	ClockIcon,
	CubeTransparentIcon,
	UserGroupIcon,
	UsersIcon,
} from '@heroicons/react/outline';

const actions = [
	{
		title: 'Time Efficiency',
		icon: ClockIcon,
		iconForeground: 'text-teal-700',
		iconBackground: 'bg-teal-50',
		description: 'We’ve built a system that will help you optimize your time and reduce costs.',
	},
	{
		title: 'Security and Trust',
		icon: BadgeCheckIcon,
		iconForeground: 'text-purple-700',
		iconBackground: 'bg-purple-50',
		description: `Our security standard is the highest in the industry. We prioritize and uphold this value.`,
	},
	{
		title: 'Built for Teams',
		icon: UsersIcon,
		iconForeground: 'text-sky-700',
		iconBackground: 'bg-sky-50',
		description: 'With team cooperation in mind, we made Trice work perfectly for large teams.',
	},
	{
		title: 'Ease of use',
		icon: CubeTransparentIcon,
		iconForeground: 'text-yellow-700',
		iconBackground: 'bg-yellow-50',
		description: 'Software should not be complicated or over engineered. Simplicity is key here.',
	},
	{
		title: 'Feedback',
		icon: ChatIcon,
		iconForeground: 'text-rose-700',
		iconBackground: 'bg-rose-50',
		description: 'We want to hear from you. Filtering through feedback is a key part of our process.',
	},
	{
		title: 'Community Support',
		icon: UserGroupIcon,
		iconForeground: 'text-indigo-700',
		iconBackground: 'bg-indigo-50',
		description: 'We’re here to help and root for you. We believe support importance is often underestimated.',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Info: NextPage = () => {
	return (
		// Div Below centers the container, and limits the width to content width. looks nicer.
		<div className='md:container md:max-w-screen-xl md:mx-auto'>
			<div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
				{actions.map((action, actionIdx) => (
					<div
						key={action.title}
						className={classNames(
							actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
							actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
							actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
							actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
							'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
						)}
					>
						<div>
							<span
								className={classNames(
									action.iconBackground,
									action.iconForeground,
									'rounded-lg inline-flex p-3 ring-4 ring-white',
								)}
							>
								<action.icon className='h-6 w-6' aria-hidden='true' />
							</span>
						</div>
						<div className='mt-8'>
							<h3 className='text-lg font-medium'>
								<a className='focus:outline-none'>
									{/* Extend touch target to entire panel */}
									<span className='absolute inset-0' aria-hidden='true' />
									{action.title}
								</a>
							</h3>
							<p className='mt-2 text-sm text-gray-500'>{action.description}</p>
						</div>
						<span
							className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
							aria-hidden='true'
						></span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Info