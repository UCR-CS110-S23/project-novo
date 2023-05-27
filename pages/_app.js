import "@/styles/globals.css";
import { Outfit } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
/* eslint-disable new-cap */
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps, session }) {
	return (
		<SessionProvider session={session}>
			<main className={`${outfit.className}`}>
				{/* <Layout> */}
				<Component {...pageProps} />
				{/* </Layout> */}
			</main>
		</SessionProvider>
	);
}
