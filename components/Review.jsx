import React from "react";
import Image from "next/image";
import Henry from "../public/henry.png";
import { AiOutlineStar } from "react-icons/ai";

const Review = () => {
	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-start-1'>
					<div className='flex flex-col justify-center items-center h-full w-full'>
						<div className='w-6/12'>
							<Image
								src={Henry}
								alt='Landing'
								layout='responsive'
								className='rounded-full'
							/>
						</div>
					</div>
				</div>
				<div className='col-start-2 col-span-4 space-y-2'>
					<div className='font-medium text-base'>Henry Cavil</div>
					<div className='text-sm font-light'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur.
					</div>
				</div>
				<div className='col-start-6'>
					<div className='flex flex-col justify-between items-end h-full'>
						<div className='text-xs text-novo-purple font-light'>
							10 MIN AGO
						</div>
						<div className='flex'>
							<AiOutlineStar />
							<AiOutlineStar />
							<AiOutlineStar />
							<AiOutlineStar />
							<AiOutlineStar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
