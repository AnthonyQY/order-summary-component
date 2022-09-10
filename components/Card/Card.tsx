import MusicIcon from "./icon-music.svg";
import Illustration from "./illustration-hero.svg";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={Illustration.src}
        alt="Happy dancing with music."
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Order Summary</h1>
        <p className={styles.description}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.info}>
          <img
            className={styles.icon__music}
            src={MusicIcon.src}
            alt="Music icon."
          />
          <div className={styles.plan}>
            <h1 className={styles.type}>Annual Plan</h1>
            <p className={styles.price}>$59.99/year</p>
          </div>
          <a className={styles.button__change} href="#">
            Change
          </a>
        </div>
        <button className={styles.button__pay}>Proceed to Payment</button>
        <button className={styles.button__cancel}>Cancel Order</button>
      </div>
    </div>
  );
}
