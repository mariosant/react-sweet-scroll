# React Sweet Scroll

> Easily scroll within an element using hooks!

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-sweet-scroll.svg)](https://www.npmjs.com/package/@mariosant/react-sweet-scroll)
[![Build Status](https://travis-ci.org/mariosant/react-sweet-scroll.svg?branch=master)](https://travis-ci.org/mariosant/react-sweet-scroll)

### [Check out the example at CodeSandbox](https://codesandbox.io/s/mrvk2qlqp)

## Installation

Add `@mariosant/react-sweet-scroll` to your `package.json`.

```bash
$ npm install @mariosant/react-sweet-scroll

# or
$ yarn add @mariosant/react-sweet-scroll
```

You can now import the module and use it like

```javascript
import useScroll from '@mariosant/react-sweet-scroll';
```

## Usage

The hook accepts an array with dependencies which work exactly like `useEffect` and a set of options, similar to `scrollIntoView`.

It returns a component, that should be placed to the point the list container should scroll to.

Consider the example below.

```javascript
import useScroll from '@mariosant/react-sweet-scroll';
import List from './some-component';

const toString = JSON.stringify;

const Component = ({messages}) => {
    const ScrollPoint = useScroll([toString(messages)]);

    return (
        <List>
            {messages.map(...)}
            <ScrollPoint />
        </List>
    )
};
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license.

[https://github.com/mariosant/react-sweet-scroll](https://github.com/mariosant/react-sweet-scroll)

## Contributing

1. Fork it (<https://github.com/mariosant/react-sweet-scroll/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
