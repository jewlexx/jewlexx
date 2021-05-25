import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const affirmations: string[] = (
			await axios.get(
				'https://raw.githubusercontent.com/jamesinaxx/jamesinaxx/public/affirmations.json'
			)
		).data.affirmations;

		res.status(200).json({
			affirmation:
				affirmations[Math.floor(Math.random() * affirmations.length)],
		});
	} else {
		res.status(405).json({
			error: 'We do not support ANY requests other then GET as of yet',
		});
	}
}
