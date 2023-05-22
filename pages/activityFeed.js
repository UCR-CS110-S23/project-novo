import ActivityFeedCard from "../components/ActivityFeedCards";
import NavBar from "../components/NavBar";
import ActivitiesCart from "../components/ActivitiesCart";

export default function ActivityProfile() {
	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-1 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>

				<div className=' flex flex-col items-center col-start-2 col-end-6'>
					<div className='flex flex-col w-10/12'>
						<div className='flex flex-col justify-start pt-3 pl-5'>
							<div className='text-3xl mt-2'>Activity</div>
							<input
								class='border border-gray-200 mt-4 bg-white h-10 w-full p-4 rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Search activites...'
							></input>
						</div>
						<div className='grid grid-cols-3 gap-5 mt-10'>
							<ActivityFeedCard />
							<ActivityFeedCard />
							<ActivityFeedCard />
						</div>
					</div>
				</div>
				<div className='col-start-6 border-l h-full'>
					<ActivitiesCart />
				</div>
			</div>
		</>
	);
}
