en-US | [zh-CN](./zh-CN/README.md)

# hexo-content-blocks

A plugin for Hexo, which allows someone to use content block with styles. Customization supported.

Styles to be like [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material).

It supports foldable content boxes, non-foldable content blocks, and switchable content cards.

You can easily use it by writting a Hexo tag.

Demo.

<img alt="content-block-demo" src="https://github.com/Sukwants/hexo-content-blocks/assets/95968907/4e431d0e-c482-4308-9035-88db91f0d330" style="width:66%">
<img alt="content-box-demo" src="https://github.com/Sukwants/hexo-content-blocks/assets/95968907/02b31210-1a1a-42e1-8c94-f53f48ce3331" style="width:66%">
<img alt="content-cards-demo" src="https://github.com/Sukwants/hexo-content-blocks/assets/95968907/91c5c89d-323b-432b-ab45-f9fcaec3bc87" style="width:66%">
<img alt="multiple-styles-1" src="https://github.com/Sukwants/hexo-content-blocks/assets/95968907/ba52bc23-8f8f-4d35-b627-ce60b4eec7fd" style="width:33%">
<img alt="multiple-styles-2" src="https://github.com/Sukwants/hexo-content-blocks/assets/95968907/e034e2c5-54d3-4b25-83d1-f7a81d0b8d6c" style="width:33%">

## Install & Preset

Execute the following command in the working directory:

```sh
$ npm install hexo-content-blocks --save
```

In the universal layout file for `<head>` tags (For example, `themes/next/layout/_partials/head/head.njk` in theme NexT), simply add the following codes:

```njk
{%- if config.content_blocks.enable %}
  <style type="text/css">{{ content_blocks_css() }}</style>
{%- endif %}
```

In the site config file, simple add the following codes:

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

We have prepared 12 types in advance, like those in [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material).

ATTENTION. You need to import Font Awesome in your site, only in this way can we make the icons work. If haven't had, turn to [Font Awesome Docs for HTML + CSS Method](https://fontawesome.com/v6/docs/web/setup/host-yourself/webfonts).

## Usage

### Content Blocks

You can use it just by writing a tag in your Markdown file. Like this:

```njk
{% contentblock Title type:Type %}
Content...
{% endcontentblock %}
```

Replace `Content...` with the body content.

Replace `Title` with the title word given on the head line. It is the type name by default.

Replace `Type` with the type you want to use, chosen from preset or your custom types. It is `Note` by default.

You can custom type styles as long as you'd like to. Just add below the codes we added to site config file, like this:

```yml
typename: color || icon
```

Set typename as you like. The color needs to be hex RGB codes, like `448aff` or `"#448aff"`. The icon font is Font Awesome, so you should look for the code from [Font Awesome](https://fontawesome.com/icons).

### Content Box

```njk
{% contentbox Title type:Type [open] %}
Content...
{% endcontentbox %}
```

Tht same as the content block.

What's more, if you add an `open`, it means the content box will be open by default. Otherwise, it will be folded by default.

### Content Cards

```njk
{% contentcards Title1 Title2 ... [type:Type | color: Color] %}
Content1...
<!--card-break-->
Content2...
<!--card-break-->
...
{% endcontentcards %}
```

If `color` specified, use it as the theme color. Or if `type` specified, use the color of the preset type as the theme color.

## Update

Execute the following command in the working directory:

```sh
$ npm install hexo-content-blocks --save
```

Then read the following instructions and decide some of them to take. The version numbers mean if you are currently in a version that meets this condition, you need to take the instructions.

### v1.1.1 and before

Modify the codes put in the config file.

### v1.0.0 and before

Modify the codes put in the header file. (Actually, it doesn't matter.)

## Remove & Clear

Execute the following command in the working directory:

```sh
$ npm uninstall hexo-content-blocks --save
```

Delete the codes you have added into the files. You can find it in [Install & Preset](#install--preset).

## Thanks

To [Martin Donath](https://github.com/squidfunk) and his open-source project [Materials for MkDocs](https://github.com/squidfunk/mkdocs-material).
