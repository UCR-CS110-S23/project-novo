// import clientPromise from "./mongodb";

// export async function getActivity() {
// 	const db = (await clientPromise).db(process.env.MONGODB_DB);

// 	const acts = await db
// 		.collection("activities")
// 		.find({ name: { $exists: true } })
// 		.toArray();

// 	return acts.map(post => {
// 		return {
// 			_id: post._id,
// 			name: post.name,
// 			description: post.description,
// 			url: post.url,
// 			address: post.address,
// 			reviews: post.reviews,
// 			rating: post.rating,
// 			image: post.image,
// 		};
// 	});
// }
