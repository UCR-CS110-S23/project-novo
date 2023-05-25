import { React } from "react";
import Image from "next/image";

const MessageResponse = ({ image, name, message, time }) => {
	return (
		<div className='flex relative mt-4 m-2'>
			<div className='pl-3'>
				<Image
					src={image}
					alt='Landing'
					className=' w-11 h-10 object-cover rounded-full'
				/>
			</div>
			<div className='flex w-full'>
				<div className='ml-3'>
					<div className='flex justify-between'>
						{name}
						<div className=' text-novo-dategray pt-1 text-xs'>
							{time}
						</div>
					</div>
					<div className='text-base p-3 mt-1 bg-novo-gray text-black rounded-r-md rounded-bl-md text-novo-messagegray'>
						{message}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageResponse;
