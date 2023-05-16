import React from "react";
import Image from "next/image";
import Disney from "../public/disneyland.png";

const ActivityCard = () => {
	return (
		<>
			<div className='grid rows-2 w-1/5 h-fit'>
				<Image
					src={Disney}
					alt='Landing'
					layout='responsive'
					className='rounded-t-3xl bg-red-400'
				/>
				<div className='border border-novo-lightgray rounded-b-3xl px-3.5 py-1'>
					So cute. So nostalgic. Take me.
				</div>
			</div>
		</>
	);
};

export default ActivityCard;
