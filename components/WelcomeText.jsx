import React from "react";
import NOVO from "../public/NOVO.png";
import Image from "next/image";

const WelcomeText = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen'>
				<div className='flex justify-center items-center'>
					<Image src={NOVO} alt='site-logo' className='max-w-md' />
				</div>
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
