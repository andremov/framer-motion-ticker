# Framer Motion Ticker

A simple ticker made with `framer-motion`. Infinitely and seamlessly scroll through elements.

## Basic Usage

```jsx
import React from 'react';
import Ticker from 'framer-motion-ticker';

function App() {
  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
  return (
    <div className="App">
      <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '5px',
              height: '250px',
              width: '200px',
            }}
          />
        ))}
      </Ticker>
    </div>
  );
}
export default App;
```

## Example

[Live Demo](https://framer-motion-ticker-example.netlify.app/)

[example repo](https://github.com/jiangbo2015/framer-motion-carousel/tree/main/example)

![example](https://cdn.jsdelivr.net/gh/jiangbo2015/framer-motion-carousel/img.jpg)

## props

| props            | type                                                                                 | default | description                                        |
| ---------------- | ------------------------------------------------------------------------------------ | ------- | -------------------------------------------------- |
| loop             | boolean                                                                              | true    | loop play                                          |
| autoPlay         | boolean                                                                              | true    | auto play                                          |
| interval         | number                                                                               | 2000    | auto play interval                                 |
| renderArrowLeft  | ({handlePrev: () => void, activeIndex: number}) => React.ReactNode                   | null    | custom your arrows, `activeIndex` is current index |
| renderArrowRight | ({handleNext: () => void, activeIndex: number}) => React.ReactNode                   | null    | custom your arrows, `activeIndex` is current index |
| renderDots       | ({activeIndex: number, setActiveIndex: (index: number) => void;}) => React.ReactNode | null    | custom your dots, `activeIndex` is current index   |

## example

```
cd example && yarn install

yarn dev
```
