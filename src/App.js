import React from 'react';
// 局部加载样式表
import LayoutCss from '@/assets/style/layout.module.scss';
// 引入路由文件
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={LayoutCss.wrapper}>

          react app
      </div>
      </Router>
    );
  }
}

export default App;
