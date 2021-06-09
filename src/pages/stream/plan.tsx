import styles from '../../styles/stream.module.scss';
import Layout from '../../components/Layout/_Main';
import { connectToDatabase } from '../../util/mongodb';
import dayjs from 'dayjs';

export default function Plan({ streams }: { streams: any[] }) {
	return (
		<Layout>
			{streams.map((stream, i) => (
				<ul key={i}>
					<h1>{stream.description}</h1>
					<h2>{stream.game}</h2>
					<h3>{dayjs(stream.date).format('LLL')}</h3>
				</ul>
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
