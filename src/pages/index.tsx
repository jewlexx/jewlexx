import Head from 'next/head';
import styles from '../styles/Soon.module.scss';

export default function Main() {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='Coming Soon! In the meantime, https://twitch.tv/jamesinaxx'
				/>
				<meta name='author' content='jamesinaxx' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<title>Coming Soon!</title>
			</Head>
			<div className={styles.bgimg}>
				<div className={styles.middle}>
					<h1>COMING SOON</h1>
					<hr className={styles.divider} />
					<p>{'Date is also coming soon... Maybe'}</p>
				</div>
			</div>
		</>
	);
}
