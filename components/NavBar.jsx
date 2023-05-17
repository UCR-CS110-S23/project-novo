import { React, useState } from "react";
import Image from "next/image";
import NOVO from "../public/NOVO.png";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { TbCircles } from "react-icons/tb";
import { RxExit } from "react-icons/rx";

function NavBar() {
	const [toggle, setToggle] = useState(0);
	return (
		<>
			<div className='flex flex-col justify-between  h-screen static bg-novo-purple w-7/12 rounded-r-xl'>
				<div className='flex flex-col items-center justify-start'>
					<div className='w-5/12 m-[20%]'>
						<Image
							src={NOVO}
							alt='Landing'
							layout='responsive'
							className=''
						/>
					</div>
					<div className='flex flex-col justify-start w-full space-y-2 '>
						<button
							onClick={() => setToggle(1)}
							className={`text-white flex w-full items-center py-2 px-4  space-x-2 font-light ${
								toggle === 1
									? "bg-novo-selectPurple text-white rounded-xl"
									: "bg-transparent"
							}`}
						>
							<RiCompassDiscoverLine />
							<div>Feed</div>
						</button>
						<button
							onClick={() => setToggle(2)}
							className={`text-white flex w-full items-center py-2 px-4  space-x-2 font-light ${
								toggle === 2
									? "bg-novo-selectPurple text-white rounded-xl"
									: "bg-transparent"
							}`}
						>
							<FiMessageSquare />
							<div>Messages</div>
						</button>
						<button
							onClick={() => setToggle(3)}
							className={`text-white flex w-full items-center py-2 px-4  space-x-2 font-light ${
								toggle === 3
									? "bg-novo-selectPurple text-white rounded-xl"
									: "bg-transparent"
							}`}
						>
							<TbCircles />
							<div>Activities</div>
						</button>
					</div>
				</div>
				<div className='flex justify-between m-4'>
					<button className='text-white text-2xl'>
						<MdPersonOutline />
					</button>
					<button className='text-white text-2xl'>
						<RxExit />
					</button>
				</div>
			</div>
		</>
	);
}

export default NavBar;

// onClick={() => setToggle(1)}
// 								class={`h-5 w-5 rounded-full appearance-none border border-white  ${
// 									toggle === 1
// 										? "bg-novo-purple text-white border rounded-full border-novo-purple"
// 										: "bg-transparent"
// 								}`}
