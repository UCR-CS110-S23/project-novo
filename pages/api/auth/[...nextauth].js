import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "/lib/mongodb.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	// pages: {
	// 	signIn: "/feed",
	// 	newUser: "/profileCreation",
	// },
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		// CredentialsProvider({
		// 	name: "Credentials",
		// 	async authorize(credentials) {
		// 		const db = (await clientPromise).db(process.env.MONGODB_DB);
		// 		const existingUser = await db
		// 			.collection("users")
		// 			.findOne({ email: credentials.email });

		// 		// Checks if email exists
		// 		if (!existingUser) {
		// 			console.log("Authentication: Email not found");
		// 			return null;
		// 		}

		// 		if (credentials.password != existingUser.password) {
		// 			console.log("Authentication: The password is wrong");
		// 			return null;
		// 		}

		// 		return {
		// 			name: existingUser.name,
		// 			email: existingUser.email,
		// 		};
		// 	},
		// }),
	],
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
	// secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
// adapter: MongoDBAdapter(clientPromise),

// pages: {
// 	signIn: "/feed",
// },
// 		secret: process.env.JWT_SECRET,
// 		// session: {
// 		// 	strategy: "jwt",
// 		// 	maxAge: 30 * 24 * 60 * 60, // 30 Days
// 		// },
// 	});
// }
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
