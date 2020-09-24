import React from "react";
import FormFunctional from "./FormFunctional";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div><b>Bem vindo ao Musify</b></div>
        <FormFunctional />
      </div>
    );
  }
}

export default Welcome;