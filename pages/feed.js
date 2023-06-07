import MatchButtons from "@/components/MatchButtons.jsx";
import ActivityCard from "../components/ActivityCards.jsx";
import UserCard from "../components/UserCard.jsx";
import NavBar from "../components/NavBar";
import { getAllPostData } from "@/lib/getFeed";

export default function Feed({ data }) {
	const temp = JSON.parse(data);
	console.log("DATA", temp);
	return (
		<div className='grid grid-cols-6'>
			<div className='col-span-1'>
				<NavBar />
			</div>

			<div className='col-start-2 col-span-6'>
				<div className='grid rows-2 mt-12'>
					{temp?.map((post, index) => (
						<div key={index} className='flex justify-center'>
							<div className='w-5/12'>
								<UserCard post={post} />
							</div>
							<div className='w-[26vw] ml-5'>
								<div className='text-sm my-2.5 font-light'>
									SELECT AN ACTIVITY:
								</div>
								<ActivityCard post={post} />
							</div>
						</div>
					))}
					<div className='flex justify-center mt-4'>
						<MatchButtons />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const postData = await getAllPostData();
	const data = JSON.stringify(postData);
	// console.log(postData);
	return {
		props: {
			data,
		},
	};
}
