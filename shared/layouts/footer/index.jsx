import Link from 'next/link';

import { Icon } from '@/components/index';
import Advisor from '@/icons/advisor.svg';
import Facebook from '@/icons/facebook.svg';
import Instagram from '@/icons/instagram.svg';
import Linkedin from '@/icons/linkedin.svg';
import Pinterest from '@/icons/pinterest.svg';
import Skype from '@/icons/skype.svg';
import Vimeo from '@/icons/vimeo.svg';
import Youtube from '@/icons/youtube.svg';

import styles from './index.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className={`row position-relative pb-4 mb-4 ${styles.title}`}>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">DESTINATIONS</h6>
              <ul className="fs-15">
                <li>
                  <Link href="/search?destination=1">
                    <a href="#">Arequipa</a>
                  </Link>
                </li>
                <li>
                  <Link href="/search?destination=4">
                    <a href="#">Cusco</a>
                  </Link>
                </li>
                <li>
                  <Link href="/search?destination=7">
                    <a href="#">Lima</a>
                  </Link>
                </li>
                <li>
                  <Link href="/search?destination=5">
                    <a href="#">Nazca</a>
                  </Link>
                </li>
                <li>
                  <Link href="/search?destination=6">
                    <a href="#">Amazon</a>
                  </Link>
                </li>
                <li>
                  <Link href="/search?destination=10">
                    <a href="#">Titicaca Lake</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">
                EXPLORE VALENCIA TRAVEL
              </h6>

              <ul className="fs-15">
                <li>
                  <Link href="/search">
                    <a href="#">Destinations</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tailor-made-tour">
                    <a href="#">Tailor Made Tours</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-purpose">
                    <a>Our Purpose</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">COMPANY</h6>

              <ul className="fs-15">
                <li>
                  <Link href="">
                    <a href="#">
                      USA and Canada Toll Free: <br /> <b>(+1) 800 773 9048</b>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    Peru: <br />
                    <b>(+511) 298 8 300</b>
                  </a>
                </li>
                <li>
                  Address:
                  <br />
                  Portal Panes #123 / Centro Comercial Ruiseñores Office #: 306-307
                  <br />
                  <b>Cusco - Peru</b>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 "> FOLLOW US</h6>
              <div>
                <a
                  href="https://www.facebook.com/valenciatravelcusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Facebook} viewBox="0 0 54 53" className={`${styles.icon} icon-size-l`} />
                </a>
                <a
                  href="https://www.instagram.com/valenciatravelcusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block  pb-3 pr-1">
                  <Icon component={Instagram} viewBox="0 0 59 58" className="icon-size-l" />
                </a>
                <a
                  href="https://vimeo.com/user131526189"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Vimeo} viewBox="0 0 54 53" className="icon-size-l" />
                </a>
                <a
                  href="https://www.pinterest.com/Valencia100/_created/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Pinterest} viewBox="0 0 55 55" className="icon-size-l" />
                </a>

              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/valencia-travel-cusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Linkedin} viewBox="0 0 57 56" className="icon-size-l" />
                </a>
                <a
                  href="https://www.tripadvisor.com/UserReviewEdit-g294314-d2469804-Valencia_Travel_Day_Tours-Cusco_Cusco_Region.html"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Advisor} viewBox="0 0 54 53" className="icon-size-l" />
                </a>
                <a
                  href="skype:valenciatravel.cusco?call"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Skype} viewBox="0 0 59 58" className="icon-size-l" />
                </a>
                <a
                  href="https://www.youtube.com/ValenciaTravelCuscoPeru"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-1">
                  <Icon component={Youtube} viewBox="0 0 59 59" className="icon-size-l" />
                </a>

              </div>
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-12 p-0 text-center">
              <p className="m-0 fs-13 text-white">
                2016 Valencia Travel Cusco, Inc. All Rights Reserved:  
                <Link href="/terms-conditions">
                  <a href="#" className="skyblue">
                   Terms & Conditions
                  </a>
                </Link>
                -
                <Link href="/contact-us">
                  <a href="#" className="skyblue">
                    {' '}
                    Contact us
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
