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
				<div className='w-[28vw] ml-5'>
					<ActivityCard />
				</div>
			</div>
			<div className='flex justify-center mt-4'>
				<MatchButtons />
			</div>
		</div>
	);
}
