import { React } from "react";
import Image from "next/image";
import NOVO from "../public/NOVO.png";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { TbCircles } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { signOut } from "next-auth/react";

function NavBar() {
	return (
		<>
			<div className='flex flex-col justify-between w-full bg-novo-purple h-screen rounded-r-xl'>
				<div className='flex flex-col items-center justify-start'>
					<div className='w-5/12 m-[20%]'>
						<Image src={NOVO} alt='Landing' />
					</div>

					<div className='flex flex-col justify-start w-10/12 space-y-2'>
						<Link
							href='/feed'
							className='text-white flex w-full no-underline items-center py-2 px-4 space-x-2 font-light hover:bg-novo-hoverPurple hover:rounded-lg transition-colors duration-300'
						>
							<RiCompassDiscoverLine />
							<div>Feed</div>
						</Link>
						<Link
							href='/messagingChat'
							className='text-white flex w-full no-underline items-center py-2 px-4 space-x-2 font-light mt-2 hover:bg-novo-hoverPurple hover:rounded-lg transition-colors duration-300'
						>
							<FiMessageSquare />
							<div>Messages</div>
						</Link>
						<Link
							href='/activityFeed'
							className='text-white flex w-full items-center  no-underline py-2 px-4 space-x-2 font-light mt-2 hover:bg-novo-hoverPurple hover:rounded-lg transition-colors duration-300'
						>
							<TbCircles />
							<div>Activities</div>
						</Link>
					</div>
				</div>
				<div className='flex justify-between m-4'>
					<Link href='/editProfile' className='text-white text-2xl'>
						<MdPersonOutline />
					</Link>
					<button
						className='text-white text-2xl'
						onClick={() =>
							signOut({
								callbackUrl: "/",
							})
						}
					>
						<RxExit />
					</button>
				</div>
			</div>
		</>
	);
}

export default NavBar;
