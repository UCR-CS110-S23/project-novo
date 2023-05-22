import NavBar from "../components/NavBar";
import ProfilePicture from "../components/ProfilePicture.jsx";
// import AddPicture from "../components/AddPicture.jsx";

export default function EditProfile() {
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
					<div className='ml-40 mt-14'>
						<ProfilePicture />
					</div>
				</div>
			</div>
		</>
	);
}
