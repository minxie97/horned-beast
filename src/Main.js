import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import data from "./data.json";

class Main extends Component {
    render() {
        return (
            <>
                {data.map(element => <HornedBeast {...element} />)}
            </>
        )
    }
}

export default Main;