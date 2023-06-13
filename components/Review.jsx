import React, { useEffect, useState } from "react";
import Image from "next/image";
import Henry from "../public/henry.png";
import { BsStar, BsStarFill } from "react-icons/bs";
// import { useSession } from "next-auth/react";

const Review = ({ text, rating, name }) => {
	const [timePassed, setTimePassed] = useState(0);

	// console.log(session, status);

	// const calculateAverage = () => {
	// 	const sum = numbers.reduce(
	// 		(accumulator, currentValue) => accumulator + currentValue,
	// 		0
	// 	);
	// 	const average = sum / numbers.length;
	// 	return average.toFixed(2); // Rounds the average to 2 decimal places
	// };

	// useEffect(() => {
	// 	setActRating(calculateAverage());
	// }, []);

	console.log("ASDFJASDJF NAME: ", name);

	useEffect(() => {
		const updateTimePassed = () => {
			const currentTime = new Date();
			const startTime = new Date("2023-06-11");

			const difference = currentTime - startTime;
			const secondsPassed = Math.floor(difference / 1000);
			const minutesPassed = Math.floor(secondsPassed / 60);
			setTimePassed(minutesPassed % 60);
		};

		updateTimePassed();
		const interval = setInterval(updateTimePassed, 1000);

		return () => clearInterval(interval);
	}, []);

	// console.log("rating: ", rating);

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
					<div className='font-medium capitalize text-base'>
						{name}
					</div>
					<div className='text-sm font-light'>{text}</div>
				</div>
				<div className='col-start-6'>
					<div className='flex flex-col justify-between items-end h-full'>
						<div className='text-xs text-novo-purple font-light'>
							{timePassed} MIN AGO
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
