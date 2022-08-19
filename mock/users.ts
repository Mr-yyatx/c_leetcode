const responseData = {
  status: 'ok',
  code: 200,
  data: "这是数据"
}
const userData = {
  status: 'ok',
  code: 200,
  data: { id: 1, name: 'yy' }
}

export default {
  '/api/getSomeData': responseData,
  '/api/getUserInfo': userData,
}