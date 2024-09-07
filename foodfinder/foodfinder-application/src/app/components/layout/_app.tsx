import "../styles/layout.css";
import "../../../global.css";

import type { AppProps } from "next/app";
import Layout from ".";
import { SessionProvider } from "next-auth/react";

export default function Appp({ 
    Component, pageProps: { session, ...pageProps }}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </SessionProvider>
    );
};