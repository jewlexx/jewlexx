import Image from 'next/image';
import styles from '../../styles/stream.module.scss';
import Layout from '../../components/Layout/_Main';
import { connectToDatabase } from '../../util/mongodb';
import dayjs from 'dayjs';
import { useUser } from '@auth0/nextjs-auth0';

export default function Plan({ streams }: { streams: any[] }) {
	const today = streams.filter(
		stream => stream.date.split(' ')[0] === dayjs().format('MM-DD-YYYY')
	);

	const other = streams.filter(
		stream => stream.date.split(' ')[0] !== dayjs().format('MM-DD-YYYY')
	);

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if ((user || { name: null }).name !== 'jamesinaxx')
		return (
			<div className='bgimg'>
				<div className='middle'>
					<h1>COMING SOON</h1>
					<hr />
					<p>Date is also coming soon... Maybe</p>
				</div>
				<div className='bottomleft'>
					<p>jamesinaxx</p>
				</div>
				<style jsx>{`
					body,
					html {
						height: 100%;
						background: #000;
					}

					/* Position text in the top-left corner */
					.topleft {
						position: absolute;
						top: 0;
						left: 16px;
					}

					/* Position text in the bottom-left corner */
					.bottomleft {
						position: absolute;
						bottom: 0;
						left: 16px;
					}

					/* Position text in the middle */
					.middle {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						text-align: center;
					}

					/* Style the <hr> element */
					hr {
						margin: auto;
						width: 40%;
					}
				`}</style>
			</div>
		);

	return (
		<Layout>
			<h1 style={{ marginLeft: '16px' }}>Streams Today</h1>
			{today.map((stream, i) => (
				<div key={i} className={styles.streamCard}>
					<Image
						src={`https://static-cdn.jtvnw.net/ttv-boxart/${stream.game}.jpg?1622287396`}
						width={62.5}
						height={87}
						alt={stream.game}
						className={styles.gameImage}
					></Image>
					<div className={styles.streamInfo}>
						<h1>{stream.description}</h1>
						<h3>{dayjs(stream.date).format('LLL')}</h3>
					</div>
				</div>
			))}
			<h1 style={{ marginLeft: '16px' }}>Other</h1>
			{other.map((stream, i) => (
				<div key={i} className={styles.streamCard}>
					<Image
						src={`https://static-cdn.jtvnw.net/ttv-boxart/${stream.game}.jpg?1622287396`}
						width={62.5}
						height={87}
						alt={stream.game}
						className={styles.gameImage}
					></Image>
					<div className={styles.streamInfo}>
						<h1>{stream.description}</h1>
						<h3>{dayjs(stream.date).format('LLL')}</h3>
					</div>
				</div>
			))}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();

	await db.collection('streams').deleteMany({});
	await db.collection('streams').insertOne({
		game: 'Minecraft',
		description: 'Test',
		date: dayjs().format('MM-DD-YYYY HH:MM'),
		endTime: null,
	});

	const streams = await db.collection('streams').find({}).toArray();

	return {
		props: { streams: JSON.parse(JSON.stringify(streams)) },
	};
}
