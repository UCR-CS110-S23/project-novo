import React from "react";
import Image from "next/image";
import Disney from "../public/disneyland.png";
import { BiCircle } from "react-icons/bi";

const ActivityCard = () => {
	return (
		<>
			<button className='grid rows-2 h-fit hover:border-gray-300 hover:border rounded-3xl'>
				<div className='relative'>
					<Image
						src={Disney}
						alt='Landing'
						layout='responsive'
						className='z-0 rounded-t-3xl'
					/>
					<div className='absolute rounded-full text-white left-4 top-3'>
						<BiCircle />
					</div>
					<div className='absolute bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
						ANAHEIM, CA
					</div>
				</div>

				<div className='border border-novo-lightgray rounded-b-3xl bg-white text-sm text-center px-3.5 py-1'>
					So cute. So nostalgic. Take me.
				</div>
			</button>
		</>
	);
};

export default ActivityCard;
