import clientPromise from "./mongodb";

export async function getAllComments() {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	const posts = await db
		.collection("comments")
		.find({ text: { $exists: true } })
		.toArray();

	return posts.map(post => {
		return {
			_id: post._id,
			text: post.text,
			rating: post.rating,
			actID: post.actID,
			name: post.name,
			picture: post.picture,
			time: post.time,
		};
	});
}
