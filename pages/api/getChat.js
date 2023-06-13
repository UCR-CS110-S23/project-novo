import clientPromise from "@/lib/mongodb";

export default async function getAllChats(req, res) {
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	try {
		const messages = await db
			.collection("messages")
			.find({ user: { $exists: true } })
			.toArray();
		res.status(200).json(messages);
	} catch (error) {
		console.error("Failed to get messages", error);
		res.status(500).json({ message: "Failed to get messages" });
	}
}
