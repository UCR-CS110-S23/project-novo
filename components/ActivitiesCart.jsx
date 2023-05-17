import React from "react";
import Image from "next/image";
import Disney from "../public/disney-banner.png";

const ActivitiesCart = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<div className='my-[15%]'>Your Selected Activities</div>
				<Image
					src={Disney}
					alt='Landing'
					layout='responsive'
					className='rounded-xl ml-5'
				/>
			</div>
		</div>
	);
};

export default ActivitiesCart;
