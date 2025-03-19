import React, { Component } from "react";
import Compteur from "../components/Compteur";
import Button from "../components/Button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { showCompteur: true };
  }

  toggleCompteur = () => {
    this.setState((prevState) => ({ showCompteur: !prevState.showCompteur }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>TP : Cycle de Vie d’un Composant</h1>
        <Button onClick={this.toggleCompteur}>
          {this.state.showCompteur ? "Masquer" : "Afficher"} le compteur
        </Button>
        {this.state.showCompteur && <Compteur />}
      </div>
    );
  }
}

export default Home;
