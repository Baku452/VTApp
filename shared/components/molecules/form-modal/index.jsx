import Link from 'next/link';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { countries, saveContactUs } from '@/core/index';

function ModalForm({title, content}) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(event.target);
      const formDataEntries = Object.fromEntries(formData.entries());
      const formValues = { ...formDataEntries, ...{ is_newsletter: newsletter } };

      const { result, error } = await saveContactUs({ data: formValues });

      setSuccess(true);
      window.scroll(0, 0);
    }
    setValidated(true);
  };

  return (
    <section id="thank_you">
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-10 p-0 mx-auto">

            {success ? (
              <div className="card mb-5 pb-5">
                <div className="card-body pb-5 pt-5 mt-4 text-center">
                  <h5 className="card-title fs-30 pb-5">Thank you for contacting us!</h5>
                  <p className="card-text fs-18 lh-29">
                  Travel destinations that amaze, stories that inspire, life experiences, mindful travel, and advice from our experts delivered straight to your inbox. 
                    <br />
                    While you are still here, feel free to navigate through our
                    <Link href="/search">
                      <a> travel destinations</a>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <h3> {title}</h3>
                  <p className="pt-5">{content}</p>
                    <div className="col-12 mx-auto p-0 text-left">
                      <div className="row mb-2">
                        <div className="col-12">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              name="first_name"
                              placeholder="First Name *"
                              size="lg"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid first name.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              name="last_name"
                              placeholder="Last Name *"
                              size="lg"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid last name.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="E-mail Address *"
                              size="lg"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid email address.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Form.Control
                              as="select"
                              size="lg"
                              name="country_residence"
                              required>
                              <option value="">Country of Residence</option>
                              {countries.map(item => (
                                <option key={item.code} value={item.name}>
                                  {item.name}
                                </option>
                              ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid country.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-12 mx-auto">
                        <input
                          type="submit"
                          value="Sign Me up"
                          className="btn btn-primary fs-16 w-100"
                        />
                      </div>
                    </div>
                  </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ModalForm };
