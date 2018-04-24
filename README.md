安装sass或less（以sass为例）

npm install sass-loader node-sass --save-dev

安装后修改config -> webpack.config.dev.js 和 webpack.config.prod.js，分别在css的loader配置里面修改两处：
一是 test: /\.css$/ 增加scss和sass；二是use里面最后再加个loader，直接加 "sass-loader" 就可以了，也不用配置别的了（less同）。
//test: /\.css$/
test: /\.(css|scss|sass)$/
...
use:[
  {
  ...
  },
  "sass-loader"
]

使用mobx
    "mobx": "^3.4.1",
    "mobx-react": "^4.3.5",
    "mobx-react-devtools": "^4.2.15",

使用装饰器
    "babel-plugin-transform-decorators-legacy": "^1.3.4",

"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": ["transform-decorators-legacy"]
},
