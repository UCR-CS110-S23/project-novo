import { useState } from "react";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Disney from "../public/disneyland.png";

const MatchButtons = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className='flex space-x-3'>
			<div className='hover:bg-novo-lightpurple rounded-full text-5xl border-4 border-novo-purple text-novo-purple text-center p-2 pr-3  hover:-translate-y-1 duration-300'>
				<RxCross2 />
			</div>
			<button type='button' onClick={() => setShowModal(true)}>
				<div className='hover:bg-novo-darkpurple  hover:border-novo-darkpurple rounded-full text-5xl  border-4 border-novo-purple bg-novo-purple text-center text-white p-2 pr-3 hover:-translate-y-1 duration-300'>
					<BsCheckLg />
				</div>
			</button>
			{showModal ? (
				<>
					<div
						className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'
						onClick={() => setShowModal(false)}
					>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								<div className='grid grid-rows-3 place-items-center justify-center p-10'>
									<div>
										<h3 className='text-3xl text-center font-semibold '>
											Activity Selected
										</h3>

										<div className='text-sm text-novo-messagegray'>
											GO TO MESSAGES TO START CONVERSATION
											WITH VIVIANE
										</div>
									</div>
									<div className='h-20 w-64'>
										<Image
											src={Disney}
											alt='Landing'
											layout='responsive'
											className='rounded-xl'
										/>
									</div>
									<button className='bg-novo-purple hover:bg-novo-darkpurple w-40 mt-16 rounded-full text-white px-3 py-0.5 font-light text-md right-0'>
										Message
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed bg-gray-600 bg-opacity-50 inset-0'></div>
				</>
			) : null}
		</div>
	);
};

export default MatchButtons;
