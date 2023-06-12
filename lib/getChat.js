import clientPromise from "./mongodb";

export async function getAllChats() {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	const messages = await db
		.collection("messages")
		.find({ user: { $exists: true } })
		.toArray();

	return messages.map(post => {
		return {
			user: post.user,
			message: post.message,
			room: post.room,
		};
	});
}
