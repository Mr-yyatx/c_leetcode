import { Redirect } from 'umi'

export default function Auth(props: any) {
  //获取本地缓存 localStorage的值
  const isLogin = true
  //如果这个值存在就返回正常内容
  if (isLogin) {
    return (
      <div>
        {props.children}
      </div>
    );
  } else {
    //如果这个值存在就重定向到登录页
    console.log('跳登录')
    return (<Redirect to='/404' />)
  }
}