import React from 'react';
import Layout from '../components/Layout/_Main';
import { connectToDatabase } from '../util/mongodb';

export default function Main({ isConnected }) {
	return (
		<Layout>
			<div>This entire site is a work in progress...</div>
			{!isConnected ? (
				<div>
					Failed to connect to database. Parts of this website may not
					work properly
				</div>
			) : (
				<div>{null}</div>
			)}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	let isConnected;
	try {
		const { client } = await connectToDatabase();

		isConnected = client.isConnected();
	} catch (error) {
		isConnected = false;
		console.error(error);
	}

	return {
		props: { isConnected },
	};
}
