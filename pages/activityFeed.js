import ActivityFeedCard from "../components/ActivityFeedCards";
import NavBar from "../components/NavBar";
import Disney from "../public/disneyCard.jpg";
import ActivitiesCart from "../components/ActivitiesCart";
import Link from "next/link";

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
						<div className='flex flex-col justify-start pt-3'>
							<div className='text-3xl mt-4'>Activity</div>
							<input
								className='border border-gray-200 mt-4 bg-white h-10 w-full p-4 rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Search activites...'
							></input>
						</div>
						<div className='grid grid-cols-3 gap-4 mt-10'>
							<Link
								href='/activityProfile'
								className='no-underline text-black'
							>
								<ActivityFeedCard
									image={Disney}
									title='DisneyLand'
									location='Anaheim,CA'
									rating='4.6'
								/>
							</Link>

							<ActivityFeedCard
								image={Disney}
								title='DisneyLand'
								location='Anaheim,CA'
								rating='4.7'
							/>
							<ActivityFeedCard
								image={Disney}
								title='DisneyLand'
								location='Anaheim,CA'
								rating='4.8'
							/>
							<ActivityFeedCard
								image={Disney}
								title='DisneyLand'
								location='Anaheim,CA'
								rating='4.6'
							/>
							<ActivityFeedCard
								image={Disney}
								title='DisneyLand'
								location='Anaheim,CA'
								rating='4.6'
							/>
							<ActivityFeedCard
								image={Disney}
								title='DisneyLand'
								location='Anaheim,CA'
								rating='4.6'
							/>
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
