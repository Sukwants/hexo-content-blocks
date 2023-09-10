[en-US](../README.md) | zh-CN

# hexo-content-blocks

一个为 Hexo 设计的插件，可以使用带有样式的内容块，并且支持自定义哦。

样式意在复刻 [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material)。

它支持可折叠的内容框，不可折叠的内容块，以及可切换的内容卡。

要用它的话，直接写一个 Hexo 标签就可以啦。

如下。

<!--Needs-Fill-->

## 安装 & 预设

在工作目录下执行以下命令：

```sh
$ npm install hexo-content-blocks --save
```

在适用于所有页面的 `<head>` 标签的布局文件中（比方说 NexT 主题的  `themes/next/layout/_partials/head/head.njk`），加入下面几行：

```njk
{%- if config.content_blocks.enable %}
  <style type="text/css">{{ content_blocks_css() }}</style>
{%- endif %}
```

在站点配置文件里，加入以下几行：

```yml
# Content blocks
## Docs: https://github.com/Sukwants/hexo-content-blocks
content_blocks:
  enable: true
  open_button: fa fa-chevron-down
  types:
    note: "#448aff || fa fa-pen"
    abstract: "#00b0ff || fa fa-clipboard-list"
    info: "#00b8d4 || fa fa-circle-info"
    tip: "#00bfa5 || fa fa-fire"
    success: "#00c853 || fa fa-check"
    question: "#64dd17 || fa fa-circle-question"
    warning: "#ff9100 || fa fa-triangle-exclamation"
    failure: "#ff5252 || fa fa-xmark"
    danger: "#ff1744 || fa fa-bolt"
    bug: "#f50057 || fa fa-bug"
    example: "#7c4dff || fa fa-vial"
    quote: "#9e9e9e || fa fa-quote-right"
```

我们预先准备了 12 种类型，就像 [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material) 里的一样。

注意，你需要在你的站点中引用 Font Awesome 字体库，这样我们才能够使用图标。如果还没有，出门右转 [Font Awesome 说明文档 HTML + CSS 法](https://fontawesome.com/v6/docs/web/setup/host-yourself/webfonts)。

## 用法

### 内容块

你只需要在 Markdown 文件中写一个 Hexo 标签，就像这样：

```njk
{% contentblock Title type:Type %}
Content...
{% endcontentblock %}
```

将 `Content...` 替换为正文内容。

将 `Title` 替换为在首部显示的标题文字。默认是类型名。

将 `Type` 替换为你想要采用的类型，在预设或是你自定义的类型中选择。默认 `Note`。

只要你想，你就可以自定义类型。就在站点配置文件里我们添加的代码那里，像这样：

```yml
typename: color || icon
```

typename 随便起一个好听点的名字。color 需要是十六进制 RGB 代码，比方说 `448aff`、`"#448aff"`。图标字体是 Font Awesome，所以你需要在[Font Awesome](https://fontawesome.com/icons) 上面找到图标的代码。

### 内容框

```njk
{% contentbox Title type:Type [open] %}
Content...
{% endcontentbox %}
```

同内容块一样。

另外，如果添加了一句 `open`，折叠框就会默认展开。否则默认折叠。

### 内容卡

```njk
{% contentcards Title1 Title2 ... [type:Type | color: Color] %}
Content...
{% endcontentcards %}
```

如果指定了 `color`，将其作为主题颜色。否则如果指定了 `type`，将该预置类型的颜色作为主题颜色。

## 更新

在工作目录下执行以下命令：

```sh
$ npm install hexo-content-blocks --save
```

接下来，查阅以下指令，如果你正处于满足某个条件的版本，那你就需要执行下面的指令。

### v1.1.1 及以前

修改站点配置文件里的代码。

### v1.0.0 及以前

修改 head 文件里的代码。（事实上，这个是不必修改的。）

## 移除 & 清理

在工作目录下执行以下命令：

```sh
$ npm uninstall hexo-content-blocks --save
```

删除你在配置文件中加入的代码。你可以在 [安装 & 预设](#安装--预设) 里找到它们。

## 致谢

[Martin Donath](https://github.com/squidfunk) 和他的开源项目 [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material)。