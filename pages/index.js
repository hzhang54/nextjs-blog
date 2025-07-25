import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( { allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, I'm Hui.  I'm a financial engineer and a self-taught web developer.  You can contact me on twitter.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* Replace {date} with this */}
                <Date dateString={date} />
              </small>
            </li>
            // Note: You can also use <Link legacyBehavior href=...><a>...</a></Link> if you need to support older versions of Next.js
            // See https://nextjs.org/docs/api-reference/next/link#if-the-child-is-an-anchor-tag
            // Note: You can also use <Link href={`/posts/${id}`}            
          ))}
        </ul>
      </section>      
    </Layout>
  );
}