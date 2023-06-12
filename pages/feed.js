import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar";
import { GrClose } from "react-icons/gr";
import { getAllPostData } from "@/lib/getFeed";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link.js";
import Image from "next/image.js";
import Activities from "@/public/data/Activities";
import { useEffect } from "react";

export default function Feed({ data }) {
	const temp = JSON.parse(data);

	const [counter, setCounter] = useState(0);
	// const [selection, setSelection] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [act1, setAct1] = useState({});
	const [act2, setAct2] = useState({});
	const [act3, setAct3] = useState({});
	const [activityChosen, setActivityChosen] = useState("");

	const handleStateChange = newState => {
		setActivityChosen(newState);
	};

	const increase = () => {
		if (counter + 1 >= temp.length) {
			setCounter(0);
		} else {
			setCounter(counter => counter + 1);
		}
	};

	const handleCheck = () => {
		setShowModal(true);
	};

	const modalExit = () => {
		setShowModal(false);
		increase();
	};

	useEffect(() => {
		const one = temp[counter].activities[0];
		const two = temp[counter].activities[1];
		const three = temp[counter].activities[2];
		setAct1(Activities.find(a => one == a.name.toUpperCase()));
		setAct2(Activities.find(a => two == a.name.toUpperCase()));
		setAct3(Activities.find(a => three == a.name.toUpperCase()));
	}, [counter, temp]);

	const activityImageSelect = activityChosen => {
		if (activityChosen === 0) {
			return act1.banner;
		}
		if (activityChosen === 1) {
			return act2.banner;
		}
		if (activityChosen === 2) {
			return act3.banner;
		}
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
							<ActivityCard
								onStateChange={handleStateChange}
								one={act1}
								two={act2}
								three={act3}
							/>
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
										<button onClick={() => modalExit()}>
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
												src={activityImageSelect(
													activityChosen
												)}
												alt='Selected Image'
												width={400}
												height={200}
												className='rounded-xl'
											/>
											<div className='absolute bg-white rounded-full text-black text-md px-4 py-2'>
												{
													temp[counter].activities[
														activityChosen
													]
												}
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
