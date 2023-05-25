import React from "react";
import Image from "next/image";

const AddActivityCard = ({ image }) => {
	return (
		<>
			<div className='relative'>
				<Image
					src={image}
					alt='Landing'
					layout='responsive'
					className='rounded-xl'
				/>
				<div className='absolute bottom-4 right-4 bg-white rounded-full text-black text-md py-1 pr-4 pl-[5%]'>
					DISNEYLAND
				</div>
			</div>
		</>
	);
};

export default AddActivityCard;
