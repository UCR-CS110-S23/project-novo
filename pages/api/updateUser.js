// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
	console.log(req.body);
	const db = (await clientPromise).db(process.env.MONGODB_DB);

	await db.collection("users").updateOne(
		{ email: req.body.email },
		{
			$set: { ...req.body },
			$currentDate: { lastModified: true },
		}
	);
	res.status(200).json();
}
