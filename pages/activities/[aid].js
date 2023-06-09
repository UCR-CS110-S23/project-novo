import Image from "next/image";
import Review from "../../components/Review";
import NavBar from "../../components/NavBar";
import { AiOutlineStar } from "react-icons/ai";
import ActivitiesCart from "../../components/ActivitiesCart";
import { getActivity } from "@/lib/getActivity";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Activities from "@/public/data/Activities";

export default function ActivityProfile() {
	const router = useRouter();
	const [act, setAct] = useState({});

	useEffect(() => {
		const data = router.query.aid;
		setAct(Activities.filter(a => data === a.id)[0]);
		console.log("ACTS: ", act);
	}, []);

	return (
		<>
			<div className='grid grid-cols-6'>
				<div className='col-span-1 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>

				<div className=' flex flex-col items-center col-start-2 col-end-6'>
					<div className='flex flex-col items-center justify-center w-10/12'>
						<div className='relative'>
							<Image
								src={act.image}
								width={40}
								height={30}
								alt='Landing'
								layout='responsive'
								className='rounded-b-xl'
							/>
							<div>
								<div className='absolute uppercase bottom-6 left-0 bg-white rounded-r-full text-black text-2xl py-1 pr-4 pl-[5%]'>
									{act.name}
								</div>
								<div className='absolute hover:bg-novo-purple hover:text-white bottom-6 right-[3%] bg-novo-lightpurple border-2 border-novo-purple text-novo-purple rounded-full px-3 py-0.5 text-xl'>
									ADD ACTIVITY
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-start pt-3 pl-5'>
							<div className='grid grid-cols-4 w-full '>
								<div className='col-start-1 col-span-3'>
									<div className=' text-base mt-2'>
										{act.address}
									</div>
									<a
										className='text-sm font-light text-gray-500'
										href='https://disneyland.disney.go.com'
									>
										{act.url}
									</a>
									<div className='text-sm font-light text-gray-500 mt-4 mr-8'>
										{act.description}
									</div>
								</div>
								<div className='flex justify-center flex-col items-center space-y-2 border-l'>
									<div className='text-6xl font-medium'>
										4.6
									</div>
									<div className='flex text-xl'>
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
										<AiOutlineStar />
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-start w-full mt-4'>
							<div className='text-2xl pb-2 w-full border-b'>
								Reviews
							</div>
							<div className='space-y-10 mt-3'>
								<Review />
								<Review />
								<Review />
								<Review />
							</div>
						</div>
						<div className='w-full mt-5 space-y-5 mb-10'>
							<div className='text-2xl pb-2 w-full border-b'>
								Write a Review
							</div>
							<textarea
								className='w-full rounded-lg p-3 text-md font-light border'
								placeholder='Leave your review here'
							/>
							<div className='flex justify-between'>
								<div className='flex text-2xl'>
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
									<AiOutlineStar />
								</div>
								<button className='bg-novo-purple hover:bg-novo-darkpurple rounded-full text-white px-3 py-0.5 font-light text-md right-0'>
									SUBMIT REVIEW
								</button>
							</div>
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

export async function getServerSideProps() {
	const activityData = await getActivity();
	const data = JSON.stringify(activityData);
	return {
		props: {
			data,
		},
	};
}
