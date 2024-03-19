# save-code

## Description

This is a simple project to save code snippets.

## Technologies

- electron
- vite
- vue3
- tailwindcss
- pinia
- bytemd
- antdv
- vue-router
- vue-codemirror 
- pinia-plugin-persistedstate

## Installation

```bash
npm install 
npm run dev

打包
npm run build:win
npm run build:mac
```
## Display



### 添加代码

可以选择代码的编程语言和编辑器的样式，输入代码片段的标题，在 md 编辑器中输入代码片段的内容，点击保存即可保存代码片段。

![](https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20240318230115.png)

### 代码中心

所有保存的代码都会显示在代码中心，可以通过标题搜索代码片段。点击代码右上角的语言标签可以直接复制。

右键某一个代码片段可以删除或者查看详情。

![](https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20240318230028.png)

### 配置

在此页面可以配置关闭窗口后再次从托盘弹出窗口的快捷键。

![20240319152753](https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20240319152753.png)