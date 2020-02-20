## React框架研讨

### 创建项目
```javascript
//创建项目 
create-react-app pjtName
// 弹出项目配置 
npm run eject
// 启动项目 
npm start
```
### 项目结构

<img src="https://github.com/cirsyou/reactpjt/blob/master/src/assets/images/projectmenu.png" width="400" height="auto" />


### React基础
- 创建组件的形式<br />
React中创建组件有两种形式
```js
// 方式1 利用构造函数形式
function App (props) {
  return (
    <div>
      这是react构造器
    </div>
  )
}
// 方式2 利用class关键字生成
class App extends React.Component {
  render () {
    return (
      <div>这是react 利用class创建的组件</div>
    )
  }
}

/**
 * 两种组件创建组件的区别
 * 利用class关键字生成的组件有私有数据（state）且有生命周期，而利用构造函数生成的组件无
 * React官方文档说，因为构造函数创建的组件无私有数据与生命周期，在组件生成时的效率更高
 * 
 * 但我们在实际开发中，无法保证后续项目中不用使用生命周期或者私有数据，所以建议都使用class来创建组件。
 * /

```
- class创建组件时，super的作用
```text
用class关键字创建extents React.Component组件时，必须配套使用super.
super方法指向的是，父级对象的constructor函数.
super调用之后，才能使用this.
```


