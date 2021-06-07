import profileImage from '../../styles/layout.module.scss';
import styles from '../../styles/stream.module.scss';
import { Nav, Navbar } from 'react-bootstrap';

import Image from 'next/image';

export default function Plan() {
	return (
		<main>
			<Nav
				className={
					styles.sidebar +
					' bg-dark d-flex flex-column flex-shrink-0 p-3 text-white'
				}
				activeKey='schedule'
			>
				<Navbar.Brand href='/'>
					<span className={styles.sidebarHeadText}>Stream Plan</span>
				</Navbar.Brand>
				<hr />
				<Nav.Item className={styles.navItem}>
					<Nav.Link eventKey='schedule'>Schedule</Nav.Link>
				</Nav.Item>
				<Nav.Item className={styles.navItem}>
					<Nav.Link href='/' eventKey='home'>
						Home
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</main>
	);
}
