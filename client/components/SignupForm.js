import React, { Component } from "react";
import mutation from "../mutations/Signup";
import { graphql } from "react-apollo";
import AuthContainer from "./AuthContainer";

class LoginForm extends Component {
  render() {
    return <AuthContainer mutate={this.props.mutate} authType="Sign Up" />;
  }
}

export default graphql(mutation)(LoginForm);
