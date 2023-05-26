import { React, useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Questions = ({ state }) => {
	const [identity, setIdentity] = useState(0);
	const [pronoun, setPronoun] = useState(0);
	const [gender, setGender] = useState(0);
	const [tag, setTag] = useState("");

	const [data, setData] = useState({
		name: "",
		age: 0.0,
		pronoun: "",
		gender: "",
		preference: "",
		location: "",
		interests: new Set(),
	});

	const handleTagSubmit = e => {
		e.preventDefault();
		if (data.interests.size < 6) {
			setData({ ...data, interests: new Set([...data.interests, tag]) });
			setTag("");
		}
	};

	const handleTagRemove = interest => {
		const interests = data.interests;
		interests.delete(interest);
		setData({ ...data, interests: interests });
	};

	return (
		<>
			<div className='w-full flex justify-center'>
				{state === 0 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR NAME
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}

				{state === 1 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR AGE
							</div>
							<input
								type='number'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}

				{state === 2 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								HOW DO YOU IDENTIFY?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setIdentity(1)}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										identity === 1
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									MAN
								</button>
								<button
									onClick={() => setIdentity(2)}
									className={`text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										identity === 2
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									WOMAN
								</button>
								<button
									onClick={() => setIdentity(3)}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										identity === 3
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									NON-BINARY
								</button>
							</div>
						</div>
					</>
				)}
				{state === 3 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								WHAT ARE YOUR PRONOUNS?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setPronoun(1)}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										pronoun === 1
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									HE/HIM
								</button>
								<button
									onClick={() => setPronoun(2)}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										pronoun === 2
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									SHE/HER
								</button>
								<button
									onClick={() => setPronoun(3)}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										pronoun === 3
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									THEY/THEM
								</button>
							</div>
						</div>
					</>
				)}
				{state === 4 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR LOCATION
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}
				{state === 5 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ADD A PHOTO
							</div>
							<button
								type='text'
								className='border-dashed border-2 border-novo-lightgray w-full h-full text-xl font-light py-7 px-3 text-center text-[#B9B9B9] focus:outline-none rounded-xl'
							>
								UPLOAD FROM COMPUTER
							</button>
						</div>
					</>
				)}
				{state === 6 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ADD ACTIVITIES
							</div>
							<Link
								href='/activityFeed'
								className='border no-underline text-novo-darkgray  hover:bg-novo-purple hover:text-white border-novo-gray w-full h-full text-4xl py-4 px-3 text-center focus:outline-none rounded-xl'
							>
								CHOOSE 3 ACTIVITIES
							</Link>
						</div>
					</>
				)}
				{state === 7 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								WHO DO YOU WANT TO SEE?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setGender(1)}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										gender === 1
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									MEN
								</button>
								<button
									onClick={() => setGender(2)}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										gender === 2
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									WOMEN
								</button>
								<button
									onClick={() => setGender(3)}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										gender === 3
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									BOTH
								</button>
							</div>
						</div>
					</>
				)}
				{state === 8 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray -translate-y-3.5 mb-[2%]'>
								ENTER 6 INTERESTS
							</div>
							<div className='w-full'>
								<div className='flex flex-col items-center w-full'>
									<div className='w-1/4 '>
										<form onSubmit={handleTagSubmit}>
											<input
												className='text-black pl-3 py-1 text-sm font-light  rounded-lg border-solid border border-beatdrop-grey bg-beatdrop-lightgrey w-fit'
												type='text'
												value={tag}
												onChange={e =>
													setTag(e.target.value)
												}
												placeholder='ADD TAG'
												name='first'
												autoComplete='off'
												maxLength={20}
											/>
										</form>
									</div>
									<div className=' w-full flex justify-center'>
										<Row className=' w-fit m-0 py-3'>
											{[...data.interests].map(
												(interest, index) => (
													<Col
														key={index}
														className='!max-w-fit p-1'
													>
														<div className=''>
															<button className='text-novo-purple border-novo-purple px-3 bg-novo-lightpurple py-1 rounded-full flex justify-center items-center'>
																{interest}
																<FaTimes
																	className='hover:text-red-500 ml-2'
																	onClick={() =>
																		handleTagRemove(
																			interest
																		)
																	}
																/>
															</button>
														</div>
													</Col>
												)
											)}
										</Row>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Questions;
