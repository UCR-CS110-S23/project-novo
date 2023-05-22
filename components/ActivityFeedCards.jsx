import { React } from "react";
import Image from "next/image";
import Disney from "../public/disneyCard.jpg";

const ActivityFeedCard = () => {
	return (
		<div class='rounded-3xl border gird grid-rows-4'>
			<Image src={Disney} alt='Landing' className=' rounded-t-3xl h-48' />
			<div class='text-3xl font-regular pt-2 pl-3'>Disneyland</div>
			<div class='text-l text-gray-400 pb-2 font-light pt-1 pl-3'>
				Anaheim,CA
			</div>
		</div>
	);
};

export default ActivityFeedCard;
