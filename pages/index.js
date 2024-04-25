import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shop The Arena</title>
        <link rel="icon" href="/STA-logo.png" />
      </Head>

      <main>
        <Header title="Shop The Arena is currently down for maintenance" />
        <p className="description">
          <div>Our team is working to get it back up running ASAP.</div>
          In the meantime, you can contact us on contact@shopthearena.com if you
          need any assistance.
        </p>
      </main>

      <Footer />
    </div>
  );
}
