import "../src/app/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} /> {/* ✅ Dynamic Page Content */}
        </Layout>
    );
}

export default MyApp;
