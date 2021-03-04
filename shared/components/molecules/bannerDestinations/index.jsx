import styles from './index.module.scss';

function BannerDestinations({ title, description, image, alt }) {
  return (
    <div className={`w-100 position-relative ${styles.banner}`}>
      <div className={`0 position-absolute w-100 h-100 ${styles.shadow}`} />
      <img
        src={image}
        className="l0 position-absolute fit d-md-block w-100 h-100"
        alt={alt}
      />
      <div className="banner-content l0 position-absolute w-100 h-100">
        {title && (
          <div className={`h-100 ${styles.align} ${styles.align}`}>
            <h2 className={`${styles.title} fs-48 font-weight-bold text-white text-left`}>{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export { BannerDestinations };
