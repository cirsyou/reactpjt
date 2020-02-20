import React from 'react';// 局部加载样式表
import LayoutCss from '@/assets/style/layout.module.scss';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: '<div>这是html标签</div>'
    }
  }
  render () {
    return (
      <div>
        {/* 项目创建 */}
        <div className={LayoutCss.itm_title}>项目创建</div>
        <div className={LayoutCss.code_area}>
          {/* 代码中的注释 */}
          <div className={LayoutCss.code_notes}>
            // 安装node.js  <a href="http://nodejs.cn/download/" target="_blank">http://nodejs.cn/download/</a>
          </div>
          <div className={LayoutCss.code_notes}>
            // 安装create-react-app
          </div>
          <div className={LayoutCss.code_line}>
            npm install create-react-app -g
          </div>
          <div className={LayoutCss.code_notes}>
            // 构建项目
          </div>
          <div className={LayoutCss.code_line}>
            create-react-app myreactpjt
          </div>
          <div className={LayoutCss.code_notes}>
            // 打开项目，并弹出配置
          </div>
          <div className={LayoutCss.code_line}>
            npm run eject<br />
            npm run start
          </div>
        </div>
        {/* 调整项目目录结构 */}
        <div className={LayoutCss.itm_title}>调整项目目录结构调整</div>
        <div className={LayoutCss.item_imgbox}>
          <img src={require('@/assets/images/projectmenu.png')} />
        </div>
        {/* 解析html */}
        <div dangerouslySetInnerHTML={{__html: this.state.msg}}></div>
      </div>
    )
  }
}

export default Home;
