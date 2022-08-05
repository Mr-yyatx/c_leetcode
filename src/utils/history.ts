
import { history } from 'umi';

export default {
  push: (url: string) => {
    history.push(url)
  }
}