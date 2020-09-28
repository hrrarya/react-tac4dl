import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import {
  removeContact,
  addRemovalQueue,
  undoQueue,
  cleanQueue,
} from "../../store/actions/contactActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Undo from "../utils/Undo";

class Favourite extends Component {
  notify = (item) => {
    this.props.addRemovalQueue(item);
    toast(<Undo onUndo={() => this.props.undoQueue(item)} />, {
      onClose: () => this.props.cleanQueue(),
    });
  };

  render() {
    const { favourites, group, removalQueue } = this.props;
    return (
      <div className="row">
        <Link to="/create-contact">
          <FcAddDatabase style={{ fontSize: "30px" }} />
        </Link>
        <table className="contact-list u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Workplace</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {favourites
              .filter((item) => !removalQueue.includes(item))
              .map((item) => {
                const groupName = group.filter(
                  (group) => group.id === item.gname
                )[0];
                return (
                  <tr key={item.id} id={item.id}>
                    <td>
                      <Link
                        to={`/contact-list/${item.id}`}
                      >{`${item.fname} ${item.lname}`}</Link>{" "}
                    </td>
                    <td>{item.workplace}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`/group-list/${item.gname}`}>
                        {groupName ? groupName.gname : ""}
                      </Link>
                    </td>
                    <td>
                      <FcEmptyTrash
                        onClick={() => this.notify(item)}
                        style={{ fontSize: "22px" }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <ToastContainer closeOnClick={false} closeButton={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.contact.contact.filter((item) => item.favourite),
  group: state.group.group,
  removalQueue: state.contact.queue,
});

export default connect(mapStateToProps, {
  removeContact,
  addRemovalQueue,
  undoQueue,
  cleanQueue,
})(Favourite);
