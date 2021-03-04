import styles from './index.module.scss';
import {BannerDestinations} from '@/components/index';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function DestinationOverview({ title, picture, content }) {
  return (
    <>
    <BannerDestinations image={`${PUBLIC_API}${picture}`} title={`${title} Tours`} /> 

    <section className="container">
      <div className="col-12 fs-18 lh-29 py-5"
          dangerouslySetInnerHTML={{ __html: content }}
      />  
      </section>
      </>
  );
}

export { DestinationOverview };
