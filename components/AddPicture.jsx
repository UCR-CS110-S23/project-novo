import React from "react";
import Image from "next/image";
import AddSymbol from "../public/addSymbol.png";

const AddPicture = () => {
	return (
		<>
			<button className='border border-[#858585] rounded-3xl aspect-square flex justify-center items-center flex-col w-3/12'>
				<div className='w-2/12'>
					<Image src={AddSymbol} alt='Landing' layout='responsive' />
				</div>
			</button>
		</>
	);
};

export default AddPicture;
