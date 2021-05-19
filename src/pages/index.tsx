import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils/utils.module.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<section className={utilStyles.headingMd}>
					<p className="bio">
						I am a learning developer currently learning front-end
						web development - This is a WIP but I'm not working on
						it...
					</p>
				</section>
			</Layout>
		);
	}
}
