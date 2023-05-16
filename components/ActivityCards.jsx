import { React, useState } from "react";
import Image from "next/image";
import Disney from "../public/disneyland.png";

const ActivityCard = () => {
	const [toggle, setToggle] = useState(0);
	return (
		<>
			<div className='flex flex-col space-y-3'>
				<label className='checked:border-novo-purple relative grid rows-2 h-fit hover:border-gray-300 hover:border rounded-3xl'>
					<div className='relative'>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-t-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(1)}
								class={`h-5 w-5 rounded-full appearance-none border border-white  ${
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

					<div className='border border-novo-lightgray rounded-b-3xl bg-white text-sm text-center px-3.5 py-1'>
						So cute. So nostalgic. Take me.
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit hover:border-gray-300 hover:border rounded-3xl'>
					<div className='relative'>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-t-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(2)}
								class={`h-5 w-5 rounded-full appearance-none border border-white  ${
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

					<div className='border border-novo-lightgray rounded-b-3xl bg-white text-sm text-center px-3.5 py-1'>
						So cute. So nostalgic. Take me.
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit hover:border-gray-300 hover:border rounded-3xl'>
					<div className='relative'>
						<Image
							src={Disney}
							alt='Landing'
							layout='responsive'
							className='z-0 rounded-t-3xl'
						/>
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => setToggle(3)}
								class={`h-5 w-5 rounded-full appearance-none border border-white  ${
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

					<div className='border border-novo-lightgray rounded-b-3xl bg-white text-sm text-center px-3.5 py-1'>
						So cute. So nostalgic. Take me.
					</div>
				</label>
			</div>
		</>
	);
};

export default ActivityCard;
