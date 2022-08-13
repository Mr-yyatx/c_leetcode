
import { code } from '@/constants/constants';
import { Modal, Button, InputNumber, message } from 'antd';
import { useState } from 'react';
import styles from './index.less';

export default (props: any) => {
  const [stoneNum, setStoneNum] = useState(0)
  const handleCancel = () => {
    setStoneNum(0)
    props.handleCancel()
  }
  const handleOk = () => {
    if (stoneNum < 0) {
      message.info('快点微信转账三百块')
      return
    }
    message.info('微信转账三百块我给你充')
    props.onChange(stoneNum)
    setStoneNum(0)
    props.handleOk()
  }
  const bodyStyle = {
    background: 'rgba(229,226,220)'
  }

  const onChange = (val: number) => {
    setStoneNum(val)
  }

  return (
    <Modal
      visible={props.visible}
      title={null}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={bodyStyle}
      footer={null}
      centered
    >
      <div className={styles.modal_body}>
        <InputNumber
          onChange={onChange}
          value={stoneNum}
          controls={false}
          size={'large'}
          style={{ width: '80%', borderRadius: '50px' }}
          defaultValue={0} />
        <img src={code} />
        <div className={styles.text}>微信转账三百块</div>
      </div>
      <div className={styles.confirm}>
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}>
          确定
        </Button>
      </div>
    </Modal>
  )
}