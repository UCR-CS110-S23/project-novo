import ActivityCard from "../components/ActivityCard.jsx";
import UserCard from "../components/UserCard.jsx";

export default function Feed() {
	return (
		<div className='flex justify-center'>
			<div className='w-1/3'>
				<UserCard />
			</div>
			<div className='w-[28vw] ml-5 flex flex-col space-y-3'>
				<ActivityCard />
				<ActivityCard />
				<ActivityCard />
			</div>

			{/* <div className='bg-red-500 h-fit w-fit flex flex-col'> */}

			{/* </div> */}
		</div>
	);
}
