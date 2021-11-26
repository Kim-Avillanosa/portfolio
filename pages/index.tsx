import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Facebook from "../components/Facebook";
import styles from "../styles/Home.module.css";

import Typist from "react-typist";

import "react-typist/dist/Typist.css"


const year = new Date().getFullYear();

const items = [{
  message: <small>See my background</small>,
  url: "https://kim-avillanosa.gitbook.io/portfolio",
  title: "Portfolio",
  logo: "/portfolio_link.png"
},
{
  message: <small>Connect with me via <span><strong>Linkedin</strong></span></small>,
  url: "https://www.linkedin.com/in/kmavillanosa",
  title: "Linkedin",
  logo: "/linkedin.png"
}
  , {
  message: <small>Follow me on <span><strong>Github</strong></span></small>,
  url: "https://github.com/kmavillanosa",
  title: "Github",
  logo: "/github.png"
}]



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


        <Image className={styles.avatar}
          src="/me.jpg"
          alt="img"
          width={200}
          height={200}
        />

        <h5 className={styles.title}>

          <Typist cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 400,
          }} >
            Kim Cyriel S. Avillanosa
          </Typist>

          <p className={styles.description}>
            <Typist cursor={{
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: false,
              hideWhenDoneDelay: 400,
            }} >
              <Typist.Delay ms={2000} />
              <span >Software </span>

              <Typist.Delay ms={500} />
              <span>Engineer</span>
            </Typist>
          </p>
        </h5>

        <div className={styles.grid}>
          {items.map((item, idx) => {
            return <a
              href={item.url}
              target="_blank" rel="noreferrer"
              className={styles.card}
            >
              <span className={styles.logo}>
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </span>
              <h2>{item.title}</h2>
              {item.message}
            </a>
          })}
        </div>

        <div className={styles.qrbox}>
          <Image
            src="/qr.png"
            alt="scan me"
            width={60}
            height={60}
          />
        </div>

      </main>

      <footer className={styles.footer}>
        <div>
          <small>Copyright © Kim Cyriel S. Avillanosa {year}</small>
        </div>

      </footer>

      <Facebook />
    </div>
  );
};

export default Home;
