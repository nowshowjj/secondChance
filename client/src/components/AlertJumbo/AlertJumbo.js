import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./AlertJumbo.css";
const AlertJumbo = (props) => {
  return (
    <div>
      <Jumbotron className= "alertJumbo">
        <h1 className="display-3">Alert Details</h1>

      </Jumbotron>
    </div>
  );
};

export default AlertJumbo;