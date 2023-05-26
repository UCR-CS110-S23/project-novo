import React from "react";
import NOVO from "../public/NOVO.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const WelcomeText = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isButtonDisabled = name === "" || email === "" || password === "";

	return (
		<div className='flex flex-row items-center justify-between mx-80 h-screen'>
			<div className='flex flex-col'>
				<Image src={NOVO} alt='site-logo' className='max-w-md pb-4' />
				<p className='text-2xl text-white font-light'>
					meet your <b>new</b> adventure
				</p>
			</div>

			<div className='flex flex-col'>
				<input
					className='rounded-full bg-white/20 text-white placeholder-white py-3 pl-8 pr-10 w-80 focus:outline-none my-1'
					type='text'
					placeholder='NAME'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					className='rounded-full bg-white/20 text-white placeholder-white py-3 pl-8 pr-10 w-80 focus:outline-none my-1'
					type='text'
					placeholder='EMAIL'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					className='rounded-full bg-white/20 text-white placeholder-white py-3 pl-8 w-80 focus:outline-none my-1'
					type='text'
					placeholder='PASSWORD'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<div className='group'>
					<button
						className={`mt-3 text-white px-4 py-2 w-80 rounded-full border-2 border-white transition-colors duration-300 hover:bg-white ${
							isButtonDisabled ? "cursor-not-allowed" : ""
						}`}
						onClick={() => signIn("google")}
						disabled={isButtonDisabled}
					>
						<span className='group-hover:text-purple-500'>
							SIGN UP
						</span>
					</button>
				</div>

				<div className='flex items-center my-3'>
					<hr className='flex-grow border-white border-t-2' />
					<div className='mx-4 text-white'>OR</div>
					<hr className='flex-grow border-white border-t-2' />
				</div>

				<button onClick={() => signIn("google")}>
					<div className='flex flex-row justify-center items-center text-white px-4 py-2 w-80 rounded-full border-2 border-white transition-colors duration-300 hover:bg-white group'>
						<FcGoogle size={30} />

						<span className='ml-2 group-hover:text-purple-500'>
							SIGN IN WITH GOOGLE
						</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default WelcomeText;
