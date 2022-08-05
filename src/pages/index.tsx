import React, { useEffect, useMemo, useState } from 'react';
import { useInterval, useDocumentVisibility } from 'ahooks';

import styles from './index.less';
import Col from './components/Col';

const IndexPage: React.FC = () => {
  const [colList, setColList] = useState([
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1639206751874.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1639206756460.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1642257781653.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1642500777187.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1639206751874.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1639206756460.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1642257781653.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1642500777187.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1644983335889.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026546636.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026554664.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026563375.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1644983335889.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026546636.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026554664.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026563375.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026569428.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026580343.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026587112.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026657793.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026569428.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026580343.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026587112.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645026657793.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977300835.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977304885.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977308803.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1650451654727.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977300835.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977304885.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1645977308803.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1650451654727.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679942095.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679943768.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679973223.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679982534.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679942095.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679943768.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679973223.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679982534.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679986725.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651680028884.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651680089418.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655547757153.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651679986725.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651680028884.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1651680089418.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655547757153.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655547760291.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655741588994.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1656067307030.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727418377.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655547760291.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1655741588994.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1656067307030.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727418377.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
    {
      imgList: [
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727422568.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727426278.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727429168.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727432884.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727422568.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727426278.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727429168.jpg',
          opacity: 1,
        },
        {
          url: 'https://read-1252195440.cos.ap-guangzhou.myqcloud.com/xy%2Fmmexport1658727432884.jpg',
          opacity: 1,
        },
      ],
      translateY: 0,
    },
  ])
  const [current, setCurrent] = useState(0)
  const documentVisibility = useDocumentVisibility()
  const delay = useMemo(() => {
    return documentVisibility === 'visible' ? 5000 : undefined
  }, [documentVisibility])
  const beginDate = new Date('2022-01-01 16:45').getTime()
  const [countDown, setCountDown] = useState([0, 0, 0, 0])
  const [showTransition, setShowTransition] = useState(false)

  useInterval(() => {
    if (current <= 3) {
      setShowTransition(true)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item0 = pre_[0].imgList[current]
          const item6 = pre_[6].imgList[current]
          item0.opacity = 0
          item6.opacity = 0
          return pre_
        })
      }, 1100)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          pre_[0].translateY -= 316
          pre_[6].translateY -= 316
          return pre_
        })
      }, 1100)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item1 = pre_[1].imgList[current]
          const item5 = pre_[5].imgList[current]
          item1.opacity = 0
          item5.opacity = 0
          return pre_
        })
      }, 940)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          pre_[1].translateY -= 316
          pre_[5].translateY -= 316
          return pre_
        })
      }, 940 + 350)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item2 = pre_[2].imgList[current]
          const item4 = pre_[4].imgList[current]
          item2.opacity = 0
          item4.opacity = 0
          return pre_
        })
      }, 850)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          pre_[2].translateY -= 316
          pre_[4].translateY -= 316
          return pre_
        })
      }, 850 + 350)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item3 = pre_[3].imgList[current]
          item3.opacity = 0
          return pre_
        })
      }, 500)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item3 = pre_[3].imgList[current]
          item3.opacity = 0
          pre_[3].translateY -= 316
          return pre_
        })
      }, 500 + 350)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          const item7 = pre_[7].imgList[current]
          item7.opacity = 0
          return pre_
        })
      }, 1460)
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          pre_[7].translateY -= 316
          return pre_
        })
      }, 1460 + 350)
      setCurrent(pre => pre + 1)
    } else {
      setShowTransition(false)
      setColList(pre => {
        const pre_ = [...pre]
        return pre_.map(colItem => {
          colItem.imgList = colItem.imgList.map(img => {
            return {
              ...img,
              opacity: 1,
            }
          })
          return colItem
        })
      })
      setTimeout(() => {
        setColList(pre => {
          const pre_ = [...pre]
          return pre_.map(colItem => {
            colItem.translateY = 0
            return colItem
          })
        })
      }, 1000)
      setCurrent(0)
    }
  }, delay)
  useInterval(
    () => {
      const secondsTotal = Math.trunc((Date.now() - beginDate) / 1000)
      const days = Math.trunc(secondsTotal / (3600 * 24))
      const hours = Math.trunc((secondsTotal - days * 3600 * 24) / 3600)
      const minutes = Math.trunc((secondsTotal - days * 3600 * 24 - hours * 3600) / 60)
      const seconds = secondsTotal - days * 3600 * 24 - hours * 3600 - minutes * 60
      setCountDown([
        days, hours, minutes, seconds
      ])
    },
    documentVisibility === 'visible' ? 1000 : undefined,
    {
      immediate: true,
    }
  )
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span style={{ color: '#ff5967', }}>我们，</span>
        已在一起{countDown[0]}天{countDown[1]}小时{countDown[2]}分{countDown[3]}秒
      </h1>
      <div className={styles['col-list']}>
        {
          colList.map((item, index) => {
            return (
              <Col
                key={index}
                imgList={item.imgList}
                translateY={item.translateY}
                showTransition={showTransition}
              />
            )
          })
        }
      </div>
      <div className={styles.mask} />
      <div className={styles.footer}>
        ©&nbsp;{new Date().getFullYear()}&nbsp;
        <a
          href='https://xikcloud.com/'
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >徐师傅和小尹</a>
        &nbsp;
        <a
          href='https://beian.miit.gov.cn/'
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >粤ICP备2021017315号</a>
      </div>
    </div>
  );
}
export default IndexPage;
