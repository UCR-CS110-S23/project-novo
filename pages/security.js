import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

const SecurityQuestionsPage = () => {
	const { data: session } = useSession();

	const [responses, setResponses] = useState({
		maidenName: "",
		teacherName: "",
		movieName: "",
	});
	const [tries, setTries] = useState(3);
	const [errors, setErrors] = useState("");

	const handleVerify = () => {
		if (
			session.user.maidenName === responses.maidenName &&
			session.user.teacherName === responses.teacherName &&
			session.user.movieName === responses.movieName
		) {
			console.log("SHOUDLA PUSHED");
			Router.push("/feed");
		}

		setTries(tries - 1);

		if (tries === 0) {
			Router.push("/");
			return;
		}

		if (
			session.user.maidenName !== responses.maidenName ||
			session.user.teacherName !== responses.teacherName ||
			session.user.movieName !== responses.movieName
		) {
			console.log("SHOUDLA NOT PUSHED");
			setErrors("One or more security questions incorrect!");
			return;
		}
	};

	// console.log(session.user);

	return (
		<div className='flex justify-center items-center flex-col h-screen'>
			<p className='text-novo-darkgray text-6xl mb-12'>
				Security Questions
			</p>
			<div className='flex justify-center items-center flex-col w-full'>
				<div className='flex justify-center flex-col items-center space-y-3 w-5/12'>
					<div className='text-novo-darkgray'>
						Mother&apos;s Maiden Name
					</div>
					<input
						type='text'
						className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
						value={responses.maidenName}
						onChange={e =>
							setResponses({
								...responses,
								maidenName: e.target.value,
							})
						}
					/>
				</div>
				<div className='flex justify-center flex-col items-center space-y-3 w-5/12 mt-12'>
					<div className='text-novo-darkgray'>
						First Grade Teacher&apos;s Name
					</div>
					<input
						type='text'
						className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
						value={responses.teacherName}
						onChange={e =>
							setResponses({
								...responses,
								teacherName: e.target.value,
							})
						}
					/>
				</div>
				<div className='flex justify-center flex-col items-center space-y-3 w-5/12 mt-12'>
					<div className='text-novo-darkgray'>Favorite Movie</div>
					<input
						type='text'
						className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
						value={responses.movieName}
						onChange={e =>
							setResponses({
								...responses,
								movieName: e.target.value,
							})
						}
					/>
				</div>
				<button
					onClick={handleVerify}
					className='text-base mt-10 text-novo-purple bg-novo-lightpurple border-2 border-novo-purple rounded-full px-5 py-1  duration-300 hover:bg-novo-purple hover:text-white p-1'
				>
					VERIFY ACCOUNT
				</button>
				{errors && <p className='text-red-500 m-2'>{errors}</p>}
			</div>
		</div>
	);
};

export default SecurityQuestionsPage;
