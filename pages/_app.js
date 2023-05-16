import "@/styles/globals.css";
import { Outfit } from "@next/font/google";

/* eslint-disable new-cap */
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps }) {
	return (
		<main className={`${outfit.className}`}>
			{/* <Layout> */}
			<Component {...pageProps} />
			{/* </Layout> */}
		</main>
	);
}
