# React-Text-Type
A react typewriter animation that handles delays, blinking duration, sustained blinking, size, and typing speed

## Installation
```
npm install --save react-text-type

yarn add react-text-type
```

## Usage
```
import Typewriter from 'react-text-type';
// const Typewriter = require('react-text-type');

// ...
render() {
    return (
        <Typewriter phrase="Hello World!" />
    );
}
```

## Props
| prop          | type   | default   | description   
| ------        | ------ | --------- | ------------- 
| phrase        | string | ''        | The phrase to render in typewriting animation
| fontSize      | string | '4em'     | Any acceptable css font-size
| delay         | number | 0         | The amount of time (in ms) before the animation starts
| typingSpeed   | number | 1000      | The amount of time (in ms) between letters animating
| blinkDuration | number | 500       | The amount of time (in ms) between caret blinks
| sustained     | boolean| false     | Whether or not the caret continues to blink after the animation has finished.

---

This is my first npm module so if there's an issue make an issue I'll get on it :)
