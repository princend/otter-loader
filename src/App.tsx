import  { JSX, useState, useEffect } from 'react';

import './App.css';

import { OtterLoading } from './otter-loading';

import BlogArticle from './BlogArticle';
import otter1Img from './assets/images/otter1.png';


function App(): JSX.Element {
  const [showOtter, setShowOtter] = useState(true);
  const [data, setData] = useState<string | null>(null);
  const techStack = [
    { name: 'React', version: '18.2.0' },
    { name: 'Bootstrap', version: '5' },
    { name: 'SCSS', version: '' },
  ];

  useEffect(() => {
    setShowOtter(true);
    setData(null);
    // 模擬載入資料
    const timer = setTimeout(() => {
      setData('這是載入完成的資料！');
      setShowOtter(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-4">   
      <div style={{ marginTop: 32 }}>
        {showOtter && <OtterLoading />}
        {!showOtter && (
          <section className="mb-5">
            <h2 className="h5 mb-3">水水滴水獺</h2>
            <BlogArticle
              image={otter1Img}
              title="可愛水獺的日常"
              content="水獺是一種非常聰明又愛玩的動物，牠們喜歡在水中游泳、打滾，也會用石頭敲開貝殼。這篇文章帶你認識水獺的日常生活與趣事。"
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
