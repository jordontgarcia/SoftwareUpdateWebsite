/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'

const stats = [
    { name: 'Avg. build time', stat: '362ms', previousStat: '7.4s', change: '1954.78% Faster', changeType: 'increase', changeText: 'faster' },
    { name: 'Package size', stat: '64mb', previousStat: '556mb', change: '768.75% smaller size', changeType: 'decrease' },
    { name: 'Resource usage', stat: '12%', previousStat: '44%', change: '32% resources saved', changeType: 'increase' },
    { name: 'Avg. speed writes ', stat: '1.4GB/s', previousStat: '108MB/s', change: '1218.73% faster', changeType: 'increase' },
    { name: 'Userbase compatibility support', stat: '97.52%', previousStat: '62.11%', change: '35.41% more users supported', changeType: 'increase' },
    { name: 'Max supported download speeds', stat: '5.3GB/s', previousStat: '198MS/s', change: '2585.46% faster support', changeType: 'increase' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div>
            <div className="md:container md:mx-auto">
                <h3 className="text-lg leading-6 font-medium text-gray-900">What we&apos;ve accomplished</h3>
                <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 sm:p-6">
                            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                    {item.stat}
                                    <span className="ml-2 text-sm font-medium text-gray-500">from {item.previousStat}</span>
                                </div>

                                <div
                                    className={classNames(
                                        item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                        'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                                    )}
                                >
                                    {item.changeType === 'increase' ? (
                                        <ArrowSmUpIcon
                                            className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <ArrowSmDownIcon
                                            className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                    {item.change}
                                </div>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}