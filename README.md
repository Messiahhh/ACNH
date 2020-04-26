### 练手玩玩

##### 技术栈

React + Redux + TypeScript + Antd + Sass



##### 记录遇到的坑

###### 坑1

```shell
# 报错
Error: resolve-url-loader: CSS error
  source-map information is not available at url() declaration (no orphan CR found)
```

错误发生场景

SCSS文件

``` scss
// 不报错
background: url('static/images/hero.jpg'); 

// 加了一行后，报错
background: url('static/images/hero.jpg');
background-repeat: no-repeat;
```



怀疑和node-sass有关，[见链接](https://github.com/sass/node-sass/issues/2756)

解决方式：把换行符从CRLF改为LF。



###### 坑2

（主要是不熟悉ts）

``` tsx
let { month, place, size} = useSelector((state: RootState) => state)
let m = useSelector((state: RootState) => state.month)
```

