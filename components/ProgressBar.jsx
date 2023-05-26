import React from "react";

const ProgressBar = ({ width }) => {
	return (
		<div className='w-full'>
			{width === 0 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[11%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 1 && (
				<div className=' flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='duration-300 w-[22%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 2 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[33%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 3 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[44%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 4 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[55%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 5 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[66%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 6 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[77%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 7 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[88%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 8 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[100%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProgressBar;
