import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Main extends Component {

    render() {
        return (
                <Container fluid>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {this.props.data.map(element => <HornedBeast {...element} showModal={this.props.showModal} />)}
                    </Row>
                </Container>
        )
    }
}

export default Main;