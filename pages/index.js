import WelcomeText from "../components/WelcomeLanding.jsx";

export default function Home() {
	return (
		<div className="w-full h-screen bg-no-repeat bg-cover bg-[url('../public/landing-back.png')]">
			<div>
				<WelcomeText />
			</div>
		</div>
	);
}
