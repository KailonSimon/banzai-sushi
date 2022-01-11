import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Banzai Sushi</title>
      </Head>
      <Hero />
    </div>
  )
}