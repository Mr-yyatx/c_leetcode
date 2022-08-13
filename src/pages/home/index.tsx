import { backImg, list, stonePay, prayList, animate, prayOneResult, prayTenResult } from '@/constants/constants';
import styles from './index.less';
import { useEffect, useState } from 'react';
import PayModal from './componets/PayModal';
import { DoubleRightOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { randomNum } from '@/utils';
import { message } from 'antd';

const Home = () => {
  const [showPayModal, setShowPayModal] = useState(false)
  const [stoneNum, setStoneNum] = useState(1600)
  const [nowChoice, setNowChoice] = useState(0)
  const [animateIndex, setAnimateIndex] = useState(0)
  const [beginAnimate, setBeginAnimate] = useState(false)
  const [displayPrayRes, setDisplayPrayRes] = useState(false)
  const [prayType, setPrayType] = useState(0)
  const [resultUrl, setResultUrl] = useState(prayOneResult[0])

  const prayResult = [prayOneResult, prayTenResult]

  let firstTimeout: NodeJS.Timeout, secondTimeout: string | number | NodeJS.Timeout | undefined
  const handleCancel = () => {
    setShowPayModal(false)
  }
  const handleOk = () => {
    setShowPayModal(false)
  }
  const openPayModal = () => {
    setShowPayModal(true)
  }
  const onChange = (val: number) => {
    setStoneNum(stoneNum => (stoneNum + val))
  }

  useEffect(() => {
    if (animateIndex == 2 && beginAnimate) {
      setTimeout(() => {
        setBeginAnimate(false)
        setAnimateIndex(0)
        setDisplayPrayRes(true)
      }, 1000)
    }
  }, [animateIndex])

  const handleBegin = () => {
    setBeginAnimate(true)
    firstTimeout = setTimeout(() => {
      setAnimateIndex(1)
    }, 1000)
    secondTimeout = setTimeout(() => {
      setAnimateIndex(2)
    }, 2000)
  }

  const colse = () => {
    if (firstTimeout) {
      clearTimeout(firstTimeout)
    }
    if (secondTimeout) {
      clearTimeout(secondTimeout)
    }
    setBeginAnimate(false)
    setAnimateIndex(0)
    setDisplayPrayRes(true)
  }

  const prayOne = () => {
    if (stoneNum < 160) {
      message.error('快给我微信转账三百块')
      return
    }
    let random = randomNum(prayResult[0].length - 1)
    setResultUrl(prayResult[0][random])
    setPrayType(0)
    handleBegin()
    setStoneNum(num => num - 160)
  }
  const prayTen = () => {
    if (stoneNum < 1600) {
      message.error('快给我微信转账三千块')
      return
    }
    let random = randomNum(prayResult[1].length - 1)
    setResultUrl(prayResult[1][random])
    setPrayType(1)
    handleBegin()
    setStoneNum(num => num - 1600)
  }

  return (
    <div className={styles.home}>
      {beginAnimate &&
        <div className={styles.animate}>
          <div className={styles.next}
            onClick={colse}>
            跳过<DoubleRightOutlined />
          </div>
          <img src={animate[animateIndex]} />
        </div>
      }

      {displayPrayRes &&
        <div className={styles.pary_result}
          onClick={() => {
            setDisplayPrayRes(false)
          }}>
          <div></div>
          <img src={resultUrl}
          />
        </div>
      }

      <PayModal visible={showPayModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onChange={onChange}
      />

      <img src={backImg} className={styles.img} />
      <div className={styles.main}>
        <div className={styles.border}>
          {list.map((item: string, index: number) => {
            return (
              <img src={item}
                key={index}
                className={styles.card}
                onClick={() => { setNowChoice(index) }}
                style={{
                  border: nowChoice == index ? '3px solid yellow' : 'none'
                }}
              />
            )
          })}
        </div>
        <div className={styles.table}>
          <div className={styles.table_head} onClick={openPayModal}>
            <div>
              <img src={stonePay} />
              {stoneNum}
              <PlusCircleOutlined style={{ color: "gray" }} />
            </div>
          </div>
          <div className={styles.table_center}>
            <img src={prayList[nowChoice]} />
          </div>
          <div className={styles.table_foot}>
            <span onClick={prayOne}>祈愿1次</span>
            <span onClick={prayTen}>祈愿10次</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home