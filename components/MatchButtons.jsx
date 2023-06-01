import { useState } from "react";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

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
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-3xl font-semibold'>
										Modal Title
									</h3>
									<button></button>
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
