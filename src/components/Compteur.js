import React, { Component } from "react";

class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.intervalId = null;
  }

  componentDidMount() {
    console.log("Compteur monté !");
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log(`Compteur mis à jour : ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log("Compteur démonté !");
    clearInterval(this.intervalId);
  }

  render() {
    return <h2>Compteur : {this.state.count}</h2>;
  }
}

export default Compteur;
