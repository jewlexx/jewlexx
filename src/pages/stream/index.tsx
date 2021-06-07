import styles from '../../styles/stream.module.scss';

import TwitchEmbed from '../../components/Stream/TwitchEmbed';

export default function Stream() {
	return (
		<div className={styles.main}>
			<div className={styles.info}>
				<h1 className={styles.title}>
					I stream weekly over on my{' '}
					<a href='https://twitch.tv/jamesinaxx' target='_blank'>
						Twitch
					</a>
					!
				</h1>{' '}
				<br />
				<p>
					For a more detailed description of what I am doing in the
					upcoming week, check out my <a href='/stream/plan'>plan</a>
				</p>
				<TwitchEmbed channel='jamesinaxx' />
			</div>
		</div>
	);
}
