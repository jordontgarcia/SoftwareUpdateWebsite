/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'

const stats = [
    { name: 'Avg. Build Time', stat: '362ms', previousStat: '7.4s', change: '20x Faster builds', changeType: 'increase', changeText: 'faster' },
    { name: 'Package Size', stat: '64mb', previousStat: '556mb', change: '8x Smaller file size', changeType: 'decrease' },
    { name: 'Resource Usage', stat: '92mb', previousStat: '381mb', change: 'Uses 4x less RAM', changeType: 'decrease' },
    { name: 'Avg. Write Speeds ', stat: '1.4GB/s', previousStat: '108MB/s', change: '13x Faster support', changeType: 'increase' },
    { name: 'Userbase Compatibility Support', stat: '97.52%', previousStat: '62.11%', change: '8 Million supported', changeType: 'increase' },
    { name: 'Max Supported Download Speeds', stat: '1.3GB/s', previousStat: '127MS/s', change: '10x Faster downloads', changeType: 'increase' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Stats: NextPage = () => {
    return (
        <div className="bg-white selection:bg-purple-500 selection:text-black">
            <div className="md:container md:max-w-screen-xl md:mx-auto">

                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-white text-lg font-medium text-gray-900">Stats speak for us, what we&apos;ve accomplished:</span>
                    </div>
                </div>

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

export default Stats