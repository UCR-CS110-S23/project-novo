import React from "react";
import Image from "next/image";

const ActivityCartCard = ({ image }) => {
	return (
		<>
			<div className='relative flex justify-center items-center'>
				<Image
					src={image}
					alt='Landing'
					layout='responsive'
					className='rounded-xl'
				/>
				<div className='absolute bg-white rounded-full text-black text-md py-1 pr-4 pl-[5%]'>
					DISNEYLAND
				</div>
			</div>
		</>
	);
};

export default ActivityCartCard;
