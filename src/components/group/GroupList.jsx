import React, { Component } from "react";
import "./group.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeGroup } from "../../store/actions/groupActions";

class GroupList extends Component {
  state = {};
  render() {
    const { group } = this.props.group;

    return (
      <div className="row">
        <Link to="/create-group">
          <button className="group-create">+</button>
        </Link>
        <table className="contact-list u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {group.map(item => (
              <tr key={item.id} id={item.id}>
                <td>{item.gname}</td>
                <td>
                  <button onClick={() => this.props.removeGroup(item)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, { removeGroup })(GroupList);
