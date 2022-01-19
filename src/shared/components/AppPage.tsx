import Head from "next/head";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

interface AppPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const AppPage: React.FC<AppPageProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-Regular.ttf"
          as="font"
          crossOrigin=""
        />

        <title>{title}</title>
        <meta defaultValue={description ?? "Page is built on next js"} />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AppPage;
