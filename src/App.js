import React from 'react';
// 局部加载样式表
import LayoutCss from '@/assets/style/layout.module.scss';
// 引入路由文件
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// 引入页面组件
import Home from '@/views/Home';
import Componentview from '@/views/Component';
import Event from '@/views/Event';
import Lifecircle from '@/views/Lifecircle';
import Routerview from '@/views/Router';
import Example from '@/views/Example';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCurrent: 0 // 当前选中的menu
    }
  }
  /**
   * 切换选中的菜单
   */
  menuHandler(index) {
    this.setState({
      menuCurrent: index
    })
  }
  render() {
    return (
      <Router>
        <div className={LayoutCss.wrapper}>
          <header className={LayoutCss.header_box}>
            <ul className={LayoutCss.nav_box}>
              <li onClick={() => this.menuHandler(0)}>
                <Link to="/" className={(this.state.menuCurrent === 0) ? LayoutCss.current : ''}>概览</Link>
              </li>
              <li onClick={() => this.menuHandler(1)}>
                <Link to="/componentview" className={(this.state.menuCurrent === 1) ? LayoutCss.current : ''}>组件</Link>
              </li>
              <li onClick={() => this.menuHandler(2)}>
                <Link to="/event" className={(this.state.menuCurrent === 2) ? LayoutCss.current : ''}>事件</Link>
              </li>
              <li onClick={() => this.menuHandler(3)}>
                <Link to="/lifecircle" className={(this.state.menuCurrent === 3) ? LayoutCss.current : ''}>生命周期</Link>
              </li>
              <li onClick={() => this.menuHandler(4)}>
                <Link to="/routerview" className={(this.state.menuCurrent === 4) ? LayoutCss.current : ''}>路由</Link>
              </li>
              <li onClick={() => this.menuHandler(5)}>
                <Link to="/example" className={(this.state.menuCurrent === 5) ? LayoutCss.current : ''}>实例</Link>
              </li>
            </ul>
          </header>
          <div className={LayoutCss.midbox}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/componentview" component={Componentview}></Route>
            <Route path="/event" component={Event}></Route>
            <Route path="/lifecircle" component={Lifecircle}></Route>
            <Route path="/routerview" component={Routerview}></Route>
            <Route path="/example" component={Example}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
