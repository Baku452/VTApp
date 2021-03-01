/* eslint-disable react/no-danger */
import Head from 'next/head';

import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TermsConditions({ notifications, destinations, packagetypes }) {
  return (
    <Base destinations={destinations} packagetypes={packagetypes} notifications={notifications}>
      <Head>
        <meta name="description" content="Terms and conditions" />
        <meta name="keywords" content="Terms & conditions" />
      </Head>
      <div className="container">
        <div className="row pt-5 pb-4 mb-3">
          <div className="col-12">
            <h1> Payment and  Cancellation Policy</h1>
            <div
              className="fs-16 lh-29"
            />
            <p>
            Valencia Travel Cusco, requires an initial deposit of 40% of the total cost of the trip. This 40%, is necessary for operational costs and is non-refundable should the trip be cancelled by the client. The remaining 60% must be paid at least 90 days prior to your trip.
           </p>
           <p>
                Less than 90 days before the trip, it is required the 100% payment.
                Wire Transfer Terra Bank:
                Registered company name:  Valencia Travel Agency S.A.C
                Registered company address: Portal de Panes 123 C.C. Ruiseñores  Of. 306 - 307 Cusco - Peru.
                Company Number: 20490589857
                Name of Director: Rene Hurtado Valencia
                Bank Details:
                Name of Beneficiary: Valencia Travel Agency S.A.C.
                Address of Beneficiary: Portal de Panes 123 C.C. Riuseñores of. 306 -307 Cusco - Peru
                Bank Name: Terra Bank, N.A.
                Bank Address: 3191 Coral Way Miami Fl 33145
                ABA/Routing: 066012333
                SWIFT:  TBNAUS33
                Account: #(U$D): 1297969406
                Add approx. USD 40.00 to the amount you are sending to cover the transaction fee.
                Payment with Credit Card
                We accept Visa, Mastercard, American Express, Diners Club, payments can be done through our website.  Additional charge of a 5% would be applied over the final amount of the tour as a result of using a credit card services and added to your bill. In case you need any assistance contact us to process your payment.
                Western Union:
                You can pay by Western Union at their office (they have offices internationally) or online (www.westernunion.com):
                Receiver’s first name: Rene
                Receiver’s last name: Hurtado Valencia
                City/Town: Cusco
                Country: Peru
                P.S: In the “message” space on the Western Union form, please write the name of your tour and your arrival date. Once you made the transaction, please send us the tracking number (MTCN code)
            </p>
          </div>
          <h2>CANCELLATION POLICY</h2>
          <div
          className="fs-16 lh-29"
          >
          <p>
            At the time we receive a written notice, that you want to cancel your trip, the following fees will be charged:
            </p>
            <ul>
                <li>
                    30 to 59 days before departure date: 40% of trip cost 
                </li>
                <li>
                    7 to 29 days: 70% of trip cost
                </li>
                <li>
                    Less than 7 days before departure date or no-show: 100% of trip cost
                </li>
            </ul>
            <p>
                Valencia Travel Cusco, guarantees and provides transportation, bilingual guides, equipment, and food as stated in the detailed itinerary. All tour prices include the services of a driver and/or guide. Miscellaneous costs are not included. For example: any service which is not outlined in the itinerary, such as hotel extras, (washing and ironing of clothes, alcoholic drinks, telephone calls etc.), excess baggage costs, airport taxes, visa costs, etc.
            </p>
            <p>
                Valencia Travel Cusco is not responsible for delays, inconveniences, and/or expenses of any kind whatsoever resulting entirely, or in part from causes beyond the company’s control, neither for losses or additional expenses due to delays, sickness, bad weather, strikes, riots or other similar circumstances.
            </p>

         
          </div>
          <h2>TRAVEL INSURANCE:</h2>
          <div
          className="fs-16 lh-29"
          >
              <p>
                We strongly advise you to take out a travel insurance that covers accidents, medical expenses (including rescue and air ambulance) and emergency repatriation. We also recommend that it covers cancellations and loss of luggage. Make sure that this insurance reimburses you for non-refundable trip costs.
                Once you have purchased travel insurance, please forward a copy of the insurance company name and policy number by email or bringing the information when you come to our office.
              </p>
          </div>
          
<h2>BEHAVIOR</h2>
<p>Our paramount as a company is  the safety of the group. Thus, if a traveller behavior is detrimental to the  safety and welfare of the group, incompatible with other members or contrary to  the progress of the itinerary, <strong>Valencia  Travel Cusco</strong>, reserves the right to require this person to withdraw from  the tour. Anyone asked to leave for these reasons will not receive a refund.  Refunds for unused services will not be honored under these circumstances, nor  will any additional expenses be recognized.</p>
<p>In the case of an illness that  hinders the progress of the trip, a client may also be excluded from a tour.  The company can make the necessary arrangements and recover the client's costs.</p>
<p>Finally, a client committing  an illegal act, they will be excluded from a tour and on this regard, any  responsibility from Valencia Travel Cusco shall cease to exist.</p>
<h2>TRIP  PROFILE</h2>
<p>Transportation, bilingual  guides, equipment and food are included. Miscellaneous costs are not included,  such as alcoholic beverages, personal telephone calls, excess baggage, airport  taxes, visa charges, and travel insurance. All trip members will receive the  necessary gear for their trip. The client must cover any damage or loss of all  the equipment and gear supplied by Valencia Travel Cusco for their personal  use. Tours are limited in number, usually less than 10, to lessen the impact on  the environment and local cultures. This also ensures a more personalized  service to each individual traveler.</p>
<h2>CLIENTS&rsquo;  RESPONSIBILITIES</h2>
<p>Clients are responsible for  their personal documentation such as valid passports and visas. The name on the  airline ticket should correspond to the name on the passport. The client is  responsible for a timely arrival for activities. Should they fail to do so,  extra costs may incur in order to catch up with the group or even make it  necessary to cancel and withdraw from the group. Travelers are also responsible  for their own personal belongings, such as their baggage.</p>
<h2>CHANGES  MADE BY CLIENT:</h2>
<p>The person who signs the  reservation order is the only person that can make changes to the  Tour/Trek/Trip/Rental/Service. A $35 USD change of order fee is charged to make  any changes. Though all efforts will be made to make the changes requested,  they are not guaranteed and there may be additional costs in relation to these  changes.</p>
<h2>DISSATISFIED  CUSTOMERS</h2>
<p>Should a client have any  complaint about their holiday, they should make it known as soon as possible,  directly to the guide or travel assistant in order to make the necessary  amendments immediately. If the problem remains unsolved and the client requests  a refund, they must write to the travel assistant no more than 30 days after  the last day of the trip. <strong>Valencia  Travel Cusco</strong> will attend to the case as quickly as possible, using the  travel agency as the mediator.</p>
<h4><strong>PLEASE NOTE  THAT, FOR THE INCA TRAIL, PERMITS ARE NON-TRANSFERABLE, NON-REFUNDABLE, AND  DATES CAN'T BE CHANGED.</strong></h4>

<h2>CHANGES  AND CANCELLATIONS BY VALENCIA TRAVEL CUSCO:</h2>
<p>We always make our best  efforts to carry out tours / services according to the original schedules as  listed in the reservation order. However, by entering into this agreement with <strong>Valencia Travel Cusco</strong>, the client  accepts that necessary changes may need to be made to a  Tour/Trek/Trip/Rental/Service due to predominant conditions (see 'Force  Majeure' section above). </p>
<p><strong>Valencia  Travel Cusco</strong> reserves the right to change or cancel any facilities, services and substitute  for reasonable alternative of comparable value. <br />
In the event of a major  change, the client will be notified as soon as possible. The client will have  options with regards to accepting the change. </p>
<h2>VERY  IMPORTANT:</h2>
<p>We strongly suggest spending  time at high altitude (above 3000 meters / 9842 feet - in Cusco or another high  altitude area) for a minimum of 3 to 4 days before undertaking your trip. This  is in order to minimize the possible effects of altitude sickness. Also, you  can help your body acclimatize by drinking plenty of liquids, adding a bit more  sugar to your drinks, eating food rich in carbohydrates, avoiding cigarettes  and alcohol, and drinking coca (ancient traditional leaf) tea. Diamox can also  be helpful - please ask your doctor about purchasing any medications before  traveling.</p>
<h2>ABOUT THE BRIEFING:</h2>
<p>  The night before your trek,  there will be a pre-trek talk (briefing) in our office at either 6:30 pm or  7:30 pm (exact time will be confirmed upon your arrival or by email). A duffel  bag will be provided at this time, if you have paid for an extra porter for  your Inca Trail or if you are doing an alternative trek. </p>
<p>Thanks again for choosing us  and we look forward to seeing you in Cusco!.</p>
<p><strong>Valencia Travel Cusco Team </strong></p>
<p>  Enjoy all the different  services that we provide. Make sure to use caution and most importantly, have  fun! </p>
        </div>
      </div>
    </Base>
  );
}


export async function getStaticProps() {

  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packagestype/`);
  const packagetypes = await packagetypesResponse.json();
  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return { props: { destinations, packagetypes, notifications } };
}

export default TermsConditions;
