import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const affirmations: string[] = (
		await axios.get(
			'https://raw.githubusercontent.com/jamesinaxx/jamesinaxx/public/affirmations.json'
		)
	).data.affirmations;

	res.status(200).json({
		affirmation:
			affirmations[Math.floor(Math.random() * affirmations.length)],
	});
}
