import React, {Component} from 'react';
import Dialog from '../Dialog';
import StickyNotes from '../StickyNotes';
import ColorPicker from '../ColorPicker';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content: "",
      color: "#000",
      selectedGroup: null,
      openAddDialog: false,
      openEditDialog: false,
      group: {
        title: "",
      },
    }
  }

  //   sendemail = async () => {
  //   const mailRes = await transport.sendMail({
  //     from: 'samwkahle@gmail.com',
  //     to: 'sam@blueprintinteractive.com',
  //     subject: 'A new note has been added!',
  //     html: makeANiceEmail(`To view the new note,
  //     \n\n
  //     <a href="##">Click Here</a>`),
  //   });
  //   return { message: 'Thanks!' };
  // };


  addGroup = () => {

    // sendemail();
    const { title, content, color } = this.state;
    this.props.addGroup({
      title,
      content,
      color,
    });
    this.setState({ title: "", content: "", openAddDialog: false })
  }


  editGroup = () => {
    const { group, selectedGroup } = this.state;
    const { state } = this;
    this.props.editGroup({
      title: group.title,
      content: group.content,
      color: group.color,
    }, group.slug, selectedGroup);
    this.setState({ ...state, group: { title: "" }, openEditDialog: false })
  }

  // goToNoteGroup = (group) => {
  //   this.props.changeRoute(`/group/${group.get('slug')}/${group.get('_id')}`);
  // }



  editOption = (group, selectedGroup) => {
    this.setState({
      openEditDialog: true,
      group: group.toJS(),
      selectedGroup,
    });
  }

  render() {
    const { groups } = this.props;
    const { state } = this;
    const { title, content, color, openAddDialog, openEditDialog, group } = this.state;

    return (
      <div className="container-fluid">
      <div className="row">
        <img style={{margin: "15px 5%", width: "50%", maxWidth: "300px" }} src="https://blueprintinteractive.com/sites/all/themes/blueprint/images/blueprint-logo.svg" />
        {groups.size > 0 && <button style={{ margin: "20px 5% 0 0", background: "#183E9E" }} className="btn btn-primary btn-lg pull-right" onClick={() => this.setState({ openAddDialog: true })}>
          <i className="fa fa-plus"></i> Add Note
        </button>}

        <br/>

        <p style={{ textAlign: "center" }}>Share what you are grateful for by clicking the "+ Add Note" button in the top right.</p>
      <Dialog
        open={openAddDialog}
        closeDialog={() => this.setState({ openAddDialog: false })}
      >
        <div className="container-fluid">
          <div className="col-xs-12">
            <input placeholder="Who is this note for..." type="text" style={{ margin: "1vh 0" }} value={title} className="form-control" onChange={(e) => this.setState({ title: e.target.value })} />
          </div>
          <div className="col-xs-12">
            <textarea value={content} placeholder="Why is this person awesome..." rows="4" cols="50" style={{ margin: "1vh 0" }} className="form-control" onChange={(e) => this.setState({ content: e.target.value })} />
          </div>
          <div className="col-xs-12">
            <ColorPicker color={color} changeColor={(color) => this.setState({ color: color.hex })} />
          </div>

          <div className="col-xs-12">
            <input type="button" disabled={title === "" && "disabled"} style={{ margin: "1vh 0", background: "#183E9E" }} value="Add Note" className="btn btn-primary btn-lg" onClick={this.addGroup} />
          </div>
        </div>
      </Dialog>

      <Dialog
        open={openEditDialog}
        closeDialog={() => this.setState({ openEditDialog: false })}
      >
        <div className="container-fluid">
          <div className="col-xs-12">
            <input placeholder="Who is this note for..." style={{ margin: "1vh 0" }} type="text" value={group.title} className="form-control" onChange={(e) => this.setState({ ...state, group: {  ...this.state.group, title: e.target.value } })} />
          </div>
          <div className="col-xs-12">
            <textarea placeholder="Enter your description here..." value={group.content||""} style={{ margin: "1vh 0" }} type="text" className="form-control" onChange={(e) => this.setState({ ...state, group: {  ...this.state.group, content: e.target.value } })} />
          </div>
          <div className="col-xs-12">
            <ColorPicker color={group.color} changeColor={(color) => this.setState({ ...state, group: { ...this.state.group, color: color.hex }})} />
          </div>
          <div className="col-xs-12">
            <input disabled={group.title === "" && "disabled"} style={{ margin: "1vh 0" }} type="button" value="Edit Note" className="btn btn-warning btn-lg" onClick={this.editGroup} />
          </div>

        </div>
      </Dialog>

      {
        <StickyNotes
          options={groups}
          editOption={this.editOption}
          deleteOption={this.props.deleteGroup}
          // handleClick={this.goToNoteGroup}
          clickWhenEmpty={() => this.setState({ openAddDialog: true })}
          labelWhenEmpty="Add Note"
        />
      }

      </div>
      </div>
    )
  }
}

export default Home;
