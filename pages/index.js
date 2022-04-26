import Head from 'next/head'
import ContactInfo from '../components/ContactInfo'
import Hero from '../components/Hero'

export default function Home() {

  return (
    <>
      <Head>
        <title>Banzai Sushi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width user-scalable=no" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <Hero />
        <ContactInfo />
      </div>
    </>
  )
}