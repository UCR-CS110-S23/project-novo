import { React } from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

const ActivityFeedCard = ({ image, title, location, rating }) => {
	return (
		<div className='rounded-3xl duration-300 hover:-translate-y-1 border gird grid-rows-4'>
			<Image
				src={image}
				width={250}
				// heigth='35'
				height={250}
				alt='Landing'
				className=' rounded-t-3xl aspect-square'
			/>
			<div className='-space-y-1 pl-3 pb-3 pt-2'>
				<div className='flex justify-between'>
					<div className='text-lg font-base'>{title}</div>
					<div className='flex items-center pr-3 pt-1 pb-1 text-novo-purple '>
						<AiOutlineStar />
						{rating}
					</div>
				</div>
				<div className='text-base text-gray-400 pt-1 font-light'>
					{location}
				</div>
			</div>
		</div>
	);
};

export default ActivityFeedCard;
