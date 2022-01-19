import styles from "../../../../styles/Home.module.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <small>Copyright © Kim Cyriel S. Avillanosa {year}</small>
      </div>
    </footer>
  );
};

export default Footer;
