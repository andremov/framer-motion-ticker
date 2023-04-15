import React from 'react';
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: JSX.Element[];
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isPlaying?: boolean;
  direction?: number;
};

const noop = () => {};

const Ticker: React.FunctionComponent<TickerProps> = (props: TickerProps) => {
  const {
    children,
    duration = 10,
    onMouseEnter = noop,
    onMouseLeave = noop,
    isPlaying = true,
    direction = TICKER_DIRECTION_LEFT,
  } = props;

  const tickerRef = React.useRef<HTMLDivElement>(null);
  const tickerContentsRef = React.useRef<HTMLDivElement>(null);

  const [tickerContentWidth, setTickerContentWidth] = React.useState<number>(2);
  const [numDupes, setNumDupes] = React.useState<number>(1);

  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = React.useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);

  React.useEffect(() => {
    if (tickerRef.current && tickerContentsRef.current) {
      const contentWidth = tickerContentsRef.current.getBoundingClientRect().width;
      setTickerContentWidth(contentWidth);
      setNumDupes(Math.max(Math.ceil((2 * tickerRef.current.clientWidth) / contentWidth), 1));
    }
  }, [tickerRef.current, tickerContentsRef.current]);

  React.useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: tickerContentWidth * direction },
        { ease: 'linear', duration, repeat: Infinity }
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [isInView]);

  React.useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying]);

  return (
    <div
      className="FMT__container"
      ref={tickerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={scope}
        className="FMT__container__contents"
        style={{
          display: 'flex',
          width: 'max-content',
          marginLeft: `-${tickerContentWidth * numDupes}px`,
        }}
      >
        <div style={{ display: 'flex' }}>
          {[...Array(numDupes)].map((_) =>
            children.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)
          )}
        </div>
        <div ref={tickerContentsRef} style={{ display: 'flex' }}>
          {children.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {[...Array(numDupes)].map((_) =>
            children.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticker;

export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT };
