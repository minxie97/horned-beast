import { Component } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
// import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0,
        }
    }

    handleClick = (data) => {
        this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
        this.props.showModal(data);
    }
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick={() => this.handleClick(this.props)}>
                    <Card.Img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
                    <Card.Body>
                        <Card.Title as="h2">{this.props.title}</Card.Title>
                        <Card.Text><HeartFill/> {this.state.numberOfLikes}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;