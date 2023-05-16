import MatchButtons from "@/components/MatchButtons.jsx";
import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";

export default function Feed() {
	return (
		<div className='grid rows-2'>
			<div className='flex justify-center'>
				<div className='w-1/3'>
					<UserCard />
				</div>
				<div className='w-[26vw] ml-5'>
					<div className='text-sm my-1.5 font-light'>
						SELECT AN ACTIVITY:
					</div>
					<ActivityCard />
				</div>
			</div>
			<div className='flex justify-center mt-4'>
				<MatchButtons />
			</div>
		</div>
	);
}
