# wx-mini-dialog

微信小程序-弹窗组件

#### 使用

1. 安装
```bash
 npm install --save wx-mini-dialog
```

2. 安装完成之后执行npm构建，[小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

3. 在你的页面json中添加
``` javascript
{
  "usingComponents": {
    "dialog":  "wx-mini-dialog"
  }
}
```

4. 在wxml中即可使用组件
``` html
 <button bindtap="changeStatus">button</button>
 <dialog visible="{{visible}}" bind:confirm="handleConfirm" bind:cancle="changeStatus">内容</dialog>
```

5. 在 js 文件中添加逻辑
``` javascript
Component({
  data: {
	visible: false	
  },
  changeStatus() {
	this.setData({ visible: !this.data.visible })
  },
  handleConfirm() {
	// do something
	this.changeStatus();
  }
})
```

#### 属性说明
|属性			 |类型		|默认值		|说明
|--             |--         |--         |--
|visible			|Boolean	|false		|控制弹窗显示隐藏
|type			|String		|center		|弹窗类型，有效值：center，bottom
|confirmText	|String		|确定		   |确认按钮文字内容
|cancleText		|String		|取消		   |取消按钮文字内容
|confirmColor	|String		|#07c160	|确认按钮颜色
|cancleColor	|String		|#666666	|取消按钮颜色
|showClose		|Boolean	|false		|是否显示 关闭按钮
|title			|String		|			|底部弹窗的标题
|showTitle  |Boolean  |     |底部弹窗是否展示标题

> tips：隐藏按钮只需要传入空字符串
