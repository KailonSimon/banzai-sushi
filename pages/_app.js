import { MantineProvider } from '@mantine/core';
import { theme } from '../styles/mantineTheme';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Provider as ReduxProvider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../src/redux/store';


function MyApp({ Component, pageProps }) {

  return (
    <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </MantineProvider>
  )
}

export default MyApp
