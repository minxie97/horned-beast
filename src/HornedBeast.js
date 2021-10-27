import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0
        }
    }

    handleClick = () => {
        this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} onClick={this.handleClick} />
                    <Card.Body style={{ width: '18rem' }}>
                        <Card.Title as="h2">{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text><HeartFill />: {this.state.numberOfLikes}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default HornedBeast;