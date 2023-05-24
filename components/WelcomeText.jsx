import React from "react";
import NOVO from "../public/NOVO.png";
import Image from "next/image";
import Link from "next/link";

const WelcomeText = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen'>
				<div className='flex justify-center items-center'>
					<Image
						src={NOVO}
						alt='site-logo'
						className='max-w-md pb-4'
					/>
				</div>
				<h2 className='text-2xl text-white font-light'>
					meet your <b>new</b> adventure
				</h2>

				<div className='group  w-1/2'>
					<div className='flex justify-center'>
						<Link
							href='/profileCreation'
							className='text-white mt-5 px-4 py-2 w-1/2 text-center no-underline rounded-full border border-white transition-colors duration-300 group-hover:bg-white'
						>
							<span className='group-hover:text-purple-500'>
								SIGN UP
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default WelcomeText;
