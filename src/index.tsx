import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ticker.css';

const Ticker = ({ children }: { children: JSX.Element[] }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  const [tickerContentWidth, setTickerContentWidth] = useState<number>(2);
  const [numDupes, setNumDupes] = useState<number>(1);

  useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById('children_' + index)?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  });

  useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(Math.max(Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth), 1));
    }
  }, [tickerRef.current, tickerContentWidth]);

  return (
    <div className="FMT__container" ref={tickerRef}>
      <motion.div
        className="FMT__container__contents"
        initial={false}
        animate={{ x: -tickerContentWidth }}
        transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
      >
        {children.map((item, index) => (
          <div key={index} id={`children_${index}`} className="ticker__element">
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => (
            <div key={index} className="ticker__element">
              {item}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Ticker;
