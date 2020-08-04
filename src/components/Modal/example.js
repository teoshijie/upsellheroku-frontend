import React, { useState, } from 'react';
import { Modal } from 'react-bootstrap';

const Example = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={(props.handleClose)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={props.handleClose}>
                        Close
                        </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;