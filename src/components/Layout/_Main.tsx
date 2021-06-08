import Navbar from './Navbar';
import Head from './Head';

export default function Layout({
	children,
	title = 'jamesinaxx',
}): JSX.Element {
	return (
		<div>
			<Head title={title} />

			<Navbar />

			{children}
		</div>
	);
}
