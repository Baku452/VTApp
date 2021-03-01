/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap'
import {ModalForm} from '@/components/index';
import styles from './index.module.scss';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function PopUp({popup}) {
    const [show, setShow] = useState(false);
    const delay = 3;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(
        () => {
            let timer = setTimeout(() => setShow(true), delay * 1000);

            return () => {
                clearTimeout(timer);
            };
        }, []
    );

    return (
        <>
            <Modal 
            show={show} 
            onHide={handleClose}
            centered
            dialogClassName={styles.modal}
            >
                <Modal.Body className={styles.flexModal}>
                        <div xs={12} md={5} className="px-5 py-5">
                            <h3> {popup.title}</h3>
                            <p className="pt-5">{popup.content}</p>
                            <ModalForm></ModalForm>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                        <div xs={6} md={5}>
                            <img src={PUBLIC_API + popup.original}></img>
                        </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export { PopUp };