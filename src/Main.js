import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import data from "./data.json";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    {data.map(element => <HornedBeast {...element} />)}
                </Row>
            </Container>
        )
    }
}

export default Main;