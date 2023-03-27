import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

type TickerProps = { children: JSX.Element[]; duration?: number };

export const Ticker: React.FunctionComponent<TickerProps> = ({ children, duration = 10 }: TickerProps) => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [tickerUUID, setTickerUUID] = React.useState<string>('');
  const [tickerContentWidth, setTickerContentWidth] = React.useState<number>(2);
  const [numDupes, setNumDupes] = React.useState<number>(1);

  React.useEffect(() => {
    setTickerUUID(uuidv4());
  }, []);

  React.useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById(tickerUUID + '_' + index)?.clientWidth;
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
    <div
      className="FMT__container"
      ref={tickerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="FMT__container__contents"
        initial={false}
        animate={{ x: -tickerContentWidth }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
        style={{ display: 'flex' }}
      >
        {children.map((item, index) => (
          <div key={index} id={`${tickerUUID}_${index}`}>
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

