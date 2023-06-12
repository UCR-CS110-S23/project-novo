import { React } from "react";
import NOVO from "../public/NOVO.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/router";

const WelcomeText = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isButtonDisabled = email === "" || password === "";

	// const router = useRouter();

	const handleSignIn = async e => {
		e.preventDefault();

		await signIn("credentials", {
			redirect: true,
			email,
			password,
			callbackUrl: "/feed",
		});
	};

	const handleGoogle = async () => {
		await signIn("google", {
			redirect: true,
			callbackUrl: "/feed",
		});
	};

	return (
		<div className='flex flex-row items-center justify-between mx-80 h-screen'>
			<div className='flex flex-col'>
				<Image src={NOVO} alt='site-logo' className='max-w-md pb-4' />
				<p className='text-2xl text-white font-light'>
					meet your <b>new</b> adventure
				</p>
				<p className='text-white font-thin text-lg mt-4'>
					Noun. novo m (uncountable) new ideas or <br />
					things; novelties synonym
				</p>
			</div>

			<div className='flex flex-col'>
				<input
					className='rounded-full bg-white/20 text-white placeholder-white py-3 pl-8 pr-10 w-80 focus:outline-none my-1'
					type='text'
					placeholder='EMAIL'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					className='rounded-full bg-white/20 text-white placeholder-white py-3 pl-8 w-80 focus:outline-none my-1'
					type='password'
					placeholder='PASSWORD'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button
					href='/profileCreation'
					className={`${
						isButtonDisabled
							? "opacity-50 disabled:pointer-events-none no-underline"
							: ""
					}`}
					onClick={handleSignIn}
					disabled={isButtonDisabled}
				>
					<div className='flex justify-center group hover:bg-white mt-3 text-white px-4 py-2 w-80 rounded-full border-2 border-white transition-colors duration-300'>
						<span className='group-hover:text-purple-500'>
							LOG IN
						</span>
					</div>
				</button>
				<div className='flex items-center my-3'>
					<hr className='flex-grow border-white border-t-2' />
					<div className='mx-4 text-white'>OR</div>
					<hr className='flex-grow border-white border-t-2' />
				</div>

				<button onClick={handleGoogle}>
					<div className='flex flex-row justify-center items-center text-white px-4 py-2 w-80 rounded-full border-2 border-white transition-colors duration-300 hover:bg-white group'>
						<FcGoogle size={30} />

						<span className='ml-2 group-hover:text-purple-500'>
							SIGN IN WITH GOOGLE
						</span>
					</div>
				</button>

				<div>
					<p className='text-white mt-4 text-sm'>
						DON&apos;T HAVE AN ACCOUNT?{" "}
						<Link href='/profileCreation' className='text-white'>
							SIGN UP HERE
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default WelcomeText;
