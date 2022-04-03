import { useTheme } from 'next-themes';

const ToggleButton: React.FunctionComponent = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='float-right'>
			<button
				type='button'
				className='z-30 select-none text-white inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm bg-toggle-blue bg-dark-lead dark:bg-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme === 'light' ? '☀️' : '🌙'}
			</button>
		</div>
	);
};

export default ToggleButton;