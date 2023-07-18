Ant Design of React
Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.

 + 
✨ Features
🌈 Enterprise-class UI designed for web applications.
📦 A set of high-quality React components out of the box.
🛡 Written in TypeScript with predictable static types.
⚙️ Whole package of design resources and development tools.
🌍 Internationalization support for dozens of languages.
🎨 Powerful theme customization in every detail.
Environment Support
Modern browsers
Server-side Rendering
Electron
Edge
Edge	Firefox
Firefox	Chrome
Chrome	Safari
Safari	Opera
Opera	Electron
Electron
Edge	last 2 versions	last 2 versions	last 2 versions	last 2 versions	last 2 versions
Polyfills are needed for IE browsers. We recommend @babel/preset-env for it. You can set targets config if you are using umi.

Dropped support of IE8 after antd@2.0. Dropped support of React 15 and IE9/10 after antd@4.0. Dropped support of IE after antd@5.0.

Version
Stable: npm package
You can subscribe to this feed for new version notifications: https://github.com/ant-design/ant-design/releases.atom

Installation
Using npm or yarn or pnpm
We recommend using npm or yarn or pnpm to install, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

npm
yarn
pnpm
$ npm install antd --save
If you are in a bad network environment, you can try other registries and tools like cnpm.

Import in Browser
Add script and link tags in your browser and use the global variable antd.

We provide antd.js and antd.min.js reset.css under dist folder in antd's npm package. You can also download these files directly from CDNJS,  or unpkg.

We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using.

Note: You should import react、react-dom、dayjs before using antd.js.

Usage
import React from 'react';
import { DatePicker } from 'antd';

const App = () => {
  return <DatePicker />;
};

export default App;
Use modularized antd
antd supports ES modules tree shaking by default.
