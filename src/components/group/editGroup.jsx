import React, { Component } from 'react';
import {connect} from "react-redux";
import {editGroup} from "../../store/actions/groupActions";

class EditGroup extends Component {
    state = { id: "", gname: "" }

    componentDidMount() {
        this.setState({
            id: this.props.group.id,
            gname: this.props.group.gname
        })
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleOnSubmit = e => {
        const {id, gname} = this.state;
        e.preventDefault();
        const group = {
            id, gname
        }
        this.props.editGroup(group);
    }

    render() {
        const {gname} = this.state;
        return <div className="group">
        <h5>Edit Group</h5>
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="u-full-width"
            type="text"
            name="gname"
            value={gname ?? ""}
            placeholder="Group Name"
            onChange={this.handleOnChange}
          />
          <input
            onClick={this.handleOnSubmit}
            className="button-primary"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    }
}

const mapStateToProps = (state,props) => ({
    group: state.group.group.filter(item => item.id === props.match.params.id)[0]
});

export default connect(mapStateToProps, {editGroup})(EditGroup);