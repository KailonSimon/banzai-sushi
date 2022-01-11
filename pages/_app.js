import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { CartWrapper } from '../components/CartContext';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
