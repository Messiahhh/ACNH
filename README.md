### 动物森友会(AC_New_Horizons)游戏图鉴(Handbook)

感谢[ACNHAPI.COM](https://github.com/alexislours/ACNHAPI)提供的动森接口



##### 技术栈

React + Redux + React-Router + TypeScript + Antd + Sass





##### 记录

1. 遇到奇怪的报错

```shell
# 报错
Error: resolve-url-loader: CSS error
  source-map information is not available at url() declaration (no orphan CR found)
```

错误发生场景：SCSS

``` scss
// 不报错
background: url('static/images/hero.jpg'); 

// 加了一行后，报错
background: url('static/images/hero.jpg');
background-repeat: no-repeat;
```

怀疑和node-sass有关，[见链接](https://github.com/sass/node-sass/issues/2756)

解决方式：把换行符从CRLF改为LF。

2. React-router提供的Router组件使用的是history模式，若想使用hash模式则可以使用HashRouter组件。



