import { React, useState } from "react";
import Image from "next/image";
import Disney from "../public/disneyland.png";

const ActivityCard = ({ post }) => {
	const [toggle, setToggle] = useState(0);
	return (
		<>
			<div className='flex flex-col space-y-3'>
				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12'>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(1)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 1
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
							/>
						</div>
						<div className='absolute bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							ANAHEIM, CA
						</div>
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl  hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12'>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(2)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 2
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
							/>
						</div>
						<div className='absolute bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							ANAHEIM, CA
						</div>
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl  hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12 '>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(3)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 3
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
							/>
						</div>
						<div className='absolute bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							ANAHEIM, CA
						</div>
					</div>
				</label>
			</div>
		</>
	);
};

export default ActivityCard;
