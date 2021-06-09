import Image from 'next/image';
import styles from '../../styles/stream.module.scss';
import Layout from '../../components/Layout/_Main';
import { connectToDatabase } from '../../util/mongodb';
import dayjs from 'dayjs';

export default function Plan({ streams }: { streams: any[] }) {
	const today = streams.filter(
		stream => stream.date.split(' ')[0] === dayjs().format('MM-DD-YYYY')
	);

	const other = streams.filter(
		stream => stream.date.split(' ')[0] !== dayjs().format('MM-DD-YYYY')
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
		date: '06-09-2021 10:06',
		endTime: null,
	});

	const streams = await db.collection('streams').find({}).toArray();

	return {
		props: { streams: JSON.parse(JSON.stringify(streams)) },
	};
}
