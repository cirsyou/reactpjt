import React from 'react';
import {Route} from 'react-router-dom';
import ExampleCss from '@/assets/style/example.module.scss';
import Footer from '@/components/footer';
import Takeout from '@/views/Example/takeout';
import Life from '@/views/Example/life';
import Order from '@/views/Example/order';
import Info from '@/views/Example/info';

class Example extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className={ExampleCss.wrapper}>
        <Route exact path="/example/" component={Takeout}></Route>
        <Route path="/example/life" component={Life}></Route>
        <Route path="/example/order" component={Order}></Route>
        <Route path="/example/info" component={Info}></Route>
        <Footer></Footer>
      </div>
    )
  }
}

export default Example;
