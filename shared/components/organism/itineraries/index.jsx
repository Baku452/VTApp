import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import { List } from './list';

function Itineraries({ name, title, itineraries }) {
  return (
    <Element name={name ? name : "itinerary"} className="container pt-5 pb-5">
      {itineraries.length > 1 ? <Title title={title ? title : "DAY BY DAY SCHEDULE"} /> : <Title title={title ? title : "Itinerary"} />}
      <List itineraries={itineraries} />
    </Element>
  );
}

export { Itineraries };
