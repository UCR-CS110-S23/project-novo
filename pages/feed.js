import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar";
import { GrClose } from "react-icons/gr";
import { getAllPostData } from "@/lib/getFeed";
import { useState } from "react";
import ActivitySelected from "../public/ActivitySelected.png";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link.js";
import Image from "next/image.js";

export default function Feed({ data }) {
	const temp = JSON.parse(data);
	console.log("DATA", temp);

	const [counter, setCounter] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const increase = () => {
		if (counter + 1 >= temp.length) {
			setCounter(0);
		} else {
			setCounter(counter => counter + 1);
		}
	};

	console.log("COUNT", temp.length);

	const handleCheck = () => {
		increase();
		setShowModal(true);
	};

	return (
		<div className='grid grid-cols-6'>
			<div className='col-span-1'>
				<NavBar />
			</div>

			<div className='col-start-2 col-span-6'>
				<div className='grid rows-2 mt-12'>
					<div className='flex justify-center'>
						<div className='w-5/12'>
							<UserCard post={temp[counter]} />
						</div>
						<div className='w-[26vw] ml-5'>
							<div className='text-sm my-2.5 font-light'>
								SELECT AN ACTIVITY:
							</div>
							<ActivityCard post={temp[counter]} />
						</div>
					</div>
					<div className='flex justify-center mt-4  space-x-3'>
						<button onClick={increase}>
							<div className='hover:bg-novo-lightpurple rounded-full text-5xl border-4 border-novo-purple text-novo-purple text-center p-2 pr-3  hover:-translate-y-1 duration-300'>
								<RxCross2 />
							</div>
						</button>
						<button type='button' onClick={handleCheck}>
							<div className='hover:bg-novo-darkpurple  hover:border-novo-darkpurple rounded-full text-5xl  border-4 border-novo-purple bg-novo-purple text-center text-white p-2 pr-3 hover:-translate-y-1 duration-300'>
								<BsCheckLg />
							</div>
						</button>
						{/* <MatchButtons /> */}
					</div>
				</div>
			</div>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
						<div className=' w-auto my-6  mx-auto max-w-3xl'>
							<div className='border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								<div className='flex flex-col place-items-center p-6'>
									<div className='text-2xl w-full flex justify-end'>
										<button
											onClick={() => setShowModal(false)}
										>
											<GrClose />
										</button>
									</div>
									<div className='flex flex-row'>
										<div className='text-4xl font-medium'>
											Activity Selected
										</div>
									</div>
									<div className='text-sm text-novo-messagegray mb-4 mt-1 font-light uppercase'>
										GO TO MESSAGES TO START CONVERSATION
										WITH {temp[counter].name}
									</div>
									<div className='mx-24'>
										<div className='relative w-96 flex justify-center items-center'>
											<Image
												src={ActivitySelected}
												alt='Landing'
												layout='responsive'
												className='rounded-xl'
											/>
											<div className='absolute bg-white rounded-full text-black text-md px-4 py-2'>
												DISNEYLAND
											</div>
										</div>
									</div>
									<div>
										<Link href='/messaging'>
											<button className='bg-novo-purple hover:bg-novo-darkpurple w-48 rounded-full text-white mt-8 px-3 py-0.5 mb-4 font-light text-l'>
												Message
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed bg-gray-600 bg-opacity-50 inset-0'></div>
				</>
			) : null}
		</div>
	);
}

export async function getServerSideProps() {
	const postData = await getAllPostData();
	const data = JSON.stringify(postData);
	return {
		props: {
			data,
		},
	};
}
