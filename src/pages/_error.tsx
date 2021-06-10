import Head from 'next/head';
import styles from '../styles/error.module.scss';

function Error({ statusCode }) {
	return (
		<div className={styles.main}>
			<Head>
				<title>Error: {statusCode}</title>
			</Head>
			<h1>
				Apologies... this page returned a{' '}
				{statusCode ? statusCode : 'client'} error!
			</h1>
			<p>
				You can try googling it or{' '}
				<a href='https://github.com/jamesinaxx/jamesinaxx/issues'>
					let me know
				</a>
			</p>
			<p>In the meantime, have a cat to make you feel better :)</p>
			<img
				src={encodeURI('https://cataas.com/cat/says/Sorry <3')}
				alt='Kitty'
			></img>
		</div>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
