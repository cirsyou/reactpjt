import React from 'react';
// 局部加载样式表
import LayoutCss from '@/assets/style/layout.module.scss';
// 加载组件
import Propscom from '@/components/propscomponent';
const _htmlFun = `function App (props) {
  return (
    <div>
      这是react构造器
    </div>
  )
}`;
const _htmlClass = `
class App extends React.Component {
  render() {
    return (
      <div>这是react 利用class创建的组件</div>
    )
  }
}`

class Comview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '由父级组件传递给子组件的数据信息',
      changeMsg: '这个父组件更新区域'
    }
  }
  /**
   * 子父组件通信
   * @param {子组件修改父组件的内容} msg 
   */
  changeData (msg) {
    this.setState({
      changeMsg: msg
    })
  }
  render() {
    return (
      <div>
        <div className={LayoutCss.itm_title}>组件创建形式</div>
        <div>
          目前创建组件主要有形式：<br />
          1. 利用构造函数创建组件 <br />
          2. 利用class关键字创建组件
        </div>
        {/* 代码创建形式 */}
        <div className={LayoutCss.code_area}>
          <div className={LayoutCss.code_notes}>
            <code>
              // 方式1 利用构造函数形式<br />
              {_htmlFun}
              {/* function App (props) {
                return (
                  <div>
                    这是react构造器
                  </div>
                )
              } */}
              <br />
              // 方式2 利用class关键字生成<br />
              {_htmlClass}
              {/* class App extends React.Component {
                render() {
                  return (
                    <div>这是react 利用class创建的组件</div>
                  )
                }
              } */}
            </code>
          </div>
        </div>
        <div className={LayoutCss.itm_title}>
          组件创建形式的区别
        </div>
        <div>
          1）使用构造函数创建的组件时，只有props，没有自己的私有数据（this.state）和生命周期函数<br />
          2）使用class创建的组件，可以接收向组件传递的props外，也有自己的私有数据（this.state）和生命周期函数<br />
          注：用构造函数创建的组件是无状态组件，用class创建的组件是有状态组件。有无状态的组件本质的区别是有无state和有无生命周期函数。
        </div>
        <div className={LayoutCss.itm_title}>组件通信</div>
        <div>- 父组件利用props进行通信</div>
        <div>- 子组件利用调用父组件传递的方法更改数据</div>
        <div>
          <Propscom msg={this.state.msg} msgprops={this}></Propscom>
        </div>
        <div>{this.state.changeMsg}</div>
      </div>
    )
  }
}

export default Comview;
