import "@/styles/globals.css";
import { Outfit } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
/* eslint-disable new-cap */
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function App({ Component, pageProps, session }) {
	return (
		<main className={`${outfit.className}`}>
			<SessionProvider session={pageProps.session}>
				{/* <Layout> */}
				<Component {...pageProps} />
				{/* </Layout> */}
			</SessionProvider>
		</main>
	);
}
