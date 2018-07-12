import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserJumbo from "../../components/UserJumbo/UserJumbo";
import Example from "../../components/NavBar/NavBar";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";



class UserHome extends Component {
  state = {
    alerts: [],
    description: "",
    testResult: "",
    comments: "",
    image: ""
  };

  componentDidMount() {
    this.loadAlerts();
  }

  loadAlerts = () => {
    API.getAlerts()
      .then(res =>
        this.setState({ alerts: res.data, description: "", testResult: "", comments: "", image: "" })
      )
      .catch(err => console.log(err));
  };


  
  
  render() {
    return (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Example />
        <UserJumbo />
            {this.state.alerts.length ? (
              <List>
                {this.state.alerts.map(alert => (
                  <ListItem key={alert._id}>
                    <Link to={"/alerts/" + alert._id}>
                      <strong>
                        {alert.description} | {alert.testResult}
                      </strong>
                    </Link>
                   
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Col>
    </Row>
  </Container>
);

  }
}

export default UserHome;
