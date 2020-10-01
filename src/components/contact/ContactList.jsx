import React from "react";
import "./contact.css";
import { connect } from "react-redux";
import {
  addFavourite,
  addRemovalQueue,
  undoQueue,
  cleanQueue,
  selectContact,
  selectAllContact,
} from "../../store/actions/contactActions";
import { Link } from "react-router-dom";
import {
  FcLikePlaceholder,
  FcLike,
  FcEmptyTrash,
  FcAddDatabase,
} from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Undo from "../utils/Undo";

class ContactList extends React.Component {
  state = {
    select: false,
    checkedAll: false,
  };

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({
      select: !this.state.select,
    });
  };

  handleAllSelect = () => {
    this.setState({
      checkedAll: !this.state.checkedAll,
    });

    this.props.selectAllContact(this.state.checkedAll);
  };

  handleFavourite = (bool) => {
    if (bool) return { color: "green" };

    return { color: "gray" };
  };

  notify = (item) => {
    this.props.addRemovalQueue(item);
    toast(<Undo onUndo={() => this.props.undoQueue(item)} />, {
      onClose: () => this.props.cleanQueue(),
    });
  };

  checkSelect = (item) => item.checked === 0;

  componentDidMount() {
    const checkedAll = this.props.contact.every(this.checkSelect);

    console.log(checkedAll);

    this.setState({
      ...this.state,
      checkedAll: checkedAll,
    });
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    const checkedAll = nextProps.contact.filter(item => item.checked);

    return prevState;
  } */

  render() {
    const { contact, group, removalQueue } = this.props;
    const { select } = this.state;
    return (
      <div className="row">
        <Link to="/create-contact">
          <FcAddDatabase style={{ fontSize: "30px" }} />
        </Link>
        <br />
        <button onClick={this.handleSelect}>Select</button>
        <table className="contact-list u-full-width">
          <thead>
            <tr>
              {select && <th onClick={this.handleAllSelect}>Select All</th>}
              <th>Name</th>
              <th>Workplace</th>
              <th>Add to favourite</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact
              .filter((item) => !removalQueue.includes(item))
              .map((item) => {
                const groupName = group.filter(
                  (group) => group.id === item.gname
                )[0];
                const { fav, checked } = item;
                return (
                  <tr key={item.id} id={item.id}>
                    {select && (
                      <td>
                        <input
                          type="checkbox"
                          name="contact"
                          id={item.id}
                          onChange={() =>
                            this.props.selectContact({ id: item.id, checked })
                          }
                          checked={item.checked === 1 || false}
                        />
                      </td>
                    )}
                    <td>
                      <Link
                        to={`/contact-list/${item.id}`}
                      >{`${item.fname} ${item.lname}`}</Link>{" "}
                    </td>
                    <td>{item.workplace}</td>
                    <td>
                      <span
                        role="img"
                        aria-label="1"
                        // style={this.handleFavourite(fav)}
                        onClick={() =>
                          this.props.addFavourite({ id: item.id, fav })
                        }
                      >
                        {item.favourite ? <FcLike /> : <FcLikePlaceholder />}
                      </span>
                    </td>
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
  contact: state.contact.contact,
  group: state.group.group,
  removalQueue: state.contact.queue,
});

export default connect(mapStateToProps, {
  addFavourite,
  addRemovalQueue,
  undoQueue,
  cleanQueue,
  selectContact,
  selectAllContact,
})(ContactList);
