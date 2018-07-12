import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./AlertPage.css";
import AlertJumbo from "../../components/AlertJumbo/AlertJumbo"
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

    class AlertPage extends Component {
  state = {
    alert: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getAlert(this.props.match.params.id)
      .then(res => this.setState({ alert: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <AlertJumbo />
    
          </Col>
        </Row>
        <Row>
          <Col size="md-8 md-offset-7">
          <Card>
          <CardBody>
            <CardTitle> {this.state.alert.description}</CardTitle>
            <CardSubtitle>{this.state.alert.testResult}</CardSubtitle>
          </CardBody>
          <img width="100%" src={this.state.alert.image} alt="Card image cap" />
          <CardBody>
            <CardText>{this.state.alert.comments}</CardText>
            
          </CardBody>
        </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/AdminForm">← Back</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AlertPage;
