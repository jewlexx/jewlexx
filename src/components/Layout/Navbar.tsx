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

	return (
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

			{user === undefined ? (
				<a href="/api/auth/login">Login</a>
			) : (
				<img
					src={user.picture}
					width={50}
					height={50}
					alt={'Logged in as ' + user.name}
					className={styles.userpfp}
				></img>
			)}
		</div>
	);
}
