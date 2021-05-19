import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllCodeIds, getCodeData } from '../../lib/code';
import Date from '../../components/date';
import utilStyles from '../../styles/utils/utils.module.scss';

export default function Code({ codeData }) {
  return (
    // This error can be ignored as "home" is only required once to define the base, which is given in "../index.tsx"
    <Layout home={false}>
      <Head>
        <title>{codeData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX}>{codeData.title}</h1>
        <p>
          The code is as follows. It does not currently work well as far as
          readability but that is changing soon!
        </p>
        <div
          className={utilStyles.lightText}
          dangerouslySetInnerHTML={{ __html: codeData.content }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCodeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const codeData = await getCodeData(params.id);
  return {
    props: {
      codeData,
    },
  };
}
