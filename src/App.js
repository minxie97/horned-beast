import { Component } from "react";
import Header from "./Header.js";
import HornSelect from "./HornSelect.js";
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
      beast: {},
      beastData: data,
    }
  }

  showHorns = (data) => {
    this.setState({ beastData: data })
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  showModal = (data) => {
    this.setState({ show: true });
    this.setState({ beast: data })
  }

  render() {
    return (
      <div>
        <Header />
        <HornSelect data={data} showHorns={this.showHorns}/>
        <Main data={this.state.beastData} showModal={this.showModal} />
        <SelectedBeast beast={this.state.beast} show={this.state.show} hideModal={this.hideModal} />
        <Footer />
      </div>
    )
  }
}

export default App;