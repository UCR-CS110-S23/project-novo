import clientPromise from "./mongodb";

export async function getAllPostData() {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	const posts = await db
		.collection("users")
		.find({ email: { $exists: true } })
		.toArray();

	return posts.map(post => {
		return {
			_id: post._id,
			name: post.name,
			email: post.email,
			password: post.password,
			age: post.age,
			pronoun: post.pronoun,
			gender: post.gender,
			preference: post.preference,
			location: post.location,
			bio: post.bio,
			interests: post.interests,
			activities: post.activities,
			image: post.image,
		};
	});
	return posts;
}
