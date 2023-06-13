import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "/lib/mongodb.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { isPasswordValid } from "@/lib/hash";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),

		CredentialsProvider({
			name: "Credentials",
			async authorize(credentials) {
				const db = (await clientPromise).db(process.env.MONGODB_DB);
				const user = await db
					.collection("users")
					.findOne({ email: credentials.email });

				// Checks if email exists
				if (!user) {
					console.log("Authentication: Email not found");
					return null;
				}

				const validPassword = await isPasswordValid(
					credentials.password,
					user.password
				);

				if (!validPassword) {
					console.log("Password not found!");
					return null;
				}

				return {
					uid: user._id,
					name: user.name,
					email: user.email,
					age: user.age,
					pronoun: user.pronoun,
					gender: user.gender,
					bio: user.bio,
					interests: user.interests,
					location: user.location,
					preference: user.preference,
					maidenName: user.maidenName,
					teacherName: user.teacherName,
					movieName: user.movieName,
				};
			},
		}),
	],

	secret: process.env.JWT_SECRET,
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async signIn({ account, profile }) {
			if (account.provider === "google") {
				user._id = account.providerAccountId;
				user.name = {
					first: String(profile.name.split(" ")[0]),
					last: String(profile.name.split(" ")[1]),
				};
				user.provider = account.provider;
			}
			return true;
		},

		async jwt({ token, user, session, trigger }) {
			if (user) {
				token.user = user;
			}

			if (trigger === "update" && session?.name) {
				token.user.name = session.name;
			}

			return token;
		},
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
	pages: {
		signIn: "/feed",
		// newUser: "/profileCreation",
	},
};

export default NextAuth(authOptions);
