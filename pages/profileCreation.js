import Logo from "../public/purpleLogo.svg";
import Image from "next/image";
import { React } from "react";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

export default function ProfileCreation() {
	// const [toggle, setToggle] = useState(0);
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			{/* sdafsd */}
			{/* <p>hello</p> */}
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
			<div className='relative flex justify-center flex-col items-center w-8/12 space-y-4'>
				<div className='text-novo-darkgray bg-red-500mt-[15%]'>
					ENTER YOUR NAME
				</div>
				<input
					type='text'
					className='bg-novo-gray text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl w-7/12'
				/>
				<div className='flex space-x-5 text-lg text-novo-darkgray'>
					<button className='text-gray-300'>
						<ImArrowLeft2 />
					</button>
					<button>
						<ImArrowRight2 />
					</button>
				</div>
			</div>
		</div>
	);
}
