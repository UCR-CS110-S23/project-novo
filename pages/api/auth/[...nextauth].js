import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "/lib/mongodb.js";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		pages: {
			// signIn: "/",
			//	signOut: "/",
			newUser: "/profileCreation",
		},
		providers: [
			CredentialsProvider({
				name: "Credentials",
				credentials: {
					email: { label: "Email", type: "text" },
					password: { label: "Password", type: "password" },
				},
				authorize: async credentials => {
					try {
						const client = MongoClient(clientPromise);
						const db = client.db();

						const existingUser = await db
							.collection("users")
							.findOne({ email: credentials.email });

						if (existingUser) {
							if (
								existingUser.password === credentials.password
							) {
								return Promise.resolve(existingUser);
							} else {
								client.close();
								return null;
							}
						} else {
							const newUser = {
								email: credentials.email,
								password: credentials.password,
							};

							client.close();

							return Promise.resolve(newUser);
						}
					} catch {
						console.error("Authentication Error", error);
						return Promise.reject(
							new Error("/login?error=Authentication error")
						);
					}
				},
			}),
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			}),
		],
		// adapter: MongoDBAdapter(clientPromise),
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
		// session: {
		// 	strategy: "jwt",
		// 	maxAge: 30 * 24 * 60 * 60, // 30 Days
		// },
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
