import Layout from '../components/Layout.js';
import Sidebar from '../components/Sidebar.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Sidebar />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
