import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useRouter } from "next/router";
import CreateActivity from "./CreateActivity";

const activites1 = [
	{
		name: "DISNEYLAND",
		location: "ANAHEIM, CA",
	},
	{
		name: "LEGOLAND",
		location: "CARLSBAD, CA",
	},
	{
		name: "THE BROAD",
		location: "LOS ANGELES, CA",
	},
];

const activites2 = [
	{
		name: "LITTLE ITALY",
		location: "SAN DIEGO, CA",
	},
	{
		name: "OC FAIR",
		location: "ORANGE COUNTY, CA",
	},
	{
		name: "OLVERA STREET",
		location: "LOS ANGELES, CA",
	},
];

const Questions = ({ counter }) => {
	// const router = useRouter();

	const [tag, setTag] = useState("");
	const [name, setName] = useState("");
	const [bio, setBio] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [age, setAge] = useState("");
	const [pronoun, setPronoun] = useState("");
	const [gender, setGender] = useState("");
	const [preference, setPreference] = useState("");
	const [location, setLocation] = useState("");
	const [file, setFile] = useState(null);

	const [activities, setActivities] = useState([]);

	const [interests, setInterests] = useState([]);

	const [data, setData] = useState({
		name: "",
		age: 0.0,
		pronoun: "",
		gender: "",
		bio: "",
		preference: "",
		location: "",
		interests: new Set(),
		image: null,
	});

	const handleTagSubmit = e => {
		e.preventDefault();
		if (data.interests.size < 6) {
			setData({ ...data, interests: new Set([...data.interests, tag]) });
			setTag("");
			setInterests(Array.from(new Set([...data.interests, tag])));
		}
	};

	const handleTagRemove = interest => {
		const interests = data.interests;
		interests.delete(interest);
		setData({ ...data, interests: interests });
	};

	const createProfile = async e => {
		e.preventDefault();
		const image = await readFileAsBase64(file);

		const newUser = {
			name,
			email,
			password,
			age,
			pronoun,
			gender,
			preference,
			location,
			bio,
			interests,
			activities,
			image,
		};

		try {
			const response = await fetch("/api/auth/createProfile", {
				method: "POST",
				body: JSON.stringify(newUser),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			if (data.userExists) {
				// validateInputs();
				console.log("user exists");
			} else {
				setName("");
				setEmail("");
				setPassword("");
				setAge(0.0);
				setPronoun("");
				setGender("");
				setPreference("");
				setLocation("");
				setBio("");
				setInterests(new Set());
				setActivities([]);
				setFile(null);

				console.log("user made successfully");
				await signIn("credentials", {
					redirect: true,
					email,
					password,
					callbackUrl: "/feed",
				});
			}
		} catch (e) {
			console.log(e);
		}
	};

	const readFileAsBase64 = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	};

	return (
		<>
			<div className='w-full flex justify-center'>
				{counter === 0 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR NAME
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
					</>
				)}
				{counter === 1 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR EMAIL
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</>
				)}
				{counter === 2 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR PASSWORD
							</div>
							<input
								type='password'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</>
				)}

				{counter === 3 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR AGE
							</div>
							<input
								type='number'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={age}
								onChange={e => setAge(e.target.value)}
							/>
						</div>
					</>
				)}

				{counter === 4 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								HOW DO YOU IDENTIFY?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => {
										setGender("man");
									}}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										gender === "man"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									MAN
								</button>
								<button
									onClick={() => {
										setGender("woman");
									}}
									className={`text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										gender === "woman"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									WOMAN
								</button>
								<button
									onClick={() => {
										setGender("non-binary");
									}}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										gender === "non-binary"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									NON-BINARY
								</button>
							</div>
						</div>
					</>
				)}
				{counter === 5 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								WHAT ARE YOUR PRONOUNS?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setPronoun("he/him")}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										pronoun === "he/him"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									HE/HIM
								</button>
								<button
									onClick={() => setPronoun("she/her")}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										pronoun === "she/her"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									SHE/HER
								</button>
								<button
									onClick={() => setPronoun("they/them")}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										pronoun === "they/them"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									THEY/THEM
								</button>
							</div>
						</div>
					</>
				)}
				{counter === 6 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR LOCATION
							</div>
							<input
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={location}
								onChange={e => setLocation(e.target.value)}
							/>
						</div>
					</>
				)}
				{counter === 7 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray translate-y-0.5'>
								WHO DO YOU WANT TO SEE?
							</div>
							<div className='space-x-4 text-md w-full flex justify-between py-4'>
								<button
									onClick={() => setPreference("men")}
									className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
										preference === "men"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									MEN
								</button>
								<button
									onClick={() => setPreference("women")}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										preference === "women"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									WOMEN
								</button>
								<button
									onClick={() => setPreference("both")}
									className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
										preference === "both"
											? "bg-novo-purple text-white border rounded-full border-novo-purple"
											: "bg-transparent"
									}`}
								>
									BOTH
								</button>
							</div>
						</div>
					</>
				)}
				{counter === 8 && (
					<>
						<div className='flex justify-center flex-col items-center w-5/12 '>
							<div className='text-novo-darkgray -translate-y-3.5 mb-[2%]'>
								ENTER 6 INTERESTS
							</div>
							<div className='w-full'>
								<div className='flex flex-col items-center w-full'>
									<div className='w-1/4 '>
										<form onSubmit={handleTagSubmit}>
											<input
												className='text-black pl-3 py-1 text-sm font-light  rounded-lg border-solid border border-beatdrop-grey bg-beatdrop-lightgrey w-fit'
												type='text'
												value={tag}
												onChange={e =>
													setTag(e.target.value)
												}
												placeholder='ADD TAG'
												name='first'
												autoComplete='off'
												maxLength={20}
											/>
										</form>
									</div>
									<div className=' w-full flex justify-center'>
										<Row className=' w-fit m-0 py-3'>
											{[...data.interests].map(
												(interest, index) => (
													<Col
														key={index}
														className='!max-w-fit p-1'
													>
														<div className=''>
															<button className='text-novo-purple border-novo-purple px-3 bg-novo-lightpurple py-1 rounded-full flex justify-center items-center'>
																{interest}
																<FaTimes
																	className='hover:text-red-500 ml-2'
																	onClick={() =>
																		handleTagRemove(
																			interest
																		)
																	}
																/>
															</button>
														</div>
													</Col>
												)
											)}
										</Row>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
				{counter === 9 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ADD A PHOTO
							</div>
							<input
								onChange={e => setFile(e.target.files[0])}
								type='file'
								className='border-dashed border-2 border-novo-lightgray w-full h-full text-xl font-light py-7 px-3 text-center text-[#B9B9B9] focus:outline-none rounded-xl'
							/>
						</div>
					</>
				)}
				{counter === 10 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
							<div className='text-novo-darkgray'>
								ENTER YOUR BIO
							</div>
							<textarea
								type='text'
								className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
								value={bio}
								onChange={e => setBio(e.target.value)}
							/>
						</div>
					</>
				)}
				{counter === 11 && (
					<>
						<div className='flex justify-center flex-col items-center space-y-10 w-5/12 '>
							<div className='text-novo-darkgray'>
								SELECT 3 ACTIVITIES
							</div>
							<div className='grid cols-2 space-x-4'>
								<div className='col-span-1 space-y-3 '>
									{activites1.map((activity, index) => (
										<CreateActivity
											key={index}
											activity={activity.name}
											location={activity.location}
											activities={activities}
											setActivities={setActivities}
										/>
									))}
								</div>
								<div className='col-start-2 space-y-3'>
									{activites2.map((activity, index) => (
										<CreateActivity
											key={index}
											activity={activity.name}
											location={activity.location}
											activities={activities}
											setActivities={setActivities}
										/>
									))}
								</div>
							</div>

							{activities.length < 3 ? (
								<button className='text-base mt-10 text-novo-lightgray border-2 border-novo-lightgray rounded-full px-5 py-1  duration-300p-1'>
									CREATE PROFILE
								</button>
							) : (
								<button
									onClick={createProfile}
									className='text-base mt-10 text-novo-purple bg-novo-lightpurple border-2 border-novo-purple rounded-full px-5 py-1  duration-300 hover:bg-novo-purple hover:text-white p-1'
								>
									CREATE PROFILE
								</button>
							)}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Questions;
