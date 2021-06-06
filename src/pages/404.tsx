import Head from 'next/head';
import styles from '../styles/error.module.scss';

export default function Error404() {
	return (
		<div className={styles.main}>
			<Head>
				<title>404: Page not found!</title>
			</Head>
			<h1>Apologies... this page doesn't exist!</h1>
			<p>Here, have a cat to make you feel better :)</p>
			<img
				src={encodeURI('https://cataas.com/cat/says/Sorry <3')}
				alt='Kitty'
			></img>
		</div>
	);
}
