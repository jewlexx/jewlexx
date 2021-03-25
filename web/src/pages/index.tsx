import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils/utils.module.scss";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="bio">
          I am a learning developer currently learning front-end web development
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list + " projects"}>
          {allPostsData.map(({ id, date, title, contentHtml }) => (
            <Link href={`/projects/${id}`} key={id}>
              <li className={utilStyles.listItem + " card"}>
                <div className="text-overlay">
                  <a className="card-title">{title}</a>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
