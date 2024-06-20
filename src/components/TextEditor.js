import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import "../styles/TextEditor.css";
import { Color } from "../const/color";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ``,
      editable: true,
      isOpenEdit: false,
      themeColor: ""
    };
  }
  componentDidMount() {
    // console.log(this.props)
    this.setState({
      html: this.props.data,
      themeColor: this.props.themeColor
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.themeColor !== this.state.themeColor) {
      this.setState({ themeColor: prevProps.themeColor });
    }
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });

    this.props.handleOnChangeName && this.props.handleOnChangeName(evt.target.value);
    this.props.handleOnChangeTitle && this.props.handleOnChangeTitle(evt.target.value);
    this.props.handleOnChangeContent && this.props.handleOnChangeContent(evt.target.value);
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "u", "ul", "li","div"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
    this.setState({
      html: sanitizeHtml(this.state.html, this.sanitizeConf),
      isOpenEdit: false
    });
    console.log(this.state.html)

    this.props.handleBlurData && this.props.handleBlurData(this.state.html);
    this.props.handleBlurTitle && this.props.handleBlurTitle(this.state.html);
    this.props.handleBlurContent && this.props.handleBlurContent(this.state.html);
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleShowEditButtons = () => {
    this.setState({
      isOpenEdit: true
    })
  }

  render = () => {
    let { isOpenEdit } = this.state
    // console.log(this.state.html)
    return (
      <div className="text-editor" id={this.props.id}>
        {isOpenEdit === true && (
          <div className="edit-buttons" >
            <EditButton cmd="bold" />
            <EditButton cmd="underline" />
            <EditButton cmd="italic" />
            <EditButton cmd="insertOrderedList" />
          </div>
        )}
        <ContentEditable
          className="editable"
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          onBlur={this.sanitize}
          onClick={this.handleShowEditButtons}
          style={{ color: Color[this.state.themeColor] }}
        />
      </div>
    );
  };
}

function EditButton(props) {
  const handleSetIcon = (cmd) => {
    switch (cmd) {
      case "italic": return <i className="fa fa-italic" aria-hidden="true"></i>
      case "bold": return <i className="fa fa-bold" aria-hidden="true"></i>
      case "underline": return <i className="fa fa-underline" aria-hidden="true"></i>
      case "insertOrderedList": return <i className="fa fa-list-ul" aria-hidden="true"></i>
      default: return <div></div>
    }
  }

  return (
    <button
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {handleSetIcon(props.cmd)}
    </button>
  );
}

export default TextEditor;
