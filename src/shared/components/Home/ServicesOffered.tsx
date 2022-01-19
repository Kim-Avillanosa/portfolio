import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../../styles/Home.module.css";

interface ServicesOfferedProps {}

interface Slide {
  src: string;
  label: string;
}

const slides: Slide[] = [
  {
    src: "/dev_web.png",
    label: "Web Development",
  },
  {
    src: "/dev_mobile.png",
    label: "Mobile Development",
  },
  {
    src: "/dev_desktop.png",
    label: "Desktop Applications Development",
  },
  {
    src: "/dev_api.png",
    label: "Web Service Development",
  },
];

const ServicesOffered: React.FC<ServicesOfferedProps> = () => {
  return (
    <>
      <h2>Services offered</h2>
      <div className={styles.slideContainer}>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          labels={{
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "",
          }}
        >
          {slides.map((item, idx) => {
            return (
              <div key={idx} className={styles.slide}>
                <img src={item.src} />
                <h3>{item.label}</h3>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ServicesOffered;
