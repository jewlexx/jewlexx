import styles from '../styles/Soon.module.scss';

export default function ComingSoon({ date }: { date?: string }) {
	return (
		<div className={styles.bgimg}>
			<div className={styles.middle}>
				<h1>COMING SOON</h1>
				<hr className={styles.divider} />
				<p>{date || 'Date is also coming soon... Maybe'}</p>
			</div>
		</div>
	);
}
