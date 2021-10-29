import { Component } from "react";
import { Form } from "react-bootstrap";

export default class HornSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            noDupArr: [...new Set(this.props.data.map(beast => beast.horns)), "All"],
            previousState:""
        }
    }

    handleChange = (event) => {
        let selection = event.target.value;
        let newData = this.props.data.filter(beast => beast.horns === Number(selection));
        this.props.showHorns(newData);
        this.setState({ previousState: newData })
        if (selection === "All") {
            this.props.showHorns(this.props.data);
            this.setState({ previousState: this.props.data })
        } else if (selection === "default") {
            this.props.showHorns(this.state.previousState);
        }
    }

    render() {

        return (
            <Form.Select onChange={this.handleChange}>
                <option value="default">Select Number of Horns</option>
                {this.state.noDupArr.map(horn => <option value={horn}>{horn}</option>)}
            </Form.Select>
        )
    }
}