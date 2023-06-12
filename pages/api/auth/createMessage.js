import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const newMessage = {
			...req.body,
			timestamp: new Date().toISOString(),
		};

		const db = (await clientPromise).db(process.env.MONGODB_DB);

		// stores a new message
		await db.collection("messages").insertOne(newMessage);

		res.status(201).json({
			success: true,
			message: "Message posted successfuly",
		});
	} else {
		res.status(400).json({ success: false, message: "Invalid method" });
	}
}
