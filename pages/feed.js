// import MatchButtons from "@/components/MatchButtons.jsx";
import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar";
import { getAllPostData } from "@/lib/getFeed";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";
import MatchModal from "@/components/MatchModal.jsx";

export default function Feed({ data }) {
	const temp = JSON.parse(data);
	console.log("DATA", temp);

	const [counter, setCounter] = useState(0);
	// const [showModal, setShowModal] = useState(false);

	const increase = () => {
		if (counter < temp.length) setCounter(counter => counter + 1);
	};

	console.log("COUNT", temp[0]);

	const handleCheck = () => {
		increase();
		<MatchModal />;
	};

	return (
		<div className='grid grid-cols-6'>
			<div className='col-span-1'>
				<NavBar />
			</div>

			<div className='col-start-2 col-span-6'>
				<div className='grid rows-2 mt-12'>
					{/* {temp.map((post, index) => ( */}
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
					{/* ))} */}
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
