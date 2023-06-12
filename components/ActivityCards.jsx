import { React, useState } from "react";
import Image from "next/image";

const ActivityCard = ({ onStateChange, one, two, three }) => {
	const [toggle, setToggle] = useState(0);

	const handleToggleChange = newToggle => {
		setToggle(newToggle);
		onStateChange(newToggle);
	};

	return (
		<>
			<div className='flex flex-col justify-between h-full'>
				<div className='text-sm my-2.5 font-light'>
					SELECT AN ACTIVITY:
				</div>
				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12'>
						{one.banner && (
							<Image
								src={one.banner}
								alt='Landing'
								width={400}
								height={200}
								className='z-0 rounded-3xl aspect-card'
							/>
						)}
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => handleToggleChange(0)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 0
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
								name='activityOne'
							/>
						</div>
						<div className='absolute uppercase bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							{one.name}
						</div>
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl  hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12'>
						{two.banner && (
							<Image
								src={two.banner}
								width={400}
								height={200}
								alt='Landing'
								className='z-0 rounded-3xl aspect-card'
							/>
						)}
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => handleToggleChange(1)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 1
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
								name='activityTwo'
							/>
						</div>
						<div className='absolute uppercase bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							{two.name}
						</div>
					</div>
				</label>

				<label className='checked:border-novo-purple relative grid rows-2 h-fit rounded-3xl  hover:-translate-y-1 duration-300'>
					<div className='relative w-11/12 '>
						{three.banner && (
							<Image
								src={three.banner}
								width={400}
								height={200}
								alt='Landing'
								className='z-0 rounded-3xl aspect-card'
							/>
						)}
						<div className='absolute rounded-full text-white left-4 top-3'>
							<input
								type='radio'
								onClick={() => handleToggleChange(2)}
								className={`h-5 w-5 rounded-full appearance-none border border-white  ${
									toggle === 2
										? "bg-novo-purple text-white border rounded-full border-novo-purple"
										: "bg-transparent"
								}`}
								name='activityThree'
							/>
						</div>
						<div className='absolute uppercase bg-white right-3 top-3 text-sm px-3 py-1 text-black rounded-full'>
							{three.name}
						</div>
					</div>
				</label>
			</div>
		</>
	);
};

export default ActivityCard;
