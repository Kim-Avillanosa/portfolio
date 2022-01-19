import styles from "../../../../styles/Home.module.css";

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

const About = () => {
  return (
    <>
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
    </>
  );
};
export default About;
