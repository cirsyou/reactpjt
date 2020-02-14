// class关键字创建组件
import React from 'react';
export default class AppDemo extends React.Component {
  constructor (props) {
    // 由于创建组件时继承了React.Component父类，所以需要调用super.调用super之后才能使用this
    super();
    this.state = {
      name: '测试组件'
    } // this.state = {}; 这句话就相当于vue中data () { return {}}
  }
  render () {
    // 组件中的this 指向的是创建的组件对象
    return (
      <div>demo {this.state.name}</div>
    )
  }
}
// 构造函数形式创建组件
// import React from 'react';
// export default function AppDemo (props) {
//   return (
//     <div>demo {props.name}</div>
//   )
// }