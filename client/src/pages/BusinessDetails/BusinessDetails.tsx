import Button from '../../components/Button/Button';
import CategoryBadge from '../../components/CategoryBadge/CategoryBadge';
import styles from './BusinessDetails.module.scss';
import BusinessCardSmall from '../../components/BusinessCardSmall/BusinessCardSmall';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoShareOutline, IoPersonOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { SlNote } from 'react-icons/sl';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { useBusiness, useBusinesses } from '../../hooks/business';
import { capitalizeFirstLetter } from '../../utils/strings';
import { ROUTES } from '../../router/constants';

const BusinessDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return 'Can not find business id!';
  }

  const { data: businessData } = useBusiness(id);
  const { data: businessesData } = useBusinesses();

  if (!businessData) {
    return 'Something went wrong while getting business info!';
  }

  const similarBusiness = businessesData?.filter((item) => item.category === businessData.category && item._id !== id).splice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.mainInfoBlock}>
          <div className={styles.avatar}>
            <img src={businessData.imageUrls[0]} alt={businessData.name} />
          </div>
          <div className={styles.info}>
            <CategoryBadge>{capitalizeFirstLetter(businessData.category)}</CategoryBadge>
            <h2 className={styles.title}>{businessData.name}</h2>
            <div className={styles.detail}>
              <div className={styles.icon}>
                <CiLocationOn />
              </div>
              <span className={styles.text}>{businessData.address}</span>
            </div>
            <div className={styles.detail}>
              <div className={styles.icon}>
                <CiMail />
              </div>
              <span className={styles.text}>{businessData.email}</span>
            </div>
          </div>
        </div>
        <div className={styles.otherInfoBlock}>
          <Button className={styles.shareButton}>
            <IoShareOutline />
          </Button>
          <div className={styles.contactPerson}>
            <IoPersonOutline />
            <span className={styles.text}>{businessData.contactPerson}</span>
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
            <p>{businessData.about}</p>
          </div>
          <div className={styles.galleryBlock}>
            <h3 className={styles.title}>Gallery</h3>
            <div className={styles.galleryItems}>
              {businessData.imageUrls.map((item, index) => (
                <div className={styles.galleryItem} key={index}>
                  <img src={item} alt={businessData.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Button className={styles.bookButton}>
            <SlNote />
            <span className={styles.text}>Book Appointment</span>
          </Button>
          {similarBusiness && similarBusiness.length > 0 && (
            <div className={styles.similarBusiness}>
              <h4 className={styles.smallTitle}>Similar Business</h4>
              <div className={styles.businessCards}>
                {similarBusiness?.map((item) => (
                  <div key={item._id} onClick={() => navigate(generatePath(ROUTES.BUSINESS_DETAILS, { id: item._id }))}>
                    <BusinessCardSmall
                      id={item._id}
                      name={item.name}
                      address={item.address}
                      contactPerson={item.contactPerson}
                      imageUrls={item.imageUrls}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
