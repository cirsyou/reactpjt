This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

react中利用构造函数与利用class关键字创建组件的区别，以及使用的选择

在react中，我们通常在创建组件时有以下两种形式：

// class关键字创建组件
import React from 'react';
export default class AppDemo extends React.Component {
  render () {
    return (
      <div>demo</div>
    )
  }
}
// 构造函数形式创建组件
import React from 'react';
export default function AppDemo (props) {
  return (
    <div>demo</div>
  )
}

它们两者在创建时候的区别有哪些呢？
1）使用构造函数创建的组件时，只有props，没有自己的私有数据（this.state）和生命周期函数
2）使用class创建的组件，可以接收向组件传递的props外，也有自己的私有数据（this.state）和生命周期函数
注：用构造函数创建的组件是无状态组件，用class创建的组件是有状态组件。有无状态的组件本质的区别是有无state和有无生命周期函数。

props是外界传递的，是只读的；而state/data数据是组件私有的，可读可写。

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

组件使用的选择
如果一个组件，需要使用自己的私有数据，则推荐使用有状态组件；如果一个组件不需要使用自己的私有数据，则推荐使用无状态组件。
React官网说：由于无状态组件无state和生命周期，在运行时效率比有状态组件高。

但指不定哪天需要用状态，所以推荐直接使用class创建组件。

另super的用法
1) 为什么要调用super
2) super是什么
3) 调用super时为什么会出现undefined

答：
1) 因为子类使用了extend关键字继承父类，按照语法规则，必须在constructor中优先调用super
2) super是一个函数，它是父类的构造器。子类的super函数，其实就是父类constructor函数的引用
3) 子类super需要传递对应的参数给父类的constructor函数

完结。
