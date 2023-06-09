import React, { useState } from "react";

const CreateActivity = ({ activity, location, activities, setActivities }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		const temp = !clicked;

		if (temp && activities.length < 3) {
			// add to activites array
			setClicked(!clicked);
			setActivities([...activities, activity]);
			console.log("ADDING", [...activities, activity]);
		} else if (!temp) {
			// remove from activities array
			setClicked(!clicked);
			setActivities(activities.filter(a => a !== activity));
			console.log(
				"POPPING",
				activities.filter(a => a !== activity)
			);
		}
	};

	return (
		<div onClick={handleClick}>
			<div className=' h-fit rounded-3xl hover:-translate-y-1 duration-300 w-full'>
				{clicked === false ? (
					<div className=' w-full flex justify-center items-center border rounded-full py-1 px-3'>
						<div className='flex justify-center items-center space-x-2 text-sm text-center text-black rounded-full'>
							<div>{activity}</div>

							<div className='font-light text-xs text-novo-darkgray'>
								{location}
							</div>
						</div>
					</div>
				) : (
					<div className=' w-full flex justify-center items-center border-2 border-novo-purple rounded-full py-1 bg-novo-lightpurple px-3'>
						<div className='flex justify-center items-center font-medium space-x-2 text-sm text-center  text-novo-darkpurple rounded-full'>
							<div>{activity}</div>

							<div className='font-light text-xs text-novo-purple'>
								{location}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CreateActivity;
