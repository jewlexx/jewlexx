import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils/utils.module.scss';
import Link from 'next/link';
import Date from '../components/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import { getSortedPostsData } from '../lib/posts';
import { getSortedCodeData } from '../lib/code';
import React from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCodeData = getSortedCodeData();
  return {
    props: {
      allPostsData,
      allCodeData,
    },
  };
}

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
            I am a learning developer currently learning front-end web
            development
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Projects</h2>
          <ul className={utilStyles.list + ' projects'}>
            {this.props['allPostsData'].map(
              ({ id, date, title, contentHtml }) => (
                <Link href={`/projects/${id}`} key={id}>
                  <li className={utilStyles.listItem + ' card'}>
                    <div className="text-overlay">
                      <a className="card-title">{title}</a>
                      <br />
                      <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small>
                    </div>
                  </li>
                </Link>
              )
            )}
          </ul>
          <h2 className={utilStyles.headingLg}>Code</h2>
          <h3 className={utilStyles.headingS}>
            {'Codewars - Javascript'}{' '}
            <FontAwesomeIcon
              width="16px"
              icon={faEye}
              id="codewars-javascript-toggle"
              onClick={() => {
                $('#codewars-javascript').toggle(500);
                if ($('#codewars-javascript').is(':visible')) {
                  $('#codewars-javascript-toggle').removeClass('fa-eye');
                  $('#codewars-javascript-toggle').addClass('fa-eye-slash');
                } else {
                  $('#codewars-javascript-toggle').removeClass('fa-eye-slash');
                  $('#codewars-javascript-toggle').addClass('fa-eye');
                }
              }}></FontAwesomeIcon>
          </h3>
          <div hidden={true} id="codewars-javascript">
            <ul className={utilStyles.list + ' code-projects'}>
              {this.props['allCodeData'].map(({ id, title, fileType }) => (
                <Link href={`/code/${id}`} key={id}>
                  <li className={utilStyles.listItem + ' code-file'}>
                    <div className="text-overlay">
                      <a className="code-file-title">{title}</a>
                      <br />
                      <small>{fileType}</small>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}
