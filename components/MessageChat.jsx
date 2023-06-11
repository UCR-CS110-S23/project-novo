import { React } from "react";
import Image from "next/image";

const MessageChat = ({ image, name, message }) => {
	return (
		<div className='flex relative mt-4 m-2 py-2 hover:bg-novo-lightpurple hover:rounded-md'>
			<div className='pl-3'>
				<Image
					src={image}
					alt='Landing'
					className=' w-11 h-10 object-cover rounded-full'
				/>
				<span className='top-2 left-10 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
			</div>
			<div className='flex justify-between w-full'>
				<div className='ml-3'>
					{name}
					<div className='text-sm text-novo-messagegray'>
						You: {message}
					</div>
				</div>
				{/* <div className='flex items-start text-novo-purple pt-1 text-xs'>
					{mins}min ago
				</div> */}
			</div>
		</div>
	);
};

export default MessageChat;
