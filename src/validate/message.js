// 验证信息本地化
export default {
  // name: 'zh',
  messages: {
    required: (fieldName) => `请输入${fieldName}`,
    confirmed: () => '两次输入不一致',
    regex: (fieldName) => `请输入正确的${fieldName}`,
    min: (fieldName) => `${fieldName}长度不够`
  }
}
