import React from 'react';
import ExampleCss from '@/assets/style/example.module.scss';
import {Route, Link} from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <div className={ExampleCss.footer_wrapper}>
        <ul className={ExampleCss.footer_flex}>
          <li><Link to="/example/">外卖</Link></li>
          <li><Link to="/example/life">生活</Link></li>
          <li><Link to="/example/order">订单</Link></li>
          <li><Link to="/example/info">我的</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
