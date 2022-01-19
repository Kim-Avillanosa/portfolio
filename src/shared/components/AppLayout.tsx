import { ReactNode } from "react";
import Header from "./AppHeader";

import styles from "styles/Home.module.css";
import { Facebook, Footer, GoogleAnalytics } from ".";
interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <GoogleAnalytics />
      <Facebook id={102700588919929} />
    </>
  );
};

export default AppLayout;
