import WelcomeText from "../components/WelcomeLanding.jsx";
// import { getSession } from "next-auth/react";

const Home = () => {
	return (
		<div className="w-full h-screen bg-no-repeat bg-cover bg-[url('../public/landing-back.png')]">
			<div>
				<WelcomeText />
			</div>
		</div>
	);
};

// export const getServerSideProps = async context => {
// 	const session = await getSession({ req: context.req });

// 	if (session) {
// 		return {
// 			redirect: {
// 				destination: "/feed",
// 				permanent: false,
// 			},
// 		};
// 	}

// 	return {
// 		props: { session },
// 	};
// };

export default Home;
