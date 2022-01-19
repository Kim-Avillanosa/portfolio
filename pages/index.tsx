import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Facebook from "../src/shared/components/Facebook";

import styles from "../styles/Home.module.css";

import "react-typist/dist/Typist.css";

import {
  Heading,
  Contacts,
  ServicesOffered,
  Footer,
  GoogleAnalytics,
  About,
  AppPage,
  AppHeader,
  AppLayout,
} from "@shared/components";

const Home: NextPage = () => {
  return (
    <AppPage title="Kim Avillanosa">
      <AppLayout>
        <div className={styles.container}>
          <main className={styles.main}>
            <Heading />
            <Contacts />
            <ServicesOffered />
            <About />
          </main>
          <Footer />
        </div>
      </AppLayout>
    </AppPage>
  );
};

export default Home;
