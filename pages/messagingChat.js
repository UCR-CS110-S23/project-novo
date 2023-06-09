import NavBar from "../components/NavBar";
import MessageGuy from "../public/messageGuy.jpg";
import MessageChat from "@/components/MessageChat";
// import MessageResponse from "@/components/MessageResponse";
// import MyMessageResponse from "@/components/MyMessage";
import Image from "next/image";
// import { FiCamera } from "react-icons/fi";
// import { FiPaperclip } from "react-icons/fi";
// import { BsPlusSquare } from "react-icons/bs";
// import { FiSend } from "react-icons/fi";
import Disney from "../public/disneyland.png";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export default function Messaging() {
	const [message, setMessage] = useState("");
	const [messageReceived, setMessageReceived] = useState("");

	const sendMesssage = () => {
		socket.emit("send_message", { message });
	};

	useEffect(() => {
		socket.on("receive_message", data => {
			setMessageReceived(data.message);
		});
	}, [socket]);

	return (
		<>
			<div className='grid grid-cols-12'>
				<div className='col-span-2'></div>
				<div className='col-span-2 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>
				<div className='col-start-3 col-end-6 border-r h-screen'>
					<div className='text-3xl mt-4 ml-4'>Message</div>
					<div className='text-sm mt-10 ml-8 text-novo-darkgray'>
						Search
					</div>
					<div className='mt-4 border-t'>
						<MessageChat
							image={MessageGuy}
							name='Jeffery Pine'
							message='Okay, Let’s grab drinks and then go...'
							mins='10'
						/>
						<MessageChat
							image={MessageGuy}
							name='Blake L'
							message='Okay, Let’s grab drinks and then go...'
							mins='20'
						/>
					</div>
				</div>
				<div className='col-start-6 border-t col-end-13 h-screen relative'>
					<div className='flex justify-between w-full border-b'>
						<div className='flex mt-4'>
							<div className='pl-3'>
								<Image
									src={Disney}
									alt='Landing'
									className=' w-20 h-20 object-cover rounded-full'
								/>
							</div>
							<div className='text-2xl mt-2 ml-3'>
								Ricky Smith
								<div className='text-sm -mt-2 text-green-500'>
									Online
								</div>
							</div>
						</div>
						<div className='relative flex mt-4 mr-4 mb-4 items-start h-20 w-40'>
							<Image
								src={Disney}
								alt='Landing'
								className='rounded-md'
							/>
							<div className='absolute bg-novo-lightpurple text-novo-purple text-xs rounded-full whitespace-nowrap !max-w-fit py-1 pr-2 pl-[5%] ml-20 -mt-2'>
								DISNEYLAND
							</div>
						</div>
					</div>
					<div className='p-4'>
						<input
							className='border'
							placeholder='Message...'
							onChange={event => {
								setMessage(event.target.value);
							}}
						/>
						<button onClick={sendMesssage} className='border'>
							Send Message
						</button>
					</div>
					<h1>Message:</h1>
					{messageReceived}
				</div>
			</div>
		</>
	);
}
