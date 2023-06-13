import Image from "next/image";
import Review from "../../components/Review";
import NavBar from "../../components/NavBar";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Activities from "@/public/data/Activities";
import axios from "axios";
import { getAllComments } from "@/lib/getComments";
import { useSession } from "next-auth/react";
import { getAllPostData } from "@/lib/getFeed";

export default function ActivityProfile({ data, posts }) {
	const { data: session } = useSession();

	const comments = JSON.parse(data);
	const post = JSON.parse(posts);
	const router = useRouter();
	const [act, setAct] = useState({});
	const [actID, setActID] = useState("");
	const [text, setText] = useState("");
	const [picture, setPicture] = useState("");

	const [comment, setComments] = useState([]);
	const [rating, setRating] = useState(0);
	const [actRating, setActRating] = useState(0.0);

	const handleClick = newRating => {
		setRating(newRating);
	};

	const calculateAverage = () => {
		console.log("COMMENT LENGTH", comment.length);
		if (comment.length === 0) {
			setActRating(0);
			return;
		}

		const sum = comment.reduce((acc, entry) => acc + entry.rating, 0);
		const average = sum / comment.length;
		setActRating(average.toFixed(1));
	};

	useEffect(() => {
		const data = router.query.aid;
		setAct(Activities.filter(a => data === a.id)[0]);
		setActID(data);
		setComments(comments.filter(a => data === a.actID));
	}, [router.query]);

	useEffect(() => {
		calculateAverage();
	}, [comment]);

	// console.log("PICTURE", picture);

	const handleSubmit = e => {
		e.preventDefault();
		setPicture(post.filter(a => a.email === session.user.email)[0].image);

		if (picture) {
			const newReview = {
				text,
				rating,
				actID,
				name: session.user.name,
				picture,
				time: new Date().toLocaleString(),
			};

			axios
				.post("/api/addReview", newReview)
				.then(({ data }) => {
					router.reload();
					if (data.success) {
						setText("");
						setRating(0);
						setAct({});
						setName("");
						setPicture("");
					}
				})
				.catch(error => {
					console.log("[Post-Error]", error);
				});
		}
	};

	return (
		act && (
			<>
				<div className='grid grid-cols-6'>
					<div className='col-span-1 w-1/6 fixed'>
						<div className='absolute '>
							<NavBar />
						</div>
					</div>

					<div className=' flex flex-col items-center col-start-2 col-end-7'>
						<div className='flex flex-col items-center justify-center w-10/12'>
							<div className='relative'>
								<Image
									src={act?.banner}
									width={40}
									height={30}
									alt='Landing'
									layout='responsive'
									className='rounded-b-xl'
								/>
								<div>
									<div className='absolute uppercase bottom-6 left-0 bg-white rounded-r-full text-black text-2xl py-1 pr-4 pl-[5%]'>
										{act?.name}
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-start pt-3 pl-5'>
								<div className='grid grid-cols-4 w-full '>
									<div className='col-start-1 col-span-3'>
										<div className=' text-base mt-2'>
											{act?.address}
										</div>
										<a
											className='text-sm font-light text-gray-500'
											href={act?.url}
										>
											{act?.url}
										</a>
										<div className='text-sm font-light text-gray-500 mt-4 mr-8'>
											{act?.description}
										</div>
									</div>
									<div className='flex justify-center flex-col items-center space-y-2 border-l'>
										<div className='text-6xl font-medium'>
											{actRating}
										</div>
										<div className='flex flex-col justify-center items-center'>
											<div className='text-novo-darkgray font-light text-xs'>
												{comment.length === 0 && (
													<>NO REVIEWS</>
												)}
												{comment.length === 1 && (
													<>1 REVIEW</>
												)}

												{comment.length > 1 && (
													<>
														{comment.length} REVIEWS
													</>
												)}
											</div>
											<div className='text-novo-darkgray font-light text-xs'>
												AVERAGE RATING
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col items-start w-full mt-4'>
								<div className='text-2xl pb-2 w-full border-b'>
									Reviews
								</div>
								<div className='space-y-10 mt-3'>
									{comment.map((entry, index) => (
										<>
											<Review
												key={index}
												text={entry.text}
												rating={entry.rating}
												name={entry.name}
												time={entry.time}
												picture={entry.picture}
											/>
										</>
									))}
								</div>
							</div>
							<div className='w-full mt-5 space-y-5 mb-10'>
								<div className='text-2xl pb-2 w-full border-b'>
									Write a Review
								</div>
								<textarea
									className='w-full rounded-lg p-3 text-md font-light border'
									placeholder='Leave your review here'
									onChange={event => {
										setText(event.target.value);
									}}
								/>
								<div className='flex justify-between'>
									<div className='flex text-2xl'>
										<div className='flex items-center'>
											{[1, 2, 3, 4, 5].map(value => (
												<button
													key={value}
													onClick={() =>
														handleClick(value)
													}
													className='text-2xl'
												>
													{value <= rating ? (
														<AiFillStar className='text-black' />
													) : (
														<AiOutlineStar className='text-black' />
													)}
												</button>
											))}
										</div>
									</div>
									<button
										onClick={handleSubmit}
										className='bg-novo-purple hover:bg-novo-darkpurple rounded-full text-white px-3 py-0.5 font-light text-md right-0'
									>
										SUBMIT REVIEW
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
}

export async function getServerSideProps() {
	const comments = await getAllComments();
	const postData = await getAllPostData();

	const posts = JSON.stringify(postData);
	const data = JSON.stringify(comments);

	return {
		props: {
			data,
			posts,
		},
	};
}
