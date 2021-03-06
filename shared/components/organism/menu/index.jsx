import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function MenuItem({ item, tailorMade }) {
  return (
    item.tailor_made === tailorMade &&
    item.active && (
      <li key={item.slug} className="pb-3 pr-5">
        <Link
          href={{
            pathname: '/search',
            query: { destination: item.id },
          }}>
          <a className={styles.route}>
            {item.title} {item.sub_title && `- ${item.sub_title}`}
          </a>
        </Link>
      </li>
    )
  );
}

function MenuContent({ destinations, countries, changeCountry, tailorMade }) {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className="container d-block">
          <div className="row">
            {destinations &&
              destinations.map(destination => (
                <div key={destination.name} className="col-12">
                  <h5 className="font-weight-bold black">{destination.name}</h5>
                  <ul className={styles.items}>
                    {destination.destinations.map(item => (
                      <MenuItem item={item} key={item.id} tailorMade={tailorMade} />
                    ))}
                  </ul>
                </div>
              ))}

            <div className="col-12 pt-5 pb-5">
              <h5 className="black font-weight-bold mb-3">
                Other destinations in South America
              </h5>
              <ul>
                {countries &&
                  countries.map(item => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className="black"
                        onClick={event => changeCountry(event, item.id)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuHoliday({ packagetypes }) {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className="container d-block">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold black">By Types</h5>
              <ul className={`${styles.items} row`}>
                {packagetypes &&
                  packagetypes.map(types => (
                    <li key={types.id} className={`${styles.types} col-3`}>
                      <i className={styles.svg}>
                        {types.svg && (
                          <img src={PUBLIC_API + types.svg} alt={types.title} />
                        )}
                      </i>

                      <Link
                        className={styles.Link}
                        href={{
                          pathname: '/search',
                          query: { types: types.id },
                        }}>
                        <a className={styles.route}>{types.title} </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu({ destinations: destinationsCurrent, packagetypes }) {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const countries = destinationsCurrent;

  function changeCountry(event, id) {
    event.preventDefault();
    const destination = countries.filter(item => item.id === id);
    setDestinations(destination);
  }

  useEffect(() => {
    setDestinations(destinationsCurrent?.filter(item => item.id === 1));
  }, []);

  function active(pathname, page) {
    return pathname === page ? 'nav-link active' : 'nav-link';
  }

  return (
    <div className={`${styles.toolbar} d-none d-lg-block`}>
      <div className="container p-0 d-block">
        <nav className="navbar-expand-lg d-none d-md-block px-0 position-static">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className={styles.nav}>
                <a
                  className={`${active(router.pathname, '/search')} ${styles.link}`}
                  role="button">
                  Destinations
                </a>
                <MenuContent
                  destinations={destinations}
                  countries={countries}
                  changeCountry={changeCountry}
                  tailorMade={false}
                />
              </li>
              <li className={styles.nav}>
                <a
                  className={`${active(router.pathname, '/experiences')} ${styles.link}`}
                  role="button">
                  HOLYDAY TYPES
                </a>
                <MenuHoliday packagetypes={packagetypes} />
              </li>
              <li className={styles.nav}>
                <Link href="/tailor-made-tour">
                  <a
                    className={`${active(router.pathname, '/tailor-made-tour')} ${styles.link
                      }`}
                    role="button">
                    Tailor Made Tours
                  </a>
                </Link>

                {/* <MenuContent
                  destinations={destinations}
                  countries={countries}
                  changeCountry={changeCountry}
                  tailorMade
                /> */}
              </li>
              <li className={styles.nav}>
                <Link href="/our-purpose">
                  <a
                    className={`${active(router.pathname, '/our-purpose')} ${styles.link
                      }`}
                    role="button">
                    Our Purpose
                  </a>
                </Link>
              </li>
              <li className={styles.nav}>
                <a className={`nav-link ${styles.link}`} href="#">
                  Blog
                </a>
              </li>
              <li className={styles.nav}>
                <Link href="/contact-us">
                  <a
                    className={`${active(router.pathname, '/contact-us')} ${styles.link}`}
                    role="button">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Menu };
