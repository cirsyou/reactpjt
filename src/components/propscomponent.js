import React from 'react';

class Propscom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changeData () {
    this.props.msgprops.changeData('子组件修改父组件的数据了!!!');
  }
  render() {
    return (
      <div>
        <div>{this.props.msg}</div>
        <button onClick={() => this.changeData()}>点击更改父组件的数据</button>
      </div>
    )
  }
}

export default Propscom;
