import styles from "../styles/Home.module.css";

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

const Contacts = () => {
  return (
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
              <div
                className={item.disabled === true ? styles.error : undefined}
              >
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
  );
};

export default Contacts;
