import clientPromise from "@/lib/mongodb";

export default async function addReview(req, res) {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	const newPost = req.body;

	await db.collection("comments").insertOne(newPost);
	// date: new Date().toISOString(),
	// uid: session?.user?.uid,
	// image: session?.user?.image,
	// name: session?.user?.name,
	// });

	res.status(200).json({ success: true, message: "Post added successfully" });
}
