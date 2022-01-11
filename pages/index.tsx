import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Facebook from "../components/Facebook";
import styles from "../styles/Home.module.css";

import "react-typist/dist/Typist.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import GoogleAdSense from "../components/GoogleAdSense";
import ServicesOffered from "../components/ServicesOffered";
import Contacts from "../components/Contacts";
import About from "../components/About";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Kim Avillanosa</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading />
        <Contacts />
        <ServicesOffered />
        <About />
      </main>
      <Footer />
      <GoogleAnalytics />
      <GoogleAdSense />
      <Facebook id={102700588919929} />
    </div>
  );
};

export default Home;
