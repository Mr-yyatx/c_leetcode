const userData = {
  status: 'ok',
  code: 200,
  data: [{
    id: 'comment_001',
    user_id: 1,
    content: '这是一个评论',
    user_avator: 'https://p26-passport.byteacctimg.com/img/user-avatar/7df4f996a164e027daf697d806299833~300x300.image',
    company: 'software',
    gmtCreated: new Date('2022-8-18 16:04:30').getTime()
  }, {
    id: 'comment_002',
    user_id: 1,
    content: '今天还没吃饭呢',
    user_avator: 'https://p26-passport.byteacctimg.com/img/user-avatar/7df4f996a164e027daf697d806299833~300x300.image',
    company: 'software',
    gmtCreated: new Date('2022-8-19 11:24:19').getTime()
  }]
}

export default {
  '/api/getComments': userData
}