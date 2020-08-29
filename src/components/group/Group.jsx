import React, { Component } from "react";
import "./group.css";
import { connect } from "react-redux";
import { addGroup } from "../../store/actions/groupActions";
import { v4 as uuidv4 } from "uuid";

class Group extends Component {
  state = {
    gname: ""
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const group = {
      id: uuidv4(),
      gname: this.state.gname
    };
    this.props.addGroup(group);
    this.setState({
      gname: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { gname } = this.state;
    return (
      <div className="group">
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="u-full-width"
            type="text"
            name="gname"
            value={gname}
            placeholder="Group Name"
            onChange={this.handleOnChange}
          />
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addGroup })(Group);
