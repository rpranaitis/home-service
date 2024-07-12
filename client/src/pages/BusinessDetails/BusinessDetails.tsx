import Button from '../../components/Button/Button';
import CategoryBadge from '../../components/CategoryBadge/CategoryBadge';
import styles from './BusinessDetails.module.scss';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoShareOutline, IoPersonOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { SlNote } from 'react-icons/sl';
import BusinessCardSmall from '../../components/BusinessCardSmall/BusinessCardSmall';

const BusinessDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.mainInfoBlock}>
          <div className={styles.avatar}>
            <img
              src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
              alt="Business"
            />
          </div>
          <div className={styles.info}>
            <CategoryBadge>Cleaning</CategoryBadge>
            <h2 className={styles.title}>House Cleaning</h2>
            <div className={styles.detail}>
              <div className={styles.icon}>
                <CiLocationOn />
              </div>
              <span className={styles.text}>Tilto g. 77, Grinkiškis, Radviliškio r. sav.</span>
            </div>
            <div className={styles.detail}>
              <div className={styles.icon}>
                <CiMail />
              </div>
              <span className={styles.text}>rolandaspranaitis@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.otherInfoBlock}>
          <Button className={styles.shareButton}>
            <IoShareOutline />
          </Button>
          <div className={styles.contactPerson}>
            <IoPersonOutline />
            <span className={styles.text}>Jenny Wilson</span>
          </div>
          <div className={styles.workingHours}>
            <GoClock />
            <span className={styles.text}>Available 8:00 AM to 10:00 PM</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.leftSide}>
          <div className={styles.descriptionBlock}>
            <h3 className={styles.title}>Description</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum doloremque explicabo non soluta, repellendus, labore ex magnam
              ullam nostrum molestias maxime necessitatibus suscipit autem facere ratione accusantium voluptates unde alias consectetur
              fugit ut et impedit aliquam! Officia soluta velit, amet impedit perspiciatis recusandae sapiente dicta necessitatibus
              adipisci. Nobis, sunt aliquam.
            </p>
          </div>
          <div className={styles.galleryBlock}>
            <h3 className={styles.title}>Gallery</h3>
            <div className={styles.galleryItems}>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
              <div className={styles.galleryItem}>
                <img
                  src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
                  alt="Business"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Button className={styles.bookButton}>
            <SlNote />
            <span className={styles.text}>Book Appointment</span>
          </Button>
          <h4 className={styles.smallTitle}>Similar Business</h4>
          <BusinessCardSmall
            id="abc123"
            name="House Cleaning"
            address="Tilto g. 77, Grinkiškis, Radviliškio r. sav."
            contactPerson="Rolandas Pranaitis"
            imageUrls={['https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg']}
          />
          <BusinessCardSmall
            id="abc123"
            name="House Cleaning"
            address="Tilto g. 77, Grinkiškis, Radviliškio r. sav."
            contactPerson="Rolandas Pranaitis"
            imageUrls={['https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg']}
          />
          <BusinessCardSmall
            id="abc123"
            name="House Cleaning"
            address="Tilto g. 77, Grinkiškis, Radviliškio r. sav."
            contactPerson="Rolandas Pranaitis"
            imageUrls={['https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg']}
          />
          <BusinessCardSmall
            id="abc123"
            name="House Cleaning"
            address="Tilto g. 77, Grinkiškis, Radviliškio r. sav."
            contactPerson="Rolandas Pranaitis"
            imageUrls={['https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg']}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
