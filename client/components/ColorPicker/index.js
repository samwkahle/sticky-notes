import React, {Component} from 'react';
import { ChromePicker } from 'react-color';


class ColorPickerField extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <p>Pick the color of your note:</p>
      <ChromePicker
        color={this.props.color||"#000"}
        onChangeComplete={this.props.changeColor}
      />
      </div>
    )
  }
}

export default ColorPickerField;
