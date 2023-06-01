import { React } from "react";
import Image from "next/image";

const MessageResponse = ({ image, name, message, time }) => {
	return (
		<div className='flex relative mt-4 mr-4'>
			<div className='pl-3'>
				<Image
					src={image}
					alt='Landing'
					className=' w-11 h-10 object-cover rounded-full'
				/>
			</div>
			<div className='flex w-full'>
				<div className='ml-3'>
					<div className='flex text-base justify-between items-center'>
						{name}
						<div className=' text-sm ml-3 text-novo-dategray pt-1'>
							{time}
						</div>
					</div>
					<div className='text-sm p-3 mt-1 bg-novo-gray text-center text-black rounded-r-md rounded-bl-md text-novo-messagegray'>
						{message}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageResponse;
