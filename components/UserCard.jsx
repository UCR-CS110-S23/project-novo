import React from "react";
import Image from "next/image";
import Viviane from "../public/viviane.png";
import { GrLocation } from "react-icons/gr";

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
				<div className='border border-gray-300 p-5'>
					<div className='flex justify-between items-center'>
						<div className='text-4xl font-medium'>Viviane, 22</div>
						<div className='flex items-center text-md bg-gray-200 py-2 px-5 rounded-l-full pr-10'>
							<span className='pr-1.5'>
								<GrLocation />
							</span>
							Riverside, CA
						</div>
					</div>
					<div>tags tags tags tags tags</div>
					<div className='font-light'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam,.
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
