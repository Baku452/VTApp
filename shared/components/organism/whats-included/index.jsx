import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';

function WhatsIncluded({ include, exclude }) {
  return (
    <Element name="whats-included" className="container pt-5 pb-5">
      <div className="row listStyle">
        <div className="col-12 col-md-6 fs-16 lh-29">
          <Title title="WHAT'S INCLUDED" />
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: include }}
          />
        </div>
        <div className="col-12 col-md-6 fs-16 lh-29">
          <Title title="WHAT'S NOT INCLUDED" />
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: exclude }}
          />
        </div>
      </div>
    </Element>
  );
}

export { WhatsIncluded };
