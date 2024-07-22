import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';

const faqs = [
	{
		question: 'How long will TriceAi continue to receive personal support and updates?',
		answer: `Great Question! TriceAi will receive support and updates for many more years to come. 
			 If you have any concerns about migrating to TriceAi, feel free to reach out to our support team.`,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const FAQ: React.FunctionComponent = () => {
	return (
		<div className='bg-dark-lead dark:bg-transparent'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
				<div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
					<h2 className='text-center text-2xl tablet:text-4xl laptop:text-3xl font-extrabold dark:text-gray-200 text-gray-100'>
						Frequently asked questions
					</h2>
					<dl className='mt-6 space-y-6 divide-y divide-gray-200'>
						{faqs.map((faq) => (
							<Disclosure as='div' key={faq.question} className='pt-6'>
								{({ open }) => (
									<>
										<dt className='text-base tablet:text-lg laptop:text-lg'>
											<Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
												<span className='font-medium dark:text-gray-200 text-gray-100'>{faq.question}</span>
												<span className='ml-6 h-7 flex items-center'>
													<ChevronDownIcon
														className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
														aria-hidden='true'
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as='dd' className='mt-2 pr-12'>
											<p className='text-base dark:text-gray-400 text-gray-300'>{faq.answer}</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
