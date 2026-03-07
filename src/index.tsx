import React from 'react';
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: React.ReactElement[];
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isPlaying?: boolean;
  direction?: -1 | 1;
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

  const [tickerEl, setTickerEl] = React.useState<HTMLDivElement | null>(null);
  const [tickerContentsEl, setTickerContentsEl] = React.useState<HTMLDivElement | null>(null);

  const [tickerContentWidth, setTickerContentWidth] = React.useState<number>(2);
  const [numDupes, setNumDupes] = React.useState<number>(1);

  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = React.useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);

  React.useEffect(() => {
    if (tickerEl && tickerContentsEl) {
      const measure = () => {
        const contentWidth = tickerContentsEl.getBoundingClientRect().width;
        setTickerContentWidth(contentWidth);
        setNumDupes(Math.max(Math.ceil((2 * tickerEl.clientWidth) / contentWidth), 1));
      };

      measure();

      const observer = new ResizeObserver(measure);
      observer.observe(tickerEl);

      return () => observer.disconnect();
    }
  }, [tickerEl, tickerContentsEl]);

  React.useEffect(() => {
    if (isInView && tickerContentWidth > 2) {
      if (animationControls) {
        animationControls.stop();
      }
      const controls = animate(
        scope.current,
        { x: tickerContentWidth * direction },
        { ease: 'linear', duration, repeat: Infinity }
      );
      if (!isPlaying) {
        controls.pause();
      }
      setAnimationControls(controls);
    }
  }, [isInView, tickerContentWidth, direction, duration]);

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
      ref={setTickerEl}
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
        <div ref={setTickerContentsEl} style={{ display: 'flex' }}>
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
