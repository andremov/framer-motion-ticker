# Framer Motion Ticker

A simple ticker made with `framer-motion`. Infinitely and seamlessly scroll through elements.

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

# Installation

```
npm install framer-motion-ticker
```

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

## Examples

[Live Demo](https://framer-motion-ticker-example.netlify.app/)

[example repo](https://github.com/andremov/framer-motion-ticker/tree/main/example)

## Ticker props

| props    | type   | default | description             |
| -------- | ------ | ------- | ----------------------- |
| duration | number | 10      | duration of one segment |

## Using the Ticker example folder

```
cd example && npm install

npm run dev
```

[npm-downloads-image]: https://badgen.net/npm/dm/framer-motion-ticker
[npm-downloads-url]: https://npmcharts.com/compare/framer-motion-ticker?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/framer-motion-ticker
[npm-install-size-url]: https://packagephobia.com/result?p=framer-motion-ticker
[npm-url]: https://npmjs.org/package/framer-motion-ticker
[npm-version-image]: https://badgen.net/npm/v/framer-motion-ticker
