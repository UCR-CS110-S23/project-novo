import NavBar from "../components/NavBar";
import MessageChat from "@/components/MessageChat";
import MessageResponse from "@/components/MessageResponse";
import MyMessageResponse from "@/components/MyMessage";
import ReactDOM from "react-dom";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { getAllChats } from "../lib/getChat";
// import { BsPlusSquare } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import Disney from "../public/disneyland.png";
import Laguna from "../public/laguna-square.png";
import Melrose from "../public/melrose-square.png";
import Lacma from "../public/lacma-square.png";
import Aquarium from "../public/aquarium-square.png";
import Universal from "../public/universal-square.png";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

// TO DO - FIX THE PICTURES
const roomProfilePics = {
	Disneyland: { src: "/DisneyChat.png", width: 200, height: 200 },
	"Laguna Beach": { src: "/LagunaChat.png", width: 200, height: 200 },
	"Melrose Trading Post": {
		src: "/Melrosechat.png",
		width: 200,
		height: 200,
	},
	LACMA: { src: "/LacmaChat.png", width: 200, height: 200 },
	"Aquarium of the Pacific": {
		src: "/AquaChat.png",
		width: 200,
		height: 200,
	},
	"Universal Studios": {
		src: "/UniversalChat.png",
		width: 200,
		height: 200,
	},
};

