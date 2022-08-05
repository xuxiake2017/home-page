import React from 'react';

import styles from './index.less';

export interface ColProps {
  imgList: {
    url: string;
    opacity: number;
  }[];
  translateY: number;
  showTransition: boolean;
}

const Col: React.FC<ColProps> = ({
  imgList,
  translateY,
  showTransition,
}) => {

  return (
    <div className={`${styles['col-item']}`}>
      <div
        className={styles.content}
      >
        <div
          className={styles.slider}
          style={{
            transform: `translateY(${translateY}px)`,
            transition: showTransition ? 'all 0.5s ease-in-out 0s' : 'none',
          }}
        >
          {
            imgList.map((item, index) => {
              return (
                <a
                  key={index}
                  style={{
                    opacity: item.opacity
                  }}
                >
                  <img src={item.url} />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Col