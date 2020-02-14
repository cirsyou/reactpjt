// css样式表使用
import React from 'react';
// 导入样式表
// 直接导入的样式，在全局都生效，并没有作用域的限制
import cssfile from '@/assets/css/cssfile.module.css'
// react中没有类似vue中scoped的指令，因为react中无指令概念
/**
 * react 中解决样式作用域的问题，使用了样式的模块化来解决，css-loader中启用模块化(modules),
 * 用creact-react-app工具创建的项目中，已经配置好了
 * 只需要文件名定义为：name.module.css 即会进行模块化加载
 */

export default class CssFile extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className={cssfile.title}>css file</div>
          <div className={cssfile.content}>title222</div>
        </div>
      </div>
    )
  }
}