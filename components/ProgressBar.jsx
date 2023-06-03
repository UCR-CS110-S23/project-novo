import React from "react";

const ProgressBar = ({ width }) => {
	return (
		<div className='w-full'>
			{width === 0 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[8%]'>
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
						<div className='duration-300 w-[16%]'>
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
						<div className='w-[24%]'>
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
						<div className='w-[32%]'>
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
						<div className='w-[40%]'>
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
						<div className='w-[48%]'>
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
						<div className='w-[58%]'>
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
						<div className='w-[64%]'>
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
						<div className='w-[75%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 9 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[83%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 10 && (
				<div className='flex justify-center bg-novo-gray items-center w-full rounded-full'>
					<div className='flex justify-start w-full'>
						<div className='w-[91%]'>
							<div className="bg-[url('../public/progress.svg')] bg-no-repeat text-xs bg-cover w-full rounded-full text-transparent">
								aa
							</div>
						</div>
					</div>
				</div>
			)}
			{width === 11 && (
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
