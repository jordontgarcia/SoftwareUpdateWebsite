import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';

const stats = [
	{
		name: 'Avg. Build Time',
		stat: '110ms',
		previousStat: '13s',
		changeType: 'increase',
		changeText: 'faster',
	},
	{
		name: 'Package Size',
		stat: '36MB',
		previousStat: '741MB',
		changeType: 'decrease',
	},
	{
		name: 'Resource Usage',
		stat: '9MB',
		previousStat: '194MB',
		changeType: 'decrease',
	},
	{
		name: 'Avg. Optimization Speeds ',
		stat: '3.4Gb/s',
		previousStat: '97mb/s',
		changeType: 'increase',
	},
	{
		name: 'Reverse compatibility support',
		stat: '99.4%',
		previousStat: '78.5%',
		changeType: 'increase',
	},
	{
		name: 'Max Supported Download Speeds',
		stat: '5.7Gb/s',
		previousStat: '880mb/s',
		changeType: 'increase',
	},
];

const Stats: React.FunctionComponent = () => {
	return (
		<div className='bg-white dark:bg-dark-primary selection:bg-purple-500 selection:text-black'>
			<div className='md:container md:max-w-screen-xl md:mx-auto'>
				<div className='relative'>
					<div className='absolute inset-0 flex items-center' aria-hidden='true'>
						<div className='w-full border-t border-gray-300' />
					</div>
				</div>

				<dl className='mt-5 grid grid-cols-1 rounded-lg bg-white dark:bg-dark-primary overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-700 md:grid-cols-3 md:divide-y-0 md:divide-x'>
					{stats.map((item) => (
						<div key={item.name} className='px-4 py-5 sm:p-6'>
							<dt className='text-base font-normal dark:text-gray-300 text-gray-900'>{item.name}</dt>
							<dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
								<div className='flex items-baseline text-2xl font-semibold text-blue-700 dark:text-white'>
									{item.stat}
									<span className='ml-2 text-sm font-medium dark:text-gray-300 text-gray-600'>from {item.previousStat}</span>
								</div>
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Stats;