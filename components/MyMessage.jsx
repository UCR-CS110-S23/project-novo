import { React } from "react";
import Image from "next/image";

const MyMessageResponse = ({ image, message, time }) => {
	return (
		<div className='flex  relative mt-4 ml-4 pr-4'>
			<div className='flex justify-end w-full'>
				<div className='mr-3'>
					<div className='flex justify-between'>
						<div className='mr-3 text-novo-dategray pt-1 text-xs'>
							{time}
						</div>
						You
					</div>
					<div className='text-sm p-3 mt-1 bg-novo-lightpurple text-novo-purple rounded-l-md rounded-br-md text-novo-messagegray'>
						{message}
					</div>
				</div>
			</div>
			<div>
				<Image
					src={image}
					alt='Landing'
					className=' w-11 h-10 object-cover rounded-full'
				/>
			</div>
		</div>
	);
};

export default MyMessageResponse;
