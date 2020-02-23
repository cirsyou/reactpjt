import React from 'react';
// 局部加载样式表
import LayoutCss from '@/assets/style/layout.module.scss';
const _htmlParam = `<div dangerouslySetInnerHTML={{__html: this.state.msg}}></div>`;
const _imgInsert = `<img src={require('@/assets/images/projectmenu.png')} />`;


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
        <div className={LayoutCss.itm_title}>react中html解析方式</div>
        <div className={`${LayoutCss.code_area} ${LayoutCss.globalColor_white}`}>
          react中在标签中直接插入html的字段，会被当作是字符串进行解析了，想实现如Vue中 v-html的功能，这个时候
          我们需要用到标签的dangerouslySetInnerHTML属性，它的使用方式如下：<br />
          <div className={LayoutCss.code_notes}>{_htmlParam}</div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.msg}}></div>

        {/* react中插入图片的形式 */}
        <div className={LayoutCss.itm_title}>react中插入图片</div>
        <div className={`${LayoutCss.code_area} ${LayoutCss.globalColor_white}`}>
          在react插入图片可利用下述形式：<br />
          <div className={LayoutCss.code_notes}>{_imgInsert}</div>

        </div>

      </div>
    )
  }
}

export default Home;
