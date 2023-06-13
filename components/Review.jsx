import React from "react";
import Image from "next/image";
// import Henry from "../public/henry.png";
import { BsStar, BsStarFill } from "react-icons/bs";

const Review = ({ text, rating, name, time, picture }) => {
	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-start-1'>
					<div className='flex flex-col justify-center items-center h-full w-full'>
						<div className='w-6/12'>
							<Image
								src={picture}
								width={10}
								height={10}
								alt='Profile'
								layout='responsive'
								className='object-cover rounded-full aspect-square'
							/>
						</div>
					</div>
				</div>
				<div className='col-start-2 col-span-4 space-y-2'>
					<div className='font-medium capitalize text-base'>
						{name}
					</div>
					<div className='text-sm font-light'>{text}</div>
				</div>
				<div className='col-start-6'>
					<div className='flex flex-col justify-between items-end h-full'>
						<div className='text-xs text-novo-purple font-light'>
							{time}
						</div>
						<div className='flex space-x-1'>
							{rating === 1 && (
								<>
									<BsStarFill />
									<BsStar />
									<BsStar />
									<BsStar />
									<BsStar />
								</>
							)}
							{rating === 2 && (
								<>
									<BsStarFill />
									<BsStarFill />
									<BsStar />
									<BsStar />
									<BsStar />
								</>
							)}
							{rating === 3 && (
								<>
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStar />
									<BsStar />
								</>
							)}
							{rating === 4 && (
								<>
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStar />
								</>
							)}
							{rating === 5 && (
								<>
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
									<BsStarFill />
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
