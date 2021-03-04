import SwiperCore, { Navigation } from 'swiper';

import { Icon } from '@/components/index';
import Asta from '@/icons/asta.svg';
import Attamember from '@/icons/attamember.svg';
import Guarranty from '@/icons/guarranty.svg';
import Lata from '@/icons/lata.svg';
import Tripadvisor from '@/icons/tripadvisor.svg';
import Ustoa from '@/icons/ustoa.svg';
import safetravel from '@/icons/safetravel.svg';

SwiperCore.use([Navigation]);

function Associations() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container pt-4 pb-4">
            <div className="row">
            <div className="col-6 col-md-4 col-lg-2 text-center">
                <img
                  src="images/WTTC_SafeTravels_Stamp.png"
                  style={{ width: '120px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Attamember}
                  viewBox="0 0 268 70"
                  style={{ fontSize: '150px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center pt-4">
                <Icon
                  component={Tripadvisor}
                  viewBox="0 0 146 144"
                  style={{ fontSize: '100px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center  pt-3">
                <Icon
                  component={Lata}
                  viewBox="0 0 176 129"
                  style={{ fontSize: '110px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center pt-3">
                <Icon
                  component={Guarranty}
                  viewBox="0 0 176 144"
                  style={{ fontSize: '120px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Ustoa}
                  viewBox="0 0 240 70"
                  style={{ fontSize: '150px' }}
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <Icon
                  component={Asta}
                  viewBox="0 0 190 82"
                  style={{ fontSize: '150px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Associations };
