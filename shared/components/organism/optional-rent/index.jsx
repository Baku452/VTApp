import React, {useState} from 'react';
import { Element } from 'react-scroll';
import Modal from 'react-bootstrap/Modal';


import { Collapse, CollapseContent, Gallery, ItineraryItems } from '@/components/index';

import { Title } from '../../atoms/title/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function GalleryWrapper(props) {
  const { images } = props;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        {images.length > 0 && <Gallery images={images} navigation pagination={false} />}
      </Modal.Body>
    </Modal>
  );
}
function OptionalReting({ optionals }) {
  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);

  function openModal(event, item) {
    event.preventDefault();
    setImages(item?.images);
    setModalShow(true);
  }
  return (
    <Element name="optional-for-renting" className="container pt-5 pb-5">
      <Title title="OPTIONAL FOR RENTING" />
      <div className="row">
        <Collapse open={0}>
          {optionals.map((item, index) => (
            <CollapseContent key={index.toString()} index={index} title={item?.title}>
              <div className="row pb-4">

                    <div
                      className="col-12 col-md-8 order-2 order-md-1"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    {item.images ? item.images.length > 0 && (
                      <div className="col-12 offset-md-1 col-md-3 pt-2 order-1 order-md-2">
                      <img
                        src={PUBLIC_API + item.images[0].image}
                        className="d-block w-100 fit"
                        alt={item.alt}
                        />
                      <a
                        href="/gallery"
                        onClick={event => openModal(event, item)}
                        className="btn btn-link fs-16 pt-3 d-block text-right">
                        View all photos
                      </a>
                    </div>
                  ) : null}
              </div>  
            </CollapseContent>
          ))}
        </Collapse>
        <GalleryWrapper
        images={images}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Element>
  );
}

export { OptionalReting };
