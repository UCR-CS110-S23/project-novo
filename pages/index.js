// import Profile from "../components/Profile.jsx";
import WelcomeText from "../components/WelcomeText.jsx";

export default function Home() {
	return (
		<div class="w-full h-screen bg-no-repeat bg-cover bg-[url('../public/landing-back.png')]">
			<div>
				{/* Hello! */}
				{/* <Profile /> */}
				<WelcomeText />
			</div>
		</div>
	);
}
