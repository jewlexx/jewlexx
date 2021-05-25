import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// const affirmations = fs.readFileSync(path.join(__dirname, '..', '..'));

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	fs.writeFileSync(
		'C:\\1dev\\jamesinaxx\\src\\pages\\api' + '\\test.json',
		'{ "testing": "test" }'
	);
	res.status(200).json({ name: __dirname });
}
