import Image from "next/image";
import UploadPhoto from "../public/uploadPhoto.webp";

const ProfilePicture = () => {
	return (
		<>
			<div className='bg-[#F0F0F0] rounded-3xl aspect-square flex justify-center items-center flex-col w-3/12 h-3/12'>
				<div className='w-4/12 mt-3'>
					<Image src={UploadPhoto} alt='ProfileUploadPicture' />
				</div>
				<input
					type='file'
					accept='image/webp'
					className='border border-novo-messagegray py-2 px-3 mt-2.5 text-novo-messagegray rounded-3xl text-xs'
				/>
			</div>
		</>
	);
};

export default ProfilePicture;
