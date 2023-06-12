import React, { useEffect, useState } from "react";
import Image from "next/image";
import Henry from "../public/henry.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSession } from "next-auth/react";

const Review = ({ text, rating, setActRating }) => {
	const { data: session, status } = useSession();
	const [timePassed, setTimePassed] = useState(0);

	console.log(session, status);

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

	console.log("rating: ", rating);

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
						{session.user.name}
					</div>
					<div className='text-sm font-light'>{text}</div>
				</div>
				<div className='col-start-6'>
					<div className='flex flex-col justify-between items-end h-full'>
						<div className='text-xs text-novo-purple font-light'>
							{timePassed} MIN AGO
						</div>
						<div className='flex'>
							{rating === 1 && (
								<>
									<AiFillStar />
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
								</>
							)}
							{rating === 2 && (
								<>
									<AiFillStar />
									<AiFillStar />
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
								</>
							)}
							{rating === 3 && (
								<>
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiOutlineStar />
									<AiOutlineStar />
								</>
							)}
							{rating === 4 && (
								<>
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiOutlineStar />
								</>
							)}
							{rating === 5 && (
								<>
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
									<AiFillStar />
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
