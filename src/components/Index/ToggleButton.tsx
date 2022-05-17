import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ToggleButton: React.FunctionComponent = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div className='float-right'>
			<button
				type='button'
				className='z-30 select-none text-white inline-flex items-center px-4 py-3 tablet:px-3 tablet:py-2 laptop:px-3 laptop:py-2 border border-transparent text-base leading-4 font-medium rounded-md shadow-sm bg-toggle-blue bg-blue-800 dark:bg-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? '☀️' : '🌙'}
			</button>
		</div>
	);
};

export default ToggleButton;