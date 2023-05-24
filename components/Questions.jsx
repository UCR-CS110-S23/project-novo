import { React, useState } from "react";

const Questions = ({ state }) => {
	const [toggle, setToggle] = useState(0);
	return (
		<>
			<div className='w-full flex justify-center'>
				{state === 0 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR NAME
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}

				{state === 1 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR AGE
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}

				{state === 2 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								HOW DO YOU IDENTIFY?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setToggle(1)}
									className={` text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										toggle === 1
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									MAN
								</button>
								<button
									onClick={() => setToggle(2)}
									className={`text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										toggle === 2
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									WOMAN
								</button>
								<button
									onClick={() => setToggle(3)}
									className={` text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										toggle === 3
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									NON-BINARY
								</button>
							</div>
						</div>
					</>
				)}
				{state === 3 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								WHAT ARE YOUR PRONOUNS?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setToggle(1)}
									className={` text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										toggle === 1
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									HE/HIM
								</button>
								<button
									onClick={() => setToggle(2)}
									className={`text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										toggle === 2
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									SHE/HER
								</button>
								<button
									onClick={() => setToggle(3)}
									className={` text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										toggle === 3
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									THEY/THEM
								</button>
							</div>
						</div>
					</>
				)}
				{state === 4 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR LOCATION
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}
				{state === 5 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ADD A PHOTO
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Questions;

{
	/* <input
	type='radio'
	onClick={() => setToggle(1)}
	class={`h-5 w-5 rounded-full appearance-none border border-white  ${
		toggle === 1
			? "bg-novo-purple text-white border rounded-full border-novo-purple"
			: "bg-transparent"
	}`}
/>; */
}
