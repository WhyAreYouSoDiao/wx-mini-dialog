Component({
  properties: {
    // 类型： 中间模态框 center  底部弹出框 bottom
    type: { type: String, value: "center" },
    // 是否显示
    visible: { type: Boolean, value: false },
    // 确认按钮内容，如果要隐藏按钮，将内容设置为空
    confirmText: { type: String, value: "确定" },
    // 取消按钮内容，如果要隐藏按钮，将内容设置为空
    cancleText: { type: String, value: "取消" },
    // 按钮颜色
    confirmColor: { type: String, value: "#07c160" },
    cancleColor: { type: String, value: "#666666" },
    // 是否显示 关闭X 按钮
    showClose: { type: Boolean, value: false },
    // 底部弹窗的标题， 中间模态框没有标题这一说
    title: { type: String, value: "" },
    // 隐藏底部弹窗标题
    showTitle: { type: Boolean, value: true },
    // 底部弹窗的高度， 默认 320px
    height: { type: String, value: "320px" },
    // 中间模态框距离顶部的修改值，例如 0px, 默认没有，  模态框居中显示
    topFix: { type: String, value: "" },
    // 中间模态框的关闭按钮样式 normal  bottom
    closeType: { type: String, value: "normal" }
  },
  methods: {
    // 取消事件
    cancle() { this.triggerEvent("cancle"); },
    // 确认事件
    confirm() { this.triggerEvent("confirm"); }
  },
  options: { multipleSlots: true }
})
