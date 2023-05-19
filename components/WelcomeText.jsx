import React from "react";

const WelcomeText = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-bold'>NOVO</h1>
				<h2 className='text-lg'>
					Meet your <b>new</b> adventure
				</h2>
				<button className='mt-4 px-4 py-2 bg-transparent text-black rounded-lg border border-black'>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default WelcomeText;
