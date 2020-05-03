### 动物森友会(Animal Crossing New Horizon)图鉴

特此感谢[acnhapi.com](https://github.com/alexislours/ACNHAPI)网站提供的数据接口



##### 技术栈

React(Hook) + Redux + React-Router + TypeScript + Antd + Sass + Axios





##### 记录

1. ``` shell
   # 报错
   Error: resolve-url-loader: CSS error
     source-map information is not available at url() declaration (no orphan CR found)
   ```

   错误发生场景

   ``` scss
   // 不报错
   background: url('static/images/hero.jpg'); 
   
   // 加了一行后，报错
   background: url('static/images/hero.jpg');
   background-repeat: no-repeat;
   ```

   怀疑问题的出现和node-sass有关，[见链接](https://github.com/sass/node-sass/issues/2756)。解决方式：把换行符从CRLF改为LF。

2. React-Router 提供了Router和HashRouter组件，前者默认用的history模式的路由，后者则是hash模式的路由。

3. 默认情况会加载antd所有组件的样式，会多大概60kb的bundle。

   [解决方式](https://ant.design/docs/react/use-in-typescript-cn#高级配置)

4. React中路由懒加载的两种方式 Loadable-Component VS React.lazy

   推荐使用官方的React.lazy，不过前者支持SSR

   另外可以搭配Suspense来实现fallback

   