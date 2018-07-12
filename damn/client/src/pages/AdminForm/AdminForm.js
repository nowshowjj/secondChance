import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import AdminJumbo from "../../components/AdminJumbo/AdminJumbo";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";


class AdminForm extends Component {
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
        this.setState({ alerts: res.data, description: "", testResult: "", comments: "", image: [] })
      )
      .catch(err => console.log(err));
  };

  deleteAlert = id => {
    API.deleteAlert(id)
      .then(res => this.loadAlerts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.testResult) {
      API.saveAlert({
        description: this.state.description,
        testResult: this.state.testResult,
        comments: this.state.comments,
        image: this.state.image
      })
        .then(res => this.loadAlerts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <AdminJumbo>
              
            </AdminJumbo>
            <form>
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                value={this.state.testResult}
                onChange={this.handleInputChange}
                name="testResult"
                placeholder="Test Results (required)"
              />
              <TextArea rows="4" cols="50"
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />
               <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image url (optional)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.testResult)}
                onClick={this.handleFormSubmit}
              >
                Submit Alert
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Local Alerts</h1>
            </Jumbotron>
            {this.state.alerts.length ? (
              <List>
                {this.state.alerts.map(alert => (
                  <ListItem key={alert._id}>
                    <Link to={"/alerts/" + alert._id}>
                      <strong>
                        {alert.description} by {alert.testResult}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAlert(alert._id)} />
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

export default AdminForm;
