import MatchButtons from "@/components/MatchButtons.jsx";
import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar";

export default function Feed() {
	return (
		<div className='grid grid-cols-6'>
			<div className='col-span-1'>
				<NavBar />
			</div>

			<div className='col-start-2 col-span-6 '>
				<div className='grid rows-2 mt-12'>
					<div className='flex justify-center'>
						<div className='w-5/12'>
							<UserCard />
						</div>
						<div className='w-[26vw] ml-5'>
							<div className='text-sm my-2.5 font-light'>
								SELECT AN ACTIVITY:
							</div>
							<ActivityCard />
						</div>
					</div>
					<div className='flex justify-center mt-4'>
						<MatchButtons />
					</div>
				</div>
			</div>
		</div>
	);
}
