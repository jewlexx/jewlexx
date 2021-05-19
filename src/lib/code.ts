import fs from 'fs';
import path from 'path';

const codeDir = path.join(process.cwd(), './code/javascripts/codewars');

export function getAllCodeIds() {
	const fileNames = fs.readdirSync(codeDir);

	console.log(fileNames);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.js$/, ''),
			},
		};
	});
}

export async function getCodeData(id) {
	const fullpath = path.join(codeDir, `${id}.js`);
	const content = fs.readFileSync(fullpath, 'utf8');

	return { id, title: id, fullpath, content };
}

export function getSortedCodeData() {
	// Get file names under /code
	const fileNames = fs.readdirSync(codeDir);
	const allCodeData = fileNames.map((fileName) => {
		// Remove ".js" from file name to get id
		const id = fileName.replace(/\.js$/, '');

		// Read js file as string
		const fullPath = path.join(codeDir, fileName);
		const content = fs.readFileSync(fullPath, 'utf8');

		return {
			id,
			title: id,
			fullPath,
			content,
			fileType: fileName.split('.')[1],
		};
	});
	// Sort code by date
	return allCodeData;
}
