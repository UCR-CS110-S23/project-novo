import NavBar from "../components/NavBar";
import ProfilePicture from "../components/ProfilePicture.jsx";
import AddPicture from "../components/AddPicture.jsx";

import { useState } from "react";

export default function EditProfile() {
	const [pronounsToggle, setPronounsToggle] = useState(0);
	const [showMeToggle, setShowMeToggle] = useState(0);

	return (
		<>
			<div className='grid grid-cols-6'>
				{/* Nav Bar */}
				<div className='col-span-1 w-1/6 fixed'>
					<div className='absolute '>
						<NavBar />
					</div>
				</div>

				{/* Page Title */}
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
						<div className='text-xl font-outfit font-medium mt-4 mb-2 ml-40'>
							About Me
						</div>
						<textarea
							className='ml-40 focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder-[#858585] placeholder:font-outfit placeholder:font-regular'
							placeholder='Tell us about yourself'
						/>
					</div>

					{/* Middle Content  */}
					<div className='flex space-x-24 ml-40 mt-4'>
						{/* Age section */}
						<div className='w-1/2'>
							<div className='flex space-x-3'>
								<div className='text-xl font-outfit font-medium mb-2'>
									Age
								</div>
							</div>
							<div className='flex border rounded-2xl px-2 py-2 '>
								<input
									type='text'
									className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-outfit placeholder:font-regular pl-[5px]'
									placeholder='Enter your age'
								/>
							</div>

							{/* Location */}
							<div className='w-full mt-4'>
								<div className='flex space-x-3'>
									<div className='text-xl font-outfit font-medium mb-2'>
										Location
									</div>
								</div>
								<div className='flex border rounded-2xl px-2 py-2 '>
									<input
										type='text'
										className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-outfit placeholder:font-regular pl-[5px]'
										placeholder='Enter your location'
									/>
								</div>
							</div>

							{/* Interests */}
							<div className='w-full mt-4 items-center'>
								<div className='flex space-x-3 items-baseline'>
									<div className='text-xl font-outfit font-medium mb-2'>
										Interests
									</div>

									<div className='font-light text-[#858585] text-base'>
										Choose up to 6 interests
									</div>
								</div>
								<div className='flex border rounded-2xl px-2 py-2 '>
									<input
										type='text'
										className='focus:outline-none w-full placeholder:font-light placeholder-[#858585] placeholder:font-outfit placeholder:font-regular pl-[5px]'
										placeholder='Enter your interests (movies, running, etc.)'
									/>
								</div>
							</div>
						</div>

						{/* Pronouns toggle */}
						<div className='w-1/2'>
							<div className='text-xl font-medium mb-2'>
								Pronouns
							</div>
							<div className='flex space-x-4'>
								<button
									onClick={() => setPronounsToggle(1)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === 1
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									HE/HIM
								</button>
								<button
									onClick={() => setPronounsToggle(2)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === 2
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									SHE/HER
								</button>
								<button
									onClick={() => setPronounsToggle(3)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										pronounsToggle === 3
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									THEY/THEM
								</button>
							</div>
						</div>

						{/* Show me toggle */}
						<div className='w-1/2'>
							<div className='text-xl font-medium mb-2'>
								Show Me
							</div>
							<div className='flex space-x-4'>
								<button
									onClick={() => setShowMeToggle(1)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === 1
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									MEN
								</button>
								<button
									onClick={() => setShowMeToggle(2)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === 2
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									WOMEN
								</button>
								<button
									onClick={() => setShowMeToggle(3)}
									className={`text-sm w-1/2 text-[#858585] text-center border rounded-full border-[#D9D9D9] py-2.5 px-3 ${
										showMeToggle === 3
											? "bg-[#7231F3] text-white border rounded-full border-[#7231F3]"
											: "bg-transparent"
									}`}
								>
									BOTH
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
