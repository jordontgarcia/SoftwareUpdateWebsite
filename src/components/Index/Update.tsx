import { InformationCircleIcon } from '@heroicons/react/solid';

const UpdateFlag: React.FunctionComponent = () => {
	return (
		<div className='rounded-md dark:bg-violet-900 bg-blue-100 p-4 dark:selection:bg-violet-300 dark:selection:text-black'>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<InformationCircleIcon className='h-5 w-5 dark:text-violet-300 text-blue-500' aria-hidden='true' />
				</div>
				<div className='ml-3 flex-1 md:flex md:justify-between'>
					<p className='text-sm dark:text-violet-100 text-blue-700'>
						Trice 3.1.0 is now available. Check out what&apos;s new!
					</p>
					<p className='mt-3 text-sm md:mt-0 md:ml-6'>
						<a
							href='#'
							className='whitespace-nowrap font-medium dark:text-violet-100 text-blue-800 dark:hover:text-violet-300 hover:text-blue-600'
						>
							Changelog Details <span aria-hidden='true'>&rarr;</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UpdateFlag;