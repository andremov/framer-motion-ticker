import React from 'react';
import { motion } from 'framer-motion';
import TickerProps from './types';
import './ticker.css';

const Ticker = ({ children, duration = 10 }: TickerProps) => {
  const tickerRef = React.useRef<HTMLDivElement>(null);

  const [tickerContentWidth, setTickerContentWidth] = React.useState<number>(2);
  const [numDupes, setNumDupes] = React.useState<number>(1);

  React.useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById('children_' + index)?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  });

  React.useEffect(() => {
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
        transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {children.map((item, index) => (
          <div key={index} id={`children_${index}`}>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <div key={index}>{item}</div>)
        )}
      </motion.div>
    </div>
  );
};

export default Ticker;
