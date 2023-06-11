import ActivityFeedCard from "../components/ActivityFeedCards";
import NavBar from "../components/NavBar";
// import Disney from "../public/disneyCard.jpg";
import ActivitiesCart from "../components/ActivitiesCart";
import Link from "next/link";
import Activities from "../public/data/Activities";

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
						</div>
						<div className='grid grid-cols-3 gap-4 mt-10'>
							{Activities.map((activity, index) => (
								<Link
									key={index}
									href={`/activities/${activity.id}`}
									className='no-underline text-black'
								>
									<ActivityFeedCard
										image={activity.square}
										title={activity.name}
										location={activity.location}
										rating={activity.rating}
									/>
								</Link>
							))}
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
