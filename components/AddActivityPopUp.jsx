import React from "react";
import Image from "next/image";
import AddSymbol from "../public/addSymbol.png";

const AddActivityPopUp = () => {
	return (
		<>
			<div className='relative flex justify-center items-center'>
				<button className='border border-novo-messagegray rounded-3xl aspect-square w-80 h-40 relative flex flex-col items-center justify-center'>
					<div className='flex justify-center flex-col items-center'>
						<div className='w-3/12'>
							<Image
								src={AddSymbol}
								alt='Landing'
								layout='responsive'
							/>
						</div>
						<span className='items-center text-novo-messagegray text-sm font-light mt-2'>
							Go to Activities Page to Add Activity
						</span>
					</div>
				</button>
			</div>
		</>
	);
};

export default AddActivityPopUp;
