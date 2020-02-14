import React from 'react';
// path.resolve(__dirname, '../src')
import CmtItem from '@/components/CmtItem';
import BaseStyle from '@/assets/style/style';
// 样式的第一层封装
const item = {'color': 'red', 'fontSize': '50px'};
// 样式的第二层封装
const styles = {
  item: {'color': 'red', 'fontSize': '30px'}
};
// 样式的第三层封装，放置在一个js文件中

export default class CmtList extends React.Component {
  constructor (props) {
    super();
    this.state = {
      'CommentList': [
        {
          id: 0,
          name: '张三',
          desc: '这是评论1'
        },
        {
          id: 1,
          name: '李四',
          desc: '这是评论2'
        },
        {
          id: 2,
          name: '王五',
          desc: '这是评论3'
        },
        {
          id: 3,
          name: '赵六',
          desc: '这是评论4'
        }
      ]
    }
  }
  render () {
    return (
      <div>
      {/* 在jsx写行内样式时，不能用style=""来写 */}
      {/* 需要用style={{color: 'red'}}, {}中放对象的形式 */}
      {/* 在行内样式中，如果是数值类型的样式，则可以不用引号包裹，如果是字符类型的样式则需要用引号包裹 */}
        <div style={{'color': 'red', 'textAlign': 'center'}}>react commentlist</div>
        <div style={item}>react commentlist</div>
        <div style={styles.item}>react commentlist</div>
        <div style={BaseStyle.item}>react commentlist</div>
        {/* 不使用子组件形式 */}
        <ul>
          {this.state.CommentList.map(item => 
           <li key={item.id}>
             <div>姓名：{item.name}</div>
             <div>评论内容：{item.desc}</div>
           </li>
          )}
        </ul>
        {/* 使用组件的形式 */}
        <ul>
          {this.state.CommentList.map(item => 
            <CmtItem key={item.id} {...item}></CmtItem>
          )}
        </ul>
      </div>
    )
  }
}