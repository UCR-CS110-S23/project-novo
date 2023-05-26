import React from "react";
import NOVO from "../public/NOVO.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

const WelcomeText = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='flex flex-row items-center justify-center h-screen'>
			<div className='flex flex-col justify-center items-center'>
				<Image src={NOVO} alt='site-logo' className='max-w-md pb-4' />
				<p className='text-2xl text-white font-light'>
					meet your <b>new</b> adventure
				</p>
			</div>

			<div className='flex flex-col'>
				<input
					className='rounded-full opacity-10 text-white placeholder-black'
					type='text'
					placeholder='NAME'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					className=''
					type='text'
					placeholder='EMAIL'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					className=''
					type='text'
					placeholder='PASSWORD'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button
					className='text-white mt-5 px-4 py-2 w-60 rounded-full border border-white transition-colors duration-300 hover:bg-white hover:text-black'
					onClick={() => signIn("google")}
				>
					SIGN UP
				</button>
			</div>
		</div>
	);
};

export default WelcomeText;
