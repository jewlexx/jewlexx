import Navbar from './Layout/Navbar';

export default function Layout({ children }): JSX.Element {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
