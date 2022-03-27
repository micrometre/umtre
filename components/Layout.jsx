import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
const name = "MicrometreUK";
export const siteTitle = "data capture forms";

export default function Layout({ children, home }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
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

      <Footer />
      <style jsx>{`
        .main {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }
      `}</style>
    </div>
  );
}
