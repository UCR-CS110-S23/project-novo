import React from "react";
import Image from "next/image";
import Viviane from "../public/viviane.png";

const UserCard = () => {
	return (
		<>
			<div className='grid w-1/3 rows-2'>
				<Image
					src={Viviane}
					alt='Landing'
					layout='responsive'
					className='rounded-t-3xl'
				/>
				<div className='border border-gray-300'>
					<div className='text-5xl'>Viviane, 22</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
