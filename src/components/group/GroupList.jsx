import React, { Component } from "react";
import "./group.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addRemovalQueue,
  undoQueue,
  cleanQueue,
} from "../../store/actions/groupActions";
import { FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import Undo from "../utils/Undo";

class GroupList extends Component {
  notify = (item) => {
    this.props.addRemovalQueue(item);
    toast(<Undo onUndo={() => this.props.undoQueue(item)} />, {
      onClose: () => this.props.cleanQueue(),
    });
  };

  render() {
    const { group, queue } = this.props;
    return (
      <div className="row">
        <Link to="/create-group">
          <FcAddDatabase style={{ fontSize: "30px" }} />
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
              .filter(
                (g) =>
                  g.id !== "fabourite-group-id-i-am-arya" && !queue.includes(g)
              )
              .map((item) => (
                <tr key={item.id} id={item.id}>
                  <td>
                    <Link to={`/group-list/${item.id}`}>{item.gname}</Link>
                  </td>
                  <td>
                    <FcEmptyTrash
                      onClick={() => this.notify(item)}
                      style={{ fontSize: "22px" }}
                    />{" "}
                    /{" "}
                    <Link to={`/group-edit/${item.id}`}>
                      <FcEditImage />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ToastContainer closeButton={false} closeOnClick={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group.group,
  queue: state.group.queue,
});

export default connect(mapStateToProps, {
  addRemovalQueue,
  undoQueue,
  cleanQueue,
})(GroupList);
