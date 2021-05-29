import Navbar from './Navbar';
import Head from './Head';

export default function Layout({ children }): JSX.Element {
	return (
		<div>
			<Head />

			<Navbar />

			{children}
		</div>
	);
}
