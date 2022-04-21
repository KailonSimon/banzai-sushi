import Head from 'next/head'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {

  return (
    <>
      <Head>
        <title>Banzai Sushi</title>
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <Hero />
        <ContactInfo />
      </div>
    </>
  )
}