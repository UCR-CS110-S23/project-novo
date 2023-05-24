import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const MatchButtons = () => {
	return (
		<div className='flex space-x-3'>
			<div className='hover:bg-novo-lightpurple rounded-full text-5xl border-4 border-novo-purple text-novo-purple text-center p-2 pr-3  hover:-translate-y-1 duration-300'>
				<RxCross2 />
			</div>
			<div className='hover:bg-novo-darkpurple hover:border-novo-darkpurple rounded-full text-5xl  border-4 border-novo-purple bg-novo-purple text-center text-white p-2 pr-3  hover:-translate-y-1 duration-300'>
				<BsCheckLg />
			</div>
		</div>
	);
};

export default MatchButtons;
