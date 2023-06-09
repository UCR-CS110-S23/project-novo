import NavBar from "../components/NavBar";
import MessageGuy from "../public/messageGuy.jpg";
import MessageChat from "@/components/MessageChat";
import MessageResponse from "@/components/MessageResponse";
import MyMessageResponse from "@/components/MyMessage";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import Disney from "../public/disneyland.png";

export default function Messaging() {
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
					<div className='text-3xl mt-4 ml-4'>Messagesss</div>
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
					<div className='text-novo-dategray mt-2 text-center text-sm'>
						YESTERDAY
					</div>
					<div className='flex relative justify-center'>
						<div className='text-center justify-center p-2 mt-2 bg-novo-lightpurple text-novo-purple text-sm rounded-md w-80'>
							You’re interested in going to Disneyland with Ricky!
						</div>
					</div>
					<div className=' max-h-max'>
						<MessageResponse
							image={MessageGuy}
							name='Ricky Smith'
							message='Hi, How are you?'
							time='11:00AM'
						/>
						<MyMessageResponse
							image={Disney}
							message="Hey Ricky, I'm doing great!"
							time='11:05AM'
						/>
						<MessageResponse
							image={MessageGuy}
							name='Ricky Smith'
							message="I'm down to go DisneyLand next Monday"
							time='11:15AM'
						/>
						<MyMessageResponse
							image={Disney}
							message="That would be fun, let's do it!"
							time='11:25AM'
						/>
					</div>
					<div className='absolute flex items-center inset-x-0 bottom-0 h-16'>
						<div className='ml-10'>
							<button className='text-novo-darkgray text-xl'>
								<FiCamera />
							</button>
						</div>
						<div className=' ml-10'>
							<button className='text-novo-darkgray text-xl'>
								<FiPaperclip />
							</button>
						</div>
						<div className='flex w-3/4 ml-10'>
							<input
								class='bg-novo-gray pl-3 h-10 w-full rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Write something...'
							></input>
							<button className='bg-novo-gray text-novo-darkgray text-xl rounded-r-lg -ml-3 pr-3'>
								<FiSend />
							</button>
						</div>
						<div className='ml-3 mt-1'>
							<button className='text-novo-darkgray text-xl'>
								<BsPlusSquare />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}