import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar"
import Footer from "./Footer"
const name = "MicrometreUK";
export const siteTitle = "data capture forms";

export default function Layout({ children, home }) {
  return (
        <div className="section">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff"/>
        <meta
          name="description"
          content="Professional Painters and Decorators in Elmbridge and surrounding areas."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="Elmbridge Painting and Decorating Services Ltd"
          content={siteTitle}
        />
        <title>{siteTitle}</title>
      </Head>
          <Navbar />
      <main>{children}</main>

          <style jsx>{`
        .main {
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }
        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }
        html {
          font: 100%/1.5 system-ui;
        }
        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }
        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }
        h1,
        p {
          margin-bottom: 1.5rem;
        }
        code {
          font-family: 'Menlo';
        }
      `}</style>
    </div>
  );
}
