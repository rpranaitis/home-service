import styles from './AboutUs.module.scss';
import Team from '@/assets/team.png';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <header className={styles.aboutUsHeader}>
        <h1>About Us</h1>
      </header>
      <section className={styles.aboutUsContent}>
        <div className={styles.aboutUsText}>
          <h2>Our Story</h2>
          <p>
            Welcome to Home Service, your trusted partner for booking services efficiently and conveniently. Our platform was founded with
            the goal of bridging the gap between service providers and clients, offering a seamless and reliable experience for both
            parties.
          </p>
          <p>
            We believe in the power of technology to simplify daily tasks and improve the quality of life. Our dedicated team is committed
            to providing top-notch services and support to ensure your satisfaction.
          </p>
        </div>
        <div className={styles.aboutUsImage}>
          <img src={Team} alt="Our Team" />
        </div>
      </section>
      <section className={styles.ourMission}>
        <h2>Our Mission</h2>
        <p>
          At Home Service, our mission is to create a user-friendly platform that connects customers with the best service providers in
          their area. We strive to make booking services as easy and hassle-free as possible.
        </p>
      </section>
      <section className={styles.ourValues}>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction: We prioritize the needs and satisfaction of our customers.</li>
          <li>Reliability: We ensure reliable and trustworthy service providers.</li>
          <li>Innovation: We continuously improve our platform to meet the evolving needs of our users.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
