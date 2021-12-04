import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Facebook from "../components/Facebook";
import styles from "../styles/Home.module.css";

import Typist from "react-typist";

import "react-typist/dist/Typist.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import GoogleAdSense from "../components/GoogleAdSense";
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

const year = new Date().getFullYear();

const getAge = (dateString: string) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};


const items = [
    {
        name: ".background",
        disabled: false,
        message: <small>More about my professional background</small>,
        url: "https://kim-avillanosa.gitbook.io/portfolio",
        title: "Portfolio",
        logo: "/portfolio_link.png",
    },
    {
        name: ".resume",
        disabled: false,
        message: (
            <small>
                Click to view my
                <span>
                    <strong> Resume</strong>
                </span>
            </small>
        ),
        url: "/files/Kim_Cyriel_Avillanosa.pdf",
        title: "Resume",
        logo: "/download.png",
    },
    {
        name: ".linkedIn",
        disabled: false,
        message: (
            <small>
                Connect with me via{" "}
                <span>
                    <strong>Linkedin</strong>
                </span>
            </small>
        ),
        url: "https://www.linkedin.com/in/kmavillanosa",
        title: "Linkedin",
        logo: "/linkedin.png",
    },
    {
        name: ".github",
        disabled: false,
        message: (
            <small>
                Follow me on{" "}
                <span>
                    <strong>Github</strong>
                </span>
            </small>
        ),
        url: "https://github.com/kmavillanosa",
        title: "Github",
        logo: "/github.png",
    },

];

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
                <img
                    className={styles.avatar}
                    src="/me.jpg"
                    alt="img"
                    width={200}
                    height={200}
                />

                <h5 className={styles.title}>
                    <p />
                    <Typist
                        cursor={{
                            show: true,
                            blink: true,
                            element: "|",
                            hideWhenDone: true,
                            hideWhenDoneDelay: 1000,
                        }}
                    >
                        <span>Hi, </span>
                        <Typist.Delay ms={500} />
                        <span>{"I'm  Kim."}</span>
                    </Typist>
                    <p />
                    <small className={styles.description}>
                        <Typist
                            cursor={{
                                show: true,
                                blink: true,
                                element: "|",
                                hideWhenDone: true,
                                hideWhenDoneDelay: 400,
                            }}
                        >
                            <span>Software Engineer from Palawan, </span>
                            <Typist.Delay ms={500} />
                            <span>Philippines.</span>
                        </Typist>
                    </small>
                </h5>

                <div className={styles.grid}>
                    {items.map((item, idx) => {
                        return (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.card}
                            >
                                <div className={item.name}>
                                    <div className={item.disabled === true ? styles.error : undefined}>
                                        <span className={styles.logo}>
                                            <img
                                                src={item.logo}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                            />
                                        </span>

                                        <h2>{item.title}</h2>
                                        {item.disabled === true ? "Soon" : item.message}
                                    </div>
                                </div>

                            </a>
                        );
                    })}
                </div>

                <div className={styles.about}>
                    <h1>About me</h1>
                    <p>
                        I am a Software Engineer with over {getAge("2016")} years experience
                        working for E-commerce and Financial Services industry.
                    </p>
                    <p>
                        You can send me an email at <strong>kmavillanosa@gmail.com</strong>
                    </p>
                </div>

                <div className={styles.qrbox}>
                    <img src="/qr.png" alt="scan me" width={100} height={100} />
                </div>

            </main>

            <footer className={styles.footer}>
                <div>
                    <small>Copyright © Kim Cyriel S. Avillanosa {year}</small>
                </div>
            </footer>
            <GoogleAnalytics />
            <GoogleAdSense />
            <Facebook id={102700588919929} />
        </div>

    );
};

export default Home;
