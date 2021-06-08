import React from 'react';
import Layout from '../components/Layout/_Main';
import { connectToDatabase } from '../util/mongodb';

export default function Main({ isConnected }) {
	return (
		<>
			{isConnected ? (
				<Layout>
					<div>This entire site is a work in progress...</div>
				</Layout>
			) : (
				<div>Failed to connect to database</div>
			)}
		</>
	);
}

export async function getServerSideProps(context) {
	const { client } = await connectToDatabase();

	const isConnected = await client.isConnected();

	return {
		props: { isConnected },
	};
}
