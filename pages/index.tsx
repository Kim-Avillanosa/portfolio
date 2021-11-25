import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Facebook from "../components/Facebook";
import styles from "../styles/Home.module.css";
const year = new Date().getFullYear();



const Home: NextPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);




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
          Kim Cyriel S. Avillanosa
        </h5>
        <p className={styles.description}>
          <code className={styles.code}>Software Engineer</code>
        </p>

        <small>kmavillanosa@gmail.com</small>

        <div className={styles.grid}>
          <a
            href="https://kim-avillanosa.gitbook.io/portfolio"
            target="_blank" rel="noreferrer"
            className={styles.card}
          >
            <span className={styles.logo}>
              <Image
                src="/portfolio_link.png"
                alt="Portfolio"
                width={40}
                height={40}
              />
            </span>
            <h2>Portfolio</h2>
            <small>Find more about me</small>
          </a>
          <a
            href="https://www.linkedin.com/in/kmavillanosa"
            target="_blank" rel="noreferrer"
            className={styles.card}
          >
            <span className={styles.logo}>
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                width={40}
                height={40}
              />
            </span>
            <h2>Linkedin</h2>
            <small>Connect with me via <span><strong>Linkedin</strong></span></small>
          </a>
          <a
            href="https://web.facebook.com/kmavillanosa999"
            target="_blank" rel="noreferrer"
            className={styles.card}
          >
            <span className={styles.logo}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </span>
            <h2>Facebook</h2>
            <small>Connect with me via <span><strong>Facebook</strong></span></small>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        <small>Copyright © Kim Cyriel S. Avillanosa {year}</small>
        <div className={styles.qrbox}>
          <Image
            src="/qr.png"
            alt="Portfolio"
            width={80}
            height={80}
          />
        </div>
      </footer>

      <Facebook />
    </div>
  );
};

export default Home;
