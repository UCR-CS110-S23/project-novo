import NavBar from "../components/NavBar";
import ProfilePicture from "../components/ProfilePicture.jsx";
import AddPicture from "../components/AddPicture.jsx";
import AddActivityCard from "../components/AddActivityCard";
import AddActivityPopUp from "../components/AddActivityPopUp.jsx";
import { FaTimes } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Beach from "../public/beach.png";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function EditProfile() {
	const { data: session } = useSession();

	const [pronounsToggle, setPronounsToggle] = useState(session.user.pronoun);
	const [showMeToggle, setShowMeToggle] = useState(session.user.preference);
	const [tag, setTag] = useState("");
	const [user, setUser] = useState(session.user);

	const [info, setInfo] = useState({
		interests: new Set(session.user.interests),
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setUser(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleTagSubmit = e => {
		e.preventDefault();
		if (info.interests.size < 6) {
			setInfo({ ...info, interests: new Set([...info.interests, tag]) });
			setTag("");
		}
	};

	const handleTagRemove = interest => {
		const interests = info.interests;
		interests.delete(interest);
		setInfo({ ...info, interests: interests });
	};

	const handleUpdate = () => {
		const packet = {
			...user,
			...info,
			preference: showMeToggle,
			pronoun: pronounsToggle,
		};
		console.log(packet);
	};

	return (
		<>
			<div className='grid grid-cols-6'>
				{/* Nav Bar */}
				<div className='col-span-1 w-1/6 fixed'>
					<div className='absolute'>
						<NavBar />
					</div>
				</div>

				{/* Content of Page */}
				<div className='col-start-2 col-end-6'>
					<div className='mt-8 text-left'>
						<div className='text-2xl ml-40 mt-14'>Edit Profile</div>
					</div>

					{/* Adding Photos Part */}
					<div className='ml-40 mt-14 flex flex-row space-x-6'>
						<ProfilePicture />
						<AddPicture />
					</div>

					{/* About Me section */}
					<div>
						<div className='text-xl font-medium mt-4 mb-2 ml-40'>
							About Me
						</div>
						<textarea
							className='ml-40 focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder-[#858585] placeholder:font-regular'
							placeholder='Tell us about yourself'
							value={user.bio}
							onChange={handleChange}
							name='bio'
						/>
					</div>

					{/* Middle Content  */}
					<div className='flex space-x-20 ml-40 mt-4 w-full'>
						{/* Age section */}
						<div className='w-1/2'>
							<div className='flex space-x-3'>
								<div className='text-xl font-medium mb-2'>
									Age
								</div>
							</div>
							<div className='flex border rounded-2xl px-2 py-2 '>
								<input
									type='number'
									className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-regular pl-[5px]'
									placeholder='Enter your age'
									value={user.age}
									name='age'
									onChange={handleChange}
								/>
							</div>

							{/* Location */}
							<div className='w-full mt-4'>
								<div className='flex space-x-3'>
									<div className='text-xl font-medium mb-2'>
										Location
									</div>
								</div>
								<div className='flex border rounded-2xl px-2 py-2 '>
									<input
										type='text'
										className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-regular pl-[5px]'
										placeholder='Enter your location'
										value={user.location}
										onChange={handleChange}
										name='location'
									/>
								</div>
							</div>

							{/* Interests - text input*/}
							<div className='w-full mt-4 items-center'>
								{/* title section */}
								<div className='flex space-x-3 items-baseline'>
									<div className='text-xl font-medium mb-2'>
										Interests
									</div>
									<div className='font-light text-[#858585] text-base'>
										Choose up to 6 interests
									</div>
								</div>

								{/* interests text input --> will populate tag in other text box */}
								<div>
									<div className='border rounded-2xl px-2 py-2'>
										<form onSubmit={handleTagSubmit}>
											<input
												className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-regular pl-[5px]'
												type='text'
												value={tag}
												onChange={e =>
													setTag(e.target.value)
												}
												placeholder='Enter your interests (movies, running, etc.)'
												name='first'
												autoComplete='off'
												maxLength={20}
											/>
										</form>
									</div>
								</div>
							</div>
						</div>

						{/* Toggle Items */}
						<div className='w-5/12 justify-end'>
							{/* Pronouns toggle */}
							<div className='text-xl font-medium mb-2'>
								Pronouns
							</div>
							<div className='flex space-x-4'>
								<button
									onClick={() => setPronounsToggle("he/him")}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === "he/him"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									HE/HIM
								</button>
								<button
									onClick={() => setPronounsToggle("she/her")}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === "she/her"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									SHE/HER
								</button>
								<button
									onClick={() =>
										setPronounsToggle("they/them")
									}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === "they/them"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									THEY/THEM
								</button>
							</div>

							{/* Show me toggle */}
							<div className='text-xl font-medium mb-2 mt-4'>
								Show Me
							</div>
							<div className='flex space-x-4'>
								<button
									onClick={() => setShowMeToggle("men")}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === "men"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									MEN
								</button>
								<button
									onClick={() => setShowMeToggle("woman")}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === "woman"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									WOMEN
								</button>
								<button
									onClick={() => setShowMeToggle("both")}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === "both"
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									BOTH
								</button>
							</div>
						</div>
					</div>

					{/* Interests --> user types in any interest --> populates in this box */}
					<div className='ml-40 w-full mt-4 focus:outline-none h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder-[#858585] placeholder:font-regular'>
						<Row>
							{[...info.interests].map((interest, index) => (
								<Col key={index} className='!max-w-fit p-1'>
									<div className=''>
										<button className='text-white border-[#7231F3] px-3 bg-[#7231F3] py-1 rounded-full flex justify-center items-center'>
											{interest}
											<FaTimes
												className='hover:text-red-500 ml-4'
												onClick={() =>
													handleTagRemove(interest)
												}
											/>
										</button>
									</div>
								</Col>
							))}
						</Row>
					</div>

					{/* Current Activities section */}
					<div className='mt-8 ml-40 flex space-x-3 items-baseline'>
						<div className='text-xl font-medium mb-2'>
							Current Activities
						</div>

						<div className='font-light text-[#858585] text-base'>
							Go to Activities Tab to add activities. Choose up to
							3.
						</div>
					</div>

					{/* Current activities pictures */}
					<div className='ml-40 mt-3 items-baseline'>
						<div className='w-10/12 space-x-4 flex justify-center'>
							<AddActivityCard image={Beach} />
							<AddActivityCard image={Beach} />
							<AddActivityPopUp />
						</div>
					</div>

					{/* Submit Button */}
					<div className='ml-72 flex justify-center py-7'>
						<button
							className='w-1/2 bg-[#7231F3] text-white rounded-full py-2'
							onClick={handleUpdate}
						>
							SAVE CHANGES
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
