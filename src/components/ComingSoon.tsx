import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Soon.module.scss';

export default function ComingSoon({ date }: { date?: string }) {
	return (
		<div className={styles.bgimg}>
			<div className={styles.middle}>
				<h1>COMING SOON</h1>
				<hr />
				<p>{date || 'Date is also coming soon... Maybe'}</p>
			</div>
			<div className={styles.bottomleft}>
				<a className={styles.goBack} href='/'>
					<p>{<FontAwesomeIcon icon={faBackward} />} Go Back</p>
				</a>
			</div>
			<style jsx>{`
				* {
					user-select: none;
				}

				body,
				html {
					height: 100%;
					background: #000;
				}

				/* Style the <hr> element */
				hr {
					margin: auto;
					width: 40%;
				}
			`}</style>
		</div>
	);
}
