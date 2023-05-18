import React from "react";
import Image from "next/image";
import Beach from "../public/beach.png";

const ActivitiesCart = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<div className='my-[15%]'>Your Selected Activities</div>
				<div className='w-10/12 space-y-6'>
					<Image
						src={Beach}
						alt='Landing'
						layout='responsive'
						className='rounded-xl'
					/>
					<Image
						src={Beach}
						alt='Landing'
						layout='responsive'
						className='rounded-xl'
					/>
					<Image
						src={Beach}
						alt='Landing'
						layout='responsive'
						className='rounded-xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default ActivitiesCart;
