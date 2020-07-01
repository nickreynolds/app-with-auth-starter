import React, { Component } from "react";
import mutation from "../mutations/Login";
import { graphql } from "react-apollo";
import AuthContainer from "./AuthContainer";

class LoginForm extends Component {
  render() {
    return <AuthContainer mutate={this.props.mutate} authType="Log in" />;
  }
}

export default graphql(mutation)(LoginForm);