export default function Messaging({ data }) {
	const temp = JSON.parse(data);

	const [message, setMessage] = useState("");
	const [messageContainer, setMessageContainer] = useState(null);
	const [room, setRoom] = useState("");
	const [user, setUser] = useState(null);
	const [topic, setTopic] = useState([]);
	const [address, setAddress] = useState("");
	// let currentMessages = [];
	// const [recentMessage, setrecentMessage] = useState(null);
	const [pic, setPic] = useState({});
	// const [enterRoom, setEnterRoom] = useState(false);

	useEffect(() => {
		const data = room;
		setTopic(temp.filter(a => data === a.room));
		setPic(roomProfilePics[data]);
	}, [room, temp]);

	const joinRoom = () => {
		if (room !== "") {
			setMessageContainer(null);
			socket.emit("join_room", room);
		}
	};

	const { data: session } = useSession();
	useEffect(() => {
		setUser(session?.user?.name);
		console.log(user);
	}, [session]);

	useEffect(() => {
		setTopic([]);
		console.log("switch room", messageContainer);
		console.log("Room:", room);
	}, [room]);

	const sendMessage = () => {
		const currentTime = new Date().toLocaleTimeString([], {
			hour: "numeric",
			minute: "2-digit",
		});

		const mymessageElement = document.createElement("div");
		ReactDOM.render(
			<MyMessageResponse message={message} time={currentTime} />,
			mymessageElement
		);
		if (messageContainer) {
			console.log("before append", messageContainer);
			messageContainer.appendChild(mymessageElement); // Append the container to the message container
			console.log("after append", messageContainer);
			// setrecentMessage(mymessageElement);
			/* currentMessages.push(message);
			console.log("Curr mess:",currentMessages);*/
			// setEnterRoom(true)
		}

		socket.emit("send_message", { user, message, room, time: currentTime });
		postMessage();
	};

	/* if (room == "Laguna Beach" && recentMessage) {
		messageContainer.removeChild(recentMessage);
	}*/

	useEffect(() => {
		const container = document.getElementById("messageContainer");
		setMessageContainer(container);

		socket.on("receive_message", data => {
			const messageElement = document.createElement("div");
			ReactDOM.render(
				<MessageResponse
					key={data.timestamp}
					name={data.user}
					message={data.message}
					time={data.time}
				/>,
				messageElement
			);
			if (messageContainer) {
				messageContainer.appendChild(messageElement);
			}
		});

		return () => {
			socket.off("receive_message");
			socket.off("user-disconnected");
		};
	}, [messageContainer]);

	const postMessage = async () => {
		const currentTime = new Date().toLocaleTimeString([], {
			hour: "numeric",
			minute: "2-digit",
		});

		const messages = {
			user,
			message,
			room,
			time: currentTime,
		};
		try {
			await fetch("/api/auth/createMessage", {
				method: "POST",
				body: JSON.stringify(messages),
				headers: {
					"Content-Type": "application/json",
				},
			});

			console.log("message made successfully");
		} catch (error) {
			console.log(error);
		}
	};

	const handleSend = () => {
		sendMessage();
		setMessage("");
	};

	const handleRoom = () => {
		joinRoom();
	};

	return (
		<>
			{/* =========== WHOLE PAGE =========== */}
			<div className='grid grid-cols-12'>
				{/* Nav bar */}
				<div className='col-span-2 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>

				{/* =========== MESSAGES COLUMN =========== */}
				<div className='col-start-3 col-end-6 border-r h-screen'>
					<div className='text-3xl mt-11 ml-8'>Chat Rooms</div>

					{/* search bar */}
					<div className='font-light text-[#858585] pl-[5px] mt-10 ml-8 text-base'>
						Click on a chat room below to join!
					</div>

					<div className='flex flex-col mt-4 border-t'>
						{/* Disney */}
						<button
							onClick={() => {
								setRoom("Disneyland");
								handleRoom();
								setAddress(
									"1313 Disneyland Dr, Anaheim, CA 92802"
								);
							}}
						>
							<MessageChat image={Disney} name='Disneyland' />
						</button>

						{/* Laguna */}
						<button
							onClick={() => {
								setRoom("Laguna Beach");
								handleRoom();
								setAddress(
									"Broadway St & Pacific Coast Hwy, Laguna Beach, CA 92651"
								);
							}}
						>
							<MessageChat image={Laguna} name='Laguna Beach' />
						</button>

						{/* Melrose */}
						<button
							onClick={() => {
								setRoom("Melrose Trading Post");
								handleRoom();
								setAddress(
									"7850 Melrose Avenue, Los Angeles, California, 90046"
								);
							}}
						>
							<MessageChat
								image={Melrose}
								name='Melrose Trading Post'
							/>
						</button>

						{/* Lacma */}
						<button
							onClick={() => {
								setRoom("LACMA");
								handleRoom();
								setAddress(
									"5905 Wilshire Blvd, Los Angeles, CA 90036"
								);
							}}
						>
							<MessageChat image={Lacma} name='LACMA' />
						</button>

						{/* Aquarium */}
						<button
							onClick={() => {
								setRoom("Aquarium of the Pacific");
								handleRoom();
								setAddress(
									"100 Aquarium Way, Long Beach, CA 90802"
								);
							}}
						>
							<MessageChat
								image={Aquarium}
								name='Aquarium of the Pacific'
							/>
						</button>

						{/* Universal */}
						<button
							onClick={() => {
								setRoom("Universal Studios");
								handleRoom();
								setAddress(
									"100 Universal City Plaza, Universal City, CA 91608"
								);
							}}
						>
							<MessageChat
								image={Universal}
								name='Universal Studios'
							/>
						</button>
					</div>
				</div>

				{/* =========== ACTUAL CHAT CONTENT =========== */}
				<div
					id='chatContent'
					className='col-start-6 border-t col-end-13 h-screen relative'
				>
					{/* TOP PORTION OF CHAT CONTENT */}
					<div className='flex justify-between w-full border-b'>
						{room !== "" ? (
							<div className='flex mt-4'>
								<div className='pl-3'>
									<Image
										src={pic}
										alt='Landing'
										className=' w-20 h-20 object-cover rounded-full'
									/>
								</div>
								<div
									id='topContainer'
									className='text-2xl mt-2 ml-3'
								>
									{room} Chat
									<div className='text-sm -mt-2 text-gray-400'>
										{address}
									</div>
								</div>
							</div>
						) : (
							<div
								id='topContainer'
								className='flex justify-center w-full text-2xl mt-12 ml-3 mb-12'
							>
								<div className='justify-center text-novo-messagegray'>
									No Room Selected, Click on Chat Room to
									Join!
								</div>
							</div>
						)}
						{room !== "" && (
							<div className='relative flex mt-4 mr-8 mb-4 items-start h-20 w-40'>
								<Image
									src={pic}
									alt='Landing'
									className='rounded-md'
								/>
								<div className='absolute bg-novo-lightpurple text-novo-purple text-xs rounded-full !max-w-fit py-2 pr-2 pl-[5%] ml-28 -mt-2'>
									{room}
								</div>
							</div>
						)}
					</div>
					<div
						id='messagingPart'
						className='max-h-[calc(100vh-4rem-4rem)] overflow-y-auto mb-16'
					>
						<div className='flex relative justify-center'>
							{room !== "" && (
								<div className='text-center justify-center p-2 mt-4 bg-novo-lightpurple text-novo-purple text-sm rounded-md w-80'>
									You’re interested in going to {room}!
								</div>
							)}
						</div>
						<div id='messageContainer' className='mb-16'>
							{topic.map((entry, index) => {
								if (entry.user !== user) {
									return (
										<MessageResponse
											key={index}
											name={entry.user}
											message={entry.message}
											time={entry.time}
										/>
									);
								} else {
									return (
										<MyMessageResponse
											key={index}
											message={entry.message}
											time={entry.time}
										/>
									);
								}
							})}
							{/* {currentMessages.map((entry,index) => {
								<MyMessageResponse key= {index} message={entry} time={"11:00AM"} />;
							})}  */}
						</div>
					</div>
					<div className='absolute fixed flex items-center inset-x-0 bottom-0 h-16 bg-white'>
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
								className='bg-novo-gray pl-3 h-10 w-full rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Write something...'
								value={message}
								onChange={event => {
									setMessage(event.target.value);
								}}
							/>
						</div>
						<div className='mr-2 ml-3'>
							<button onClick={handleSend}>
								<FiSend className='text-xl text-novo-darkgray' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const postData = await getAllChats();
	const data = JSON.stringify(postData);
	return {
		props: {
			data,
		},
	};
}
