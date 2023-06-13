import WelcomeText from "../components/WelcomeLanding.jsx";
const Home = () => {
	return (
		<div className="w-full h-screen bg-no-repeat bg-cover bg-[url('../public/landing-back.png')]">
			<div>
				<WelcomeText />
			</div>
		</div>
	);
};

export default Home;
