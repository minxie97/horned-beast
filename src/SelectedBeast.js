import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default class SelectedBeast extends Component {

    handleClose = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <div>
                <Modal size="lg" show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src={this.props.beast.image_url} alt={this.props.beast.keyword} style = {{ width: "100%" }}/></Modal.Body >
                    <Modal.Body>{this.props.beast.description}</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}