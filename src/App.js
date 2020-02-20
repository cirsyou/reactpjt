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
  render() {
    return (
      <Router>
        <div className={LayoutCss.wrapper}>
          <header>
            <ul className={LayoutCss.nav_box}>
              <li>
                <Link to="/">概览</Link>
              </li>
              <li>
                <Link to="/componentview">组件</Link>
              </li>
              <li>
                <Link to="/event">事件</Link>
              </li>
              <li>
                <Link to="/lifecircle">生命周期</Link>
              </li>
              <li>
                <Link to="/routerview">路由</Link>
              </li>
              <li>
                <Link to="/example">实例</Link>
              </li>
            </ul>
          </header>
          <Route path="/" exact component={Home}></Route>
          <Route path="/componentview" component={Componentview}></Route>
          <Route path="/event" component={Event}></Route>
          <Route path="/lifecircle" component={Lifecircle}></Route>
          <Route path="/routerview" component={Routerview}></Route>
          <Route path="/example" component={Example}></Route>
          react app.
      </div>
      </Router>
    );
  }
}

export default App;
