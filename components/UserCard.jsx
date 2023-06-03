import React from "react";
import Image from "next/image";
import Viviane from "../public/viviane.png";
import { GrLocation } from "react-icons/gr";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const interests = [
	{
		interest: "ALTERNATIVE POP",
	},
	{
		interest: "POP",
	},
	{
		interest: "POP",
	},
	{
		interest: "POP",
	},
	{
		interest: "POP",
	},
	{
		interest: "ALTERNATIVE POP",
	},
];

const UserCard = () => {
	return (
		<>
			<div className='grid rows-2'>
				<Image
					src={Viviane}
					alt='Landing'
					layout='responsive'
					className='rounded-t-3xl'
				/>
				<div className='border border-novo-lightgray rounded-b-3xl space-y-4 '>
					<div className='flex justify-between items-center '>
						<div className='text-4xl font-medium pt-4 pl-4'>
							Viviane, 22
						</div>
						<div className='mt-4 flex items-center text-sm bg-novo-lightgray py-1 pl-5 rounded-l-full pr-10'>
							<span className='pr-1.5'>
								<GrLocation />
							</span>
							RIVERSIDE, CA
						</div>
					</div>
					<div className='text-novo-purple text-sm px-4'>
						<div className=''>
							<Row className='flex items-start'>
								{interests.map((entry, index) => (
									<Col
										key={index}
										className='bg-novo-lightpurple text-novo-purple text-xs rounded-full px-2 mx-1 py-1 whitespace-nowrap !max-w-fit'
									>
										{entry.interest}
									</Col>
								))}

								{/* {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))} */}
							</Row>
						</div>
					</div>
					<div className='font-light text-sm px-4 pb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam.
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
