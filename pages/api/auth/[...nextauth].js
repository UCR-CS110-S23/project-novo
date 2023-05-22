import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "/lib/mongodb.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		adapter: MongoDBAdapter({
			db: (await clientPromise).db(process.env.MONGODB_DB),
		}),
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			}),
		],
		callbacks: {
			async signIn({ user, account, profile }) {
				if (account.provider === "google") {
					user.name = {
						first: String(profile.name.split(" ")[0]),
						last: String(profile.name.split(" ")[1]),
					};
				}
				return true;
			},
			async session({ session, user }) {
				session.user.uid = user.uid;
				session.user.name = user.name;
				session.user.photoURL = user.photoURL;
				session.user.bio = user.bio;
				session.user.age = user.age;

				return session;
			},
		},
		pages: {
			returningUser: "/feed",
		},
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
