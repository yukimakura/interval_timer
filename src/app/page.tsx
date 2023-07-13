'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound'
import { InputNumber, Space } from 'antd';
import Button from './button'

export default function Home() {
  const [play] = useSound('./beep.mp3', { volume: 1, playbackRate: 2 });
  const [timedata, setTimedata] = useState(0);
  const [notifydata, setNotifydata] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false)
    const interval = setInterval(() => {
      setTimedata((x) => x + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(timedata, notifydata);
  if (timedata == notifydata) {
    play()
  }

  // if (isLoading) {
  //   return (
  //     <main>
  //       <center>
  //         <h1>よみこみなう</h1>
  //       </center>
  //     </main>
  //   )
  // }

  return (
    <main>
      <center>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <h1>{timedata}秒経過</h1>
          <p>ベルを鳴らす経過時間:{notifydata}秒</p><br />
          <InputNumber size='large' min={1} defaultValue={0} onChange={x => setNotifydata(ax => x ?? 0)} /><br />
          <Button onClick={() => {
            setTimedata(0);
          }}>リセット</Button>
        </Space>

      </center>
    </main>
  )
}
