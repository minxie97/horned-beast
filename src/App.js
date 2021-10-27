import { Component } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: "",
    }
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  showModal = (obj) => {
    this.setState({ show: true });
    this.setState({ beast: obj })
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={data} showModal={this.showModal}/>
        <SelectedBeast beast={this.state.beast} show={this.state.show} hideModal={this.hideModal}/>
        <Footer />
      </div>
    )
  }
}

export default App;