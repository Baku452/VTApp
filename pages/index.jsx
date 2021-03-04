/* eslint-disable react/no-danger */
import Head from 'next/head';
import ScriptTag from 'react-script-tag';
import { PopUp } from '@/components/index';
import React from 'react';


import {
  Associations,
  Cover,
  OurRecommendations,
  Reviews,
  SubNewsletter,
  TopTours,
  VacationType,
} from '@/components/index';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Index({
  types,
  tours,
  destinations,
  banners,
  packagetypes,
  interests,
  notifications,
  popups
}) {


  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}>
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2047841,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        /> */
          <ScriptTag type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7151923.js"></ScriptTag>
        }
      </Head>
      <Cover
        destinations={destinations}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
      {
        popups.map(item => ( 
          <PopUp popup={item}></PopUp>
        ))

        }
      <VacationType types={types} packagetypes={packagetypes} />
      <OurRecommendations />
      <TopTours tours={tours} />
      <div style={{"background-color": '#f4f4f4'}}>
    
          {<>
            <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer></ScriptTag>
            <div class="elfsight-app-e76c2df3-57df-4924-a3b4-257b7e21a253"></div>
          </>
          }
          {/* <Reviews /> */}
     
 
      </div>
      <SubNewsletter />
      <Associations />
     
    </Base>
  );
}

export async function getStaticProps() {
  const typesResponse = await fetch(`${PUBLIC_API}/experiences/list/`);
  const types = await typesResponse.json();

  const toursResponse = await fetch(`${PUBLIC_API}/packages/home/`);
  const tours = await toursResponse.json();

  const bannersResponse = await fetch(`${PUBLIC_API}/banners/`);
  const banners = await bannersResponse.json();

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/interests/`);
  const interests = await interestResponse.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  const popupResponse = await fetch(`${PUBLIC_API}/popup/`);
  const popups = await popupResponse.json();

  return {
    props: {
      types,
      tours,
      destinations,
      banners,
      packagetypes,
      interests,
      notifications,
      popups
    },
    revalidate: 1,
  };
}

export default Index;
