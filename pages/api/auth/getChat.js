import clientPromise from "./mongodb";

export async function getAllChats() {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	const messages = await db
		.collection("messages")
		.find({ text: { $exists: true } })
		.toArray();

	return messages.map(post => {
		return {
			_id: post._id,
			text: post.text,
			rating: post.rating,
			actID: post.actID,
		};
	});
}
