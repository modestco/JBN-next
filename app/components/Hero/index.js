import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function Hero() {
  return (
    <Layout>
      <Head></Head>
      <Image
        src="/courtjester.png"
        width={500}
        height={500}
        alt="courtjester logo JBN"
      />
      <h5>WELCOME TO</h5>
    </Layout>
  );
}
