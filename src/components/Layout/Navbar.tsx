import React, { useState, useEffect } from 'react';
import styles from '../../styles/layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faTwitch,
	faYoutube,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {
	faTree,
	faSignOutAlt,
	faSignInAlt,
	faHome,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const FAI = ({
	icon,
	colour = '#fff',
}: {
	icon: IconDefinition;
	colour?: string;
}) => {
	return <FontAwesomeIcon icon={icon} style={{ color: colour }} />;
};

export default function NavbarComp() {
	const [active, setActive] = useState('home');

	useEffect(() => {
		setActive(window.location.pathname);
	});

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Navbar.Brand href='https://twitch.tv/jamesinaxx'>
				<img
					src='/images/profile.jpg'
					width={50}
					height={50}
					alt='jamesinaxx pfp'
					className={styles.brandImage}
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto' activeKey={active}>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/stream/plan'>Stream Plan</Nav.Link>
					<NavDropdown title='My Links' id='social-links-dropdown'>
						<NavDropdown.Item
							href='https://twitch.tv/jamesinaxx'
							target='_blank'
						>
							<FAI icon={faTwitch} colour='#6441a5' /> Twitch
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://github.com/jamesinaxx'
							target='_blank'
						>
							<FAI icon={faGithub} colour='#000' /> GitHub
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://www.youtube.com/channel/UCwKytulnX600TzqeJAqbO6w'
							target='_blank'
						>
							<FAI icon={faYoutube} colour='#c4302b ' /> YouTube
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://twitter.com/jamesinaxx'
							target='_blank'
						>
							<FAI icon={faTwitter} colour='#1DA1F2' /> Twitter
						</NavDropdown.Item>
						<NavDropdown.Item
							href='https://www.tiktok.com/@jamesinaxx?lang=en'
							target='_blank'
						>
							<FAI icon={faTiktok} colour='#69c9d0' /> TikTok
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							href='https://linktr.ee/jamesinaxx'
							target='_blank'
						>
							<FAI icon={faTree} colour='rgb(0, 200, 0)' />{' '}
							Linktree
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				{user === undefined ? (
					<Nav.Link
						href='/api/auth/login'
						className={styles.loginLink}
					>
						Login <FAI icon={faSignInAlt} colour='#fff' />
					</Nav.Link>
				) : (
					<NavDropdown
						title={
							<img
								src={user.picture}
								width={50}
								height={50}
								alt={'Logged in as ' + user.name}
								className={styles.userpfp}
							></img>
						}
						alignRight
						id='user-dropdown'
						className='mr-sm-2'
					>
						<NavDropdown.Item
							href={'https://twitch.tv/' + user.name}
							target='_blank'
						>
							Logged in as {user.name}
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/api/auth/logout'>
							<FAI icon={faSignOutAlt} colour='#000' /> Logout
						</NavDropdown.Item>
					</NavDropdown>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}
