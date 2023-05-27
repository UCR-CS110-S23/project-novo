import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "/lib/mongodb.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			}),
		],
		adapter: MongoDBAdapter(clientPromise),
		// callbacks: {
		// 	async signIn({ user, account, profile }) {
		// 		if (account.provider === "google") {
		// 			user.name = {
		// 				first: String(profile.name.split(" ")[0]),
		// 				last: String(profile.name.split(" ")[1]),
		// 			};
		// 		}
		// 		return true;
		// 	},
		// 	async session({ session, user }) {
		// 		return {
		// 			...session,
		// 			user: {
		// 				...session.user,
		// 				uid: user.uid,
		// 				name: user.name,
		// 				photoURL: user.photoURL,
		// 				bio: user.bio,
		// 				age: user.age,
		// 			},
		// 		};
		// 	},
		// },
		// pages: {
		// 	signIn: "/feed",
		// },
		secret: process.env.JWT_SECRET,
	});
}
// export const authOptions = {
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 	],
// 	secret: process.env.JWT_SECRET,
// };

// export default NextAuth(authOptions);
