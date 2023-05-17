import Image from "next/image";
import Disney from "../public/disney-banner.png";

export default function ActivityProfile() {
	return (
		<>
			<div className='flex justify-center'>
				<div className='relative w-7/12'>
					<Image
						src={Disney}
						alt='Landing'
						layout='responsive'
						className='rounded-b-xl'
					/>
					<div>
						<div className='absolute bottom-6 left-0 bg-white rounded-r-full text-black text-2xl py-1 pr-4 pl-[5%]'>
							DISNEYLAND
						</div>
						<div className='absolute bottom-6 right-[3%] bg-novo-lightpurple border-2 border-novo-purple text-novo-purple rounded-full px-3 py-1'>
							ADD ACTIVITY
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
