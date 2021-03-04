// import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Collapse, CollapseContent, Icon, PackageItem, DestinationOverview } from '@/components/index';
import { activities, days, packages, years } from '@/core/index';
import Close from '@/icons/close.svg';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({ destinations, packagetypes, interests, notifications }) {
  const router = useRouter();
  const [packagesList, setPackagesList] = useState([]);
  const [checkedDestination, setCheckedDestination] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedActvity, setCheckedActvity] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedInterest, setCheckedInterest] = useState([]);

  const [checkedMonths, setCheckedMonths] = useState([]);
  const [checkedYearMonth, setCheckedYearMonth] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const [destChecked, setDestChecked] = useState({title:'', content:'', picture:''});

  function actionFiltersMonths(event, id, yearIndex, monthIndex) {
    years[yearIndex].months[monthIndex].checked = event.target.checked;

    const idYearMonth = `${yearIndex}-${monthIndex}`;

    const indexCurrentYM = checkedYearMonth.findIndex(
      item => item === String(idYearMonth),
    );

    if (indexCurrentYM === -1) {
      checkedYearMonth.push(idYearMonth);
      checkedMonths.push(id);
    } else {
      checkedYearMonth.splice(indexCurrentYM, 1);
      checkedMonths.splice(indexCurrentYM, 1);
    }

    router.push({
      pathname: '/search',
      query: {
        ...router.query,
        months: checkedMonths.join(),
        ym: checkedYearMonth.join(),
      },
    });
  }

  function actionFiltersTypes(value, id) {
    const index = checkedTypes.findIndex(item => item === String(id));

    if (index === -1) checkedTypes.push(id);
    else checkedTypes.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, types: checkedTypes.join() },
    });
  }

  function actionFiltersInterest(value, id) {
    const index = checkedInterest.findIndex(item => item === String(id));

    if (index === -1) checkedInterest.push(id);
    else checkedInterest.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, interests: checkedInterest.join() },
    });
  }

  function actionFiltersActivities(value, id) {
    const index = checkedActvity.findIndex(item => item === String(id));

    if (index === -1) checkedActvity.push(id);
    else checkedActvity.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, activity: checkedActvity.join() },
    });
  }

  function actionFiltersDays(event, id) {
    const currentday = checkedDays.find(day => day.id === id);
    currentday.checked = event.target.checked;
    const currentdays = checkedDays.filter(day => day.checked === true);

    const statusDays = checkedDays.reduce((accumulator, day) => {
      const iteratorDay = day.checked ? 1 : 0;
      return `${accumulator + iteratorDay},`;
    }, '');

    if (currentdays.length > 0) {
      const { start } = currentdays[0];
      const { end } = currentdays[currentdays.length - 1];
      router.push({
        pathname: '/search',
        query: { ...router.query, start, end, status: statusDays.slice(0, -1) },
      });
    } else {
      router.push({
        pathname: '/search',
        query: { ...router.query, start: '', end: '', status: '' },
      });
    }
  }

  function actionFiltersDestinations(value, id) {
    const index = checkedDestination.findIndex(item => item === String(id));
    if (index === -1) checkedDestination.push(String(id));
    else checkedDestination.splice(index, 1);
    router.push({
      pathname: '/search',
      query: { ...router.query, destination: checkedDestination.join() },
    });

  
  }

  function setActionChecked(id, state) {
    return state.find(item => item === String(id)) === String(id);
  }

  async function fetchPackages() {
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `?${querySet}` : '';
    const { result } = await packages({ queryParams });
    setPackagesList(result?.data);
  }

  useEffect(() => {
    const destinationActiveItems = [];
    if (router?.query?.destination) {
      const destinationsActive = router?.query?.destination.split(',');
      setCheckedDestination(destinationsActive);

      destinationsActive.forEach(active => {
        destinations.forEach(destination => {
          const destinationActiveItem = destination.destinations.find(
            item => String(item.id) === active,
          );
          if (destinationActiveItem) destinationActiveItems.push(destinationActiveItem);
        });
      });
      if(destinationsActive.length <= 1){
        destinations.map(country =>
          country.destinations.map(
            item => item.id == destinationsActive[0] ? setDestChecked({title: item.title, content: item.content, picture: item.picture}) : null
          )
          )
    }
      // setCheckedDestination(router?.query?.destination.split(','));
    }

    if (router?.query?.start || router?.query?.end) {
      const statusDays = router?.query?.status?.split(',') || [];

      days.forEach((status, index) => {
        days[index].checked = !!Number(statusDays[index]);
      });
      setCheckedDays(days);
    } else setCheckedDays(days);

    if (router?.query?.activity) {
      setCheckedActvity(router?.query?.activity.split(','));
    }

    if (router?.query?.types) {
      setCheckedTypes(router?.query?.types.split(','));
    }

    if (router?.query?.interests) {
      setCheckedInterest(router?.query?.interests.split(','));
    }

    if (router?.query?.months) {
      const statusMonths = router?.query?.months?.split(',') || [];
      const statusYearMonth = router?.query?.ym?.split(',') || [];

      statusYearMonth.forEach(yearMonth => {
        const [myYearIndex, myMonthIndex] = yearMonth.split('-');
        years[myYearIndex].months[myMonthIndex].checked = true;
      });

      setCheckedMonths(statusMonths);
      setCheckedYearMonth(statusYearMonth);
    }

    fetchPackages();

    
  }, [router]);

  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <div className="container d-block d-lg-none pt-3">
        <div className="row ">
          <div className="offset-2 col-8">
            <button
              type="button"
              className="btn btn-primary btn-block filter-actions"
              onClick={() => setShowFilters(true)}>
              Show filters
            </button>
          </div>
        </div>
      </div>
      {checkedDestination.length ==1 ? 
      <DestinationOverview title={destChecked.title} picture={destChecked.picture} content={destChecked.content} ></DestinationOverview>
      : null}
      
      <section id="tours_all">
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-12 mx-auto">
              <div className="row">
                <h2 className="title text-center font-weight-bold fs-25 pl-3">
                  All our Tours
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div
                  className={`${styles.aside} ${showFilters ? 'd-block' : 'd-none'
                    }  d-none d-lg-block col-12 col-lg-3 p-0`}>
                  <div className="d-block d-lg-none pt-3 pb-3">
                    <h3 className="text-center pt-3">Filters</h3>
                    <a
                      href="#"
                      className={styles.close}
                      onClick={() => setShowFilters(false)}>
                      <Icon
                        component={Close}
                        viewBox="0 0 16 16"
                        className="icon-size-l"
                      />
                    </a>
                  </div>
                  <Collapse open={1}>
                    <CollapseContent index={0} title="Destinations">
                      {destinations.map(
                        country =>
                          country.destinations.filter(item => item.active).length > 0 && (
                            <Collapse open={1}>
                              <CollapseContent index={0} title={country.name}>
                                {country.destinations.map(
                                  destination =>
                                    destination.active && (
                                      <Form.Check
                                        key={destination.id}
                                        checked={ 
                                          setActionChecked(
                                          destination.id,
                                          checkedDestination
                                        )
                                        
                                        }
                                        type="checkbox"
                                        onChange={event =>
                                          actionFiltersDestinations(event, destination.id)
                                        }
                                        name={destination.slug}
                                        id={destination.id}
                                        label={`${destination.title}`}
                                      />
                                    ),
                                )}
                              </CollapseContent>
                            </Collapse>
                          ),
                      )}
                    </CollapseContent>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent index={0} title="Duration (Days)">
                      {days.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={item.checked}
                          type="checkbox"
                          onChange={event => actionFiltersDays(event, item.id)}
                          name={`day${item.id}`}
                          id={`day${item.id}`}
                          label={`${item.start} - ${item.end}`}
                        />
                      ))}
                    </CollapseContent>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent index={0} title="Type of Travel">
                      {packagetypes.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedTypes)}
                          type="checkbox"
                          onChange={event => actionFiltersTypes(event, item.id)}
                          name={`type${item.id}`}
                          id={`type${item.id}`}
                          label={item.title}
                        />
                      ))}
                    </CollapseContent>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent index={0} title="Interests">
                      {interests.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedInterest)}
                          type="checkbox"
                          onChange={event => actionFiltersInterest(event, item.id)}
                          name={`interest${item.id}`}
                          id={`interest${item.id}`}
                          label={item.title}
                        />
                      ))}
                    </CollapseContent>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent index={0} title="Activity Level">
                      {activities.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedActvity)}
                          type="checkbox"
                          onChange={event => actionFiltersActivities(event, item.id)}
                          name={`activity${item.id}`}
                          id={`activity${item.id}`}
                          label={item.label}
                        />
                      ))}
                    </CollapseContent>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent index={0} title="Month of Travel">
                      {years.map((year, yearIndex) => (
                        <Collapse open={1} key={year.id}>
                          <CollapseContent index={0} title={year.name}>
                            {year.months.map((month, monthIndex) => (
                              <Form.Check
                                disabled={month.disabled}
                                key={year.id + month.id}
                                checked={month.checked}
                                type="checkbox"
                                className={styles.month}
                                onChange={event =>
                                  actionFiltersMonths(
                                    event,
                                    month.id,
                                    yearIndex,
                                    monthIndex,
                                  )
                                }
                                name={year.id + month.id}
                                id={year.id + month.id}
                                label={month.id.substring(0, 3)}
                              />
                            ))}
                          </CollapseContent>
                        </Collapse>
                      ))}
                    </CollapseContent>
                  </Collapse>
                </div>
                <div className="col-12 col-lg-9">
                  <div className="row">
                    {packagesList.length > 0 &&
                      packagesList.map(item => (
                        <div
                          key={item?.id}
                          className="d-flex col-12 col-md-6 col-lg-4 mb-4">
                          <PackageItem
                            title={item.title}
                            days={item.days}
                            slug={item.slug}
                            thumbnail={item.thumbnail}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      interests,
      notifications,
    },
  };
}

export default Search;
