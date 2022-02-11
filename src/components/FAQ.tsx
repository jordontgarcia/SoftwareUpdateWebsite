import { ChevronDownIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'

const faqs = [
	{
		question: 'How long will V3 continue to receive support and updates?',
		answer:
			'Trice V3 will receive support and updates until 2026. If you have any concerns about migrating to V3, please reach out to our support team.',
	},
	{
		question: 'Is V3 compatible with V2?',
		answer: 'Yes. You can interchangeably use V2 and V3. V2 will be supported until 2023.',
	},
	{
		question: 'Can you migrate from V2 to V3?',
		answer: `Yes. You can directly migrate from V2 to V3. Trice Support needs to verify this migration for you, so please contact us.
             We will handle the rest for you, making it seamless as possible.`,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const FAQ: React.FunctionComponent = () => {
	return (
	  <div className="bg-dark-lead dark:bg-transparent">
		<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
		  <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
			<h2 className="text-center text-3xl font-extrabold dark:text-gray-200 text-gray-100 sm:text-4xl">
			  Frequently asked questions
			</h2>
			<dl className="mt-6 space-y-6 divide-y divide-gray-200">
			  {faqs.map((faq) => (
				<Disclosure as="div" key={faq.question} className="pt-6">
				  {({ open }) => (
					<>
					  <dt className="text-lg">
						<Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
						  <span className="font-medium dark:text-gray-200 text-gray-100">
							{faq.question}
						  </span>
						  <span className="ml-6 h-7 flex items-center">
							<ChevronDownIcon
							  className={classNames(
								open ? '-rotate-180' : 'rotate-0',
								'h-6 w-6 transform'
							  )}
							  aria-hidden="true"
							/>
						  </span>
						</Disclosure.Button>
					  </dt>
					  <Disclosure.Panel as="dd" className="mt-2 pr-12">
						<p className="text-base dark:text-gray-400 text-gray-300">
						  {faq.answer}
						</p>
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
  
  export default FAQ