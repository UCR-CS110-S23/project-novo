import ActivityFeedCard from "../components/ActivityFeedCards";
import NavBar from "../components/NavBar";
// import Disney from "../public/disneyCard.jpg";
// import ActivitiesCart from "../components/ActivitiesCart";
import Link from "next/link";
import Activities from "../public/data/Activities";
import { getAllPostData } from "@/lib/getFeed";
import { useSession } from "next-auth/react";
// import { useEffect } from "react";

export default function ActivityProfile() {
	const { data: session, status } = useSession;
	console.log("SESSION: ", session, status);

	// useEffect(() => {
	// 	const one = session.user.activities[0];
	// 	const two = session.user.activities[1];
	// 	const three = session.user.activities[2];
	// 	setAct1(Activities.find(a => one == a.name.toUpperCase()));
	// 	setAct2(Activities.find(a => two == a.name.toUpperCase()));
	// 	setAct3(Activities.find(a => three == a.name.toUpperCase()));
	// }, []);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-1 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>

				<div className=' flex flex-col items-center col-start-2 col-end-7 mx-[10%]'>
					<div className='flex flex-col w-10/12'>
						<div className='flex flex-col justify-start pt-3'>
							<div className='text-3xl mt-4'>Activity</div>
						</div>
						<div className='grid grid-cols-3 gap-4 mt-10 mb-20'>
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
				{/* <div className='col-start-6 border-l h-full'>
					<ActivitiesCart />
				</div> */}
			</div>
		</>
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
