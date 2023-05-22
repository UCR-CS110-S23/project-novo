import Image from "next/image";
import UploadPhoto from "../public/uploadPhoto.png";

const ProfilePicture = () => {
	return (
		<>
			<div className='bg-[#F0F0F0] rounded-3xl aspect-square flex justify-center items-center flex-col w-3/12'>
				<div className='w-5/12'>
					<Image
						src={UploadPhoto}
						alt='ProfileUploadPicture'
						layout='responsive'
					/>
				</div>
				<button className='border border-[#858585] py-2 px-3 mt-4 text-[#858585] rounded-3xl text-xs'>
					UPLOAD FROM COMPUTER
				</button>
			</div>
		</>
	);
};

export default ProfilePicture;
