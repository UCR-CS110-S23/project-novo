import { React } from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

const ActivityFeedCard = ({ image, title, location, rating }) => {
	return (
		<div class='rounded-3xl duration-300 hover:-translate-y-1 border gird grid-rows-4'>
			<Image src={image} alt='Landing' className=' rounded-t-3xl h-48' />
			<div class='-space-y-1 pl-3 pb-3 pt-2'>
				<div class='flex justify-between'>
					<div class='text-2xl font-regular'>{title}</div>
					<div class='flex items-center pr-3 pt-1 pb-1 text-novo-purple '>
						<AiOutlineStar />
						{rating}
					</div>
				</div>
				<div class='text-base text-gray-400 pt-1 font-light'>
					{location}
				</div>
			</div>
		</div>
	);
};

export default ActivityFeedCard;
