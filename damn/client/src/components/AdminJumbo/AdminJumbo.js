import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const AdminJumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Create an Alert</h1>
        <p className="lead"> Fill out the information below to warn users in your area of fentanyl tainted products.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default AdminJumbo;