import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Burger from "../components/Burger";
export default function Home() {
  return (
    <Layout>
      <div className="home-page">
        <main>
              <Burger />
        </main>
        <style jsx>{`
        `}</style>
      </div>
    </Layout>
  );
}
