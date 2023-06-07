import React from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import Image from "next/image.js";

const MatchModal = () => {
	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
				<div className=' w-auto my-6  mx-auto max-w-3xl'>
					<div className='border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='flex flex-col place-items-center p-6'>
							<div className='text-2xl w-full flex justify-end'>
								<button onClick={() => setShowModal(false)}>
									<GrClose />
								</button>
							</div>
							<div className='flex flex-row'>
								<div className='text-4xl font-medium'>
									Activity Selected
								</div>
							</div>
							<div className='text-sm text-novo-messagegray mb-4 mt-1 font-light'>
								GO TO MESSAGES TO START CONVERSATION WITH
								VIVIANE
							</div>
							<div className='mx-24'>
								<div className='relative w-96 flex justify-center items-center'>
									<Image
										src={ActivitySelected}
										alt='Landing'
										layout='responsive'
										className='rounded-xl'
									/>
									<div className='absolute bg-white rounded-full text-black text-md px-4 py-2'>
										DISNEYLAND
									</div>
								</div>
							</div>
							<div>
								<Link href='/messaging'>
									<button className='bg-novo-purple hover:bg-novo-darkpurple w-48 rounded-full text-white mt-8 px-3 py-0.5 mb-4 font-light text-l'>
										Message
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='fixed bg-gray-600 bg-opacity-50 inset-0'></div>
		</>
	);
};

export default MatchModal;
