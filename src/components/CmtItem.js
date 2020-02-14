import React from 'react';

export default class CmtItem extends React.Component {
  render () {
    return (
      <li>
        <div>姓名：{this.props.name}</div>
        <div>评论内容：{this.props.desc}</div>
      </li>
    )
  }
}
