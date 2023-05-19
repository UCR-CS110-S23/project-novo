import React from "react";
import Beach from "../public/beach.png";
import ActivityCartCard from "../components/ActivityCartCard";

const ActivitiesCart = () => {
	return (
		<div>
			<div className='fixed flex flex-col items-center justify-center'>
				<div className='my-[15%]'>Your Selected Activities</div>
				<div className='w-10/12 space-y-6'>
					<ActivityCartCard image={Beach} />
					<ActivityCartCard image={Beach} />
					<ActivityCartCard image={Beach} />
				</div>
			</div>
		</div>
	);
};

export default ActivitiesCart;
