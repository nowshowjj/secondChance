import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

export default class ExForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: "",
      exselect: "",
      comments: "",
      file: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {description, comments, exampleFile} = this.state;
    let formData = new FormData();

    formData.append("description", description);
    formData.append("comments", comments);
    formData.append("exampleFile", exampleFile);
    axios.post("/api/file-upload/").then(result => {
      console.log(result);
    })}


  onChange = (e) => {
    switch (e.target.name) {
      case "exampleFile":
      this.setState({ exampleFile: e.target.files[0]});
      break;
    default:
      this.setState({ [e.target.name]: e.target.value});
    }
    console.log("more fuck!");
    console.log(this.state);
  }



  render() {
    const {
      description,
      exselect,
      comments,
      file
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="exDescription" placeholder="Package/Pill Description" onChange={this.onChange} value={description} />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exselect">Fentanyl Test Results</Label>
          <Input type="select" name="exselect" id="fentSelect" onChange={this.onChange} value={exselect}>
            <option>Positive</option>
            <option>Negative</option>
            <option>Not Tested</option>
          </Input>
        </FormGroup> */}
        <FormGroup>
          <Label for="comments">Comments</Label>
          <Input type="textarea" name="comments" id="exampleText" placeholder="Additional Comments" onChange={this.onChange} value={comments} />
        </FormGroup> 
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="exampleFile" id="userFile" onChange={this.onChange} />
          <FormText color="muted">
            Upload picture of package/pill
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}