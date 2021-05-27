import Head from 'next/head';

export default function HeadComp() {
	return (
		<Head>
			<link
				rel='shortcut icon'
				type='image/jpg'
				href='/images/profile.jpg'
			/>
			<meta charSet='UTF-8' />
			<meta
				name='description'
				content='My developer portfolio. A central place for all my code and projects'
			/>
			<meta
				name='keywords'
				content='Portfolio, Developer, Coding, HTML, CSS, JavaScript, C++, C#, Java'
			/>
			<meta name='author' content='jamesinaxx' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<title>jamesinaxx</title>
		</Head>
	);
}
