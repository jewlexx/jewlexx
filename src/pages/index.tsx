import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

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
						web development
					</p>
				</section>
			</Layout>
		);
	}
}
