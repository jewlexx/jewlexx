import { useState, useEffect } from 'react';
import styles from '../../styles/layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
	faTree,
	faSignOutAlt,
	faHome,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';

const FAI = (props: { icon: any; colour: string }) => {
	return (
		<FontAwesomeIcon
			icon={props.icon}
			className={styles.faIcon}
			style={{ color: props.colour }}
		/>
	);
};

export default function NavbarComp() {
	const [active, setActive] = useState('home');

	useEffect(() => {
		setActive(window.location.pathname);
	});

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	console.log(active);

	const redesign = (
		<div className={styles.navbar}>
			<img
				src='/images/profile.jpg'
				width={50}
				height={50}
				className={styles.brandImage}
			></img>
			<a
				className={`${styles.navitem} ${
					active === '/' ? styles.active : ''
				}`}
				href='/'
			>
				<FAI icon={faHome} colour='#fff' />
			</a>
			<a
				className={`${styles.navitem} ${
					active === '/stream/plan' ? styles.active : ''
				}`}
				href='/stream/plan'
			>
				<FAI icon={faCalendarAlt} colour='#fff' />
			</a>

			<img
				src={user.picture}
				width={50}
				height={50}
				alt={'Logged in as ' + user.name}
				className={styles.userpfp}
			></img>
		</div>
	);

	return redesign;

	return (
		<Navbar bg='dark' variant='dark' className='navbar-expand-lg'>
			<Navbar.Brand>
				<Nav className='mr-auto'>
					{user !== undefined ? (
						<NavDropdown
							title={
								<Image
									src={user.picture}
									width={50}
									height={50}
									alt={'Logged in as ' + user.name}
									className={styles.profileImage}
								></Image>
							}
							id='userDropdown'
						>
							<NavDropdown.Item
								className={styles.navbarItem}
								href={'https://twitch.tv/' + user.name}
							>
								<FAI icon={faTwitch} colour='#9146FF' />{' '}
								<p>Logged in as {user.name}</p>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item
								href='/api/auth/logout'
								className={styles.navbarItem}
							>
								<FAI icon={faSignOutAlt} colour='#000' />{' '}
								<p>Logout</p>
							</NavDropdown.Item>
						</NavDropdown>
					) : (
						<a style={{ color: '#aaa' }} href='/api/auth/login'>
							Login
						</a>
					)}
				</Nav>
			</Navbar.Brand>

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/' active={active === '/'}>
						Home
					</Nav.Link>

					<Nav.Link
						href='/stream/plan'
						active={active === '/stream/plan'}
					>
						Stream Plan
					</Nav.Link>

					<NavDropdown title='Social links' id='basic-nav-dropdown'>
						<NavDropdown.Item
							href='https://github.com/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faGithub} colour='black' /> <p>GitHub</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://twitter.com/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTwitter} colour='#1DA1F2' />{' '}
							<p>Twitter</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://twitch.tv/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTwitch} colour='#9146FF' />{' '}
							<p>Twitch</p>
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://www.youtube.com/channel/UCwKytulnX600TzqeJAqbO6w'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faYoutube} colour='#FF0000' />{' '}
							<p>YouTube</p>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							href='https://linktr.ee/jamesinaxx'
							target='_blank'
							className={styles.navbarItem}
						>
							<FAI icon={faTree} colour='green' /> <p>Linktree</p>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
