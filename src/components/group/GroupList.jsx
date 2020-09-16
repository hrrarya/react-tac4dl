import React, { Component } from "react";
import "./group.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeGroup } from "../../store/actions/groupActions";
import {FcEmptyTrash,FcAddDatabase} from 'react-icons/fc';
import {FcEditImage} from 'react-icons/fc';

class GroupList extends Component {
  render() {
    const { group } = this.props.group;
    return (
      <div className="row">
        <Link to="/create-group">
          <FcAddDatabase style={{fontSize: '30px'}}/>
        </Link>
        <table className="contact-list u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {group
              .filter(g => g.id !== "fabourite-group-id-i-am-arya")
              .map(item => (
                <tr key={item.id} id={item.id}>
                  <td>
                    <Link to={`/group-list/${item.id}`}>{item.gname}</Link>
                  </td>
                  <td>
                    <FcEmptyTrash onClick={() => this.props.removeGroup(item)} style={{fontSize: '22px'}} /> /  <Link to={`/group-edit/${item.id}`}><FcEditImage /></Link>
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
