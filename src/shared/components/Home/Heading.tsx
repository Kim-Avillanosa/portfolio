import Link from "next/link";
import { Button } from "react-bootstrap";
import Typist from "react-typist";
import styles from "../../../../styles/Home.module.css";

const Heading = () => {
  return (
    <>
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
          <span>Software Engineer from Palawan, Philippines.</span>
        </small>
      </h5>
      <Link href={`/contact`}>
        <Button className="mb-5" variant="dark" size="lg">
          Send me an email
        </Button>
      </Link>
    </>
  );
};

export default Heading;
