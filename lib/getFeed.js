import clientPromise from "./mongodb";

// export async function getPostData(tid) {
// 	const db = (await clientPromise).db(process.env.MONGODB_DB);

// 	const post = await db
// 		.collection("users")
// 		.find({ tid: { $eq: tid } })
// 		.toArray();

// 	console.log("post", post);

// 	return JSON.stringify(post);
// }

// export default async function handler(req, res) {
// 	const db = (await clientPromise).db(process.env.MONGODB_DB);
// 	const data = await db.find({}).toArray();

// 	console.log("data", data);
// 	res.status(200).json(data);
// }

export async function getAllPostData() {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	// console.log("DEEEBEEE: ", db);
	const posts = await db
		.collection("users")
		.find({ email: { $exists: true } })
		.toArray();

	// const data = JSON.parse(JSON.stringify(posts));

	// console.log("DATA: ", posts);
	// const data = JSON.parse(posts);

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
		};
	});
	return posts;
}
