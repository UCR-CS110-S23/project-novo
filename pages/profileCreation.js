import Questions from "../components/Questions";
import Logo from "../public/purpleLogo.svg";
import Image from "next/image";
import { React, useState } from "react";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

export default function ProfileCreation() {
	const [counter, setCounter] = useState(0);

	const increase = () => {
		if (counter < 5) {
			setCounter(count => count + 1);
		}
	};
	const decrease = () => {
		if (counter > 0) {
			setCounter(count => count - 1);
		}
	};

	return (
		<div className='z-1 flex flex-col justify-center items-center w-screen h-screen'>
			<div className='absolute pb-[25%] w-1/4 flex justify-center items-center flex-col space-y-6'>
				<div className='w-1/2'>
					<Image
						src={Logo}
						alt='Landing'
						layout='responsive '
						className=''
					/>
				</div>
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-1/3'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex justify-center flex-col items-center w-full space-y-4'>
				<Questions state={counter} />
				<div className='flex space-x-5 text-lg bottom-[35%] fixed -z-1'>
					{counter === 0 ? (
						<button
							onClick={decrease}
							className='text-gray-300 duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowLeft2 />
						</button>
					) : (
						<button
							onClick={decrease}
							className=' text-novo-darkgray duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowLeft2 />
						</button>
					)}

					{counter === 5 ? (
						<button
							onClick={increase}
							className='text-gray-300 duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowRight2 />
						</button>
					) : (
						<button
							onClick={increase}
							className=' text-novo-darkgray duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowRight2 />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
