import styles from '../../styles/layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const FAI = (props: { icon: any; colour: string }) => {
	return (
		<FontAwesomeIcon
			icon={props.icon}
			className={styles.faIcon}
			style={{ color: props.colour }}
		/>
	);
};

export default function Navigation({}) {
	return (
		<Navbar bg='dark' variant='dark' className='navbar-expand-lg'>
			<Navbar.Brand href='#'>
				<img
					src='/images/profile.jpg'
					width='50px'
					className={styles.profileImage}></img>
			</Navbar.Brand>

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>

					<NavDropdown title='Social links' id='basic-nav-dropdown'>
						<NavDropdown.Item
							href='#action/3.1'
							className={styles.navbarItem}>
							<FAI icon={faGithub} colour='black' /> <p>GitHub</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='#action/3.2'
							className={styles.navbarItem}>
							<FAI icon={faTwitter} colour='#1DA1F2' />{' '}
							<p>Twitter</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='#action/3.3'
							className={styles.navbarItem}>
							<FAI icon={faTwitch} colour='#9146FF' />{' '}
							<p>Twitch</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='#action/3.4'
							className={styles.navbarItem}>
							<FAI icon={faYoutube} colour='#FF0000' />{' '}
							<p>YouTube</p>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							href='#action/3.5'
							className={styles.navbarItem}>
							<FAI icon={faTree} colour='green' /> <p>Linktree</p>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
