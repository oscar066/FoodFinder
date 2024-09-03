import "../styles/layout.css";
import "../../../global.css";

import type { AppProps } from "next/app";
import Layout from ".";

export default function Appp({ Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
};