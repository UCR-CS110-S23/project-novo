import ActivityCard from "../components/ActivityCard.jsx";
import UserCard from "../components/UserCard.jsx";

export default function Feed() {
	return (
		<div className='flex justify-center'>
			<UserCard />
			<ActivityCard />
		</div>
	);
}
