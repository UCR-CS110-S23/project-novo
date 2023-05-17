import "@/styles/globals.css";
import { Outfit } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

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
