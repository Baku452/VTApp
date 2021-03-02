import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { Icon } from '@/components/index';
import Logo from '@/icons/valencia.svg';

import styles from './index.module.scss';

function Newsletter() {
  const router = useRouter();
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());

      router.push({
        pathname: '/our-newsletter',
        query: { email: formDataEntries.email },
      });
    }
    setValidated(true);
  };

  return (
    <div className={`header-lg container d-none d-lg-block pt-4 pb-4 ${styles.header}`}>
      <div className="row flex-nowrap justify-content-between align-items-start level-1">
        <div className="col-2 p-0">
          <Link href="/">
            <a className="position-relative">
              <Icon component={Logo} viewBox="0 0 600 600" className={styles.logo} />
            </a>
          </Link>
        </div>
        <div className="col-auto p-0">
          <p className="m-0 fs-13">Subscribe to our newsletter</p>
          <Form
            className="form-inline"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Form.Control
              type="email"
              style={{ width: '280px' }}
              className="mr-1"
              name="email"
              placeholder="Email"
              required
            />
            <button className="btn btn-primary" type="submit">
              SUBSCRIBE
            </button>
          </Form>
        </div>

        <div className="col-auto pt-3">
          <div className="row flex-nowrap align-items-start">
            <div className="col-auto p-0">
              <div className="fw-bold text-right fs-13">
                Toll Free: 1 - (917) 983 2727 <br />
                1 - (860) 856 5858
              </div>
            </div>
            <div className="col-auto">
              <Link href="/contact-us">
                <button type="button" className="btn btn-primary">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Newsletter };
