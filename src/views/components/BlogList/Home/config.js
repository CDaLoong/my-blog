export const elementList = {
  rootEle: [
    {
      element: 'html',
      name: '<html>',
      description: 'Document root element.<br>文档根元素',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/html'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-html-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#66CCCC',
    }
  ],

  scriptEle: [
    {
      element: 'head',
      name: '<head>',
      description: 'First element of the HTML document. Contains document metadata.<br>HTML文档中的第一个元素。包含文档元数据',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/head'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-head-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'title',
      name: '<title>',
      description: 'Columns in a table.<br>表格中的列。为表格中的一个或多个列定义属性值。您只能在表格或列组中使用该元素',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/title'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-title-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'meta',
      name: '<meta>',
      description: 'Document metadata that can\'t be represented with other elements.<br />文档的元数据。<br />meta元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。meta标签位于文档的头部，不包含任何内容。meta标签的属性定义了与文档相关联的名称/值对。<br /><br />在 HTML 5 中，不再支持 scheme 属性。 在 HTML 5 中，有一个新的 charset 属性，它使字符集的定义更加容易。<ahref="http://www.html5star.com/manual/html5/html5_meta.htm"target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/meta'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#meta'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'base',
      name: '<base>',
      description: 'Specifies URL which non-absolute URLs are relative to.<br />定义非绝对的链接地址所相对的默认 URL。<br />&lt;base&gt;标签规定页面中所有链接的基准 url。<a href="http://www.html5star.com/manual/html5/html5_base.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/base'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-base-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'link',
      name: '<link>',
      description: 'Other resources related to the document.<br>与文档相关的其它资源。<br>\n' +
        '                            注释：link 元素是空元素，它仅包含属性。<br>\n' +
        '\n' +
        '                            此元素只能存在于 head 部分，不过它可出现任意次数。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_link.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/link'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-link-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'noscript',
      name: '<noscript>',
      description: 'Contains elements that are part of the document only if scripting is disabled.<br>当脚本被禁用时显示的一部分文档内容。<br><br>\n' +
        '\n' +
        '                            注释：如果浏览器支持脚本，那么它不会显示出 noscript 元素中的文本。<br>\n' +
        '\n' +
        '                            注释：无法识别 &lt;script&gt; 标签的浏览器会把标签的内容显示到页面上。为了避免浏览器这样做，您应当在注释标签中隐藏脚本。老式的（无法识别 &lt;script&gt; 标签的）浏览器会忽略注释，这样就不会把标签的内容写到页面上，而新式的浏览器则懂得执行这些脚本，即使它们被包围在注释标签中！',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/noscript'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/scripting-1.html#the-noscript-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'style',
      name: '<style>',
      description: 'Styling defined inline data.<br>在文档中定义的样式。<br><br>\n' +
        '\n' +
        '                            scoped 属性是 HTML 5 中的新属性，它允许我们为文档的指定部分定义样式，而不是整个文档。\n' +
        '                            在 HTML 5 中，所有元素都不支持 style 属性，如需为一个元素添加样式，请在 style 元素中使用 scoped 属性。<br><br>\n' +
        '\n' +
        '                            注释：如果没有定义 scoped 属性，则 &lt;style&gt;元素必须是 head 元素的子元素，或者是（属于 head 元素的子元素的） noscript 元素的子元素。\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_style.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/style'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/semantics.html#the-style-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: 'script',
      name: '<script>',
      description: 'Inline or linked client side scripts.<br>内部或外部链接的脚本。<br>\n' +
        '                            如果 async 属性为 true，则脚本会相对于文档的其余部分异步执行，这样脚本会可以在页面继续解析的过程中来执行。\n' +
        '                            如果 async 属性为 false，而 defer 属性为 true，则脚本会在页面完成解析时得到执行。\n' +
        '                            如果 async 和 defer 属性均为 false，那么脚本会立即执行，页面会在脚本执行完毕继续解析。<br><br>\n' +
        '\n' +
        '                            提示：如果存在 src 属性，则 &lt;script&gt; 标签必须是空的。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_script.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/script'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/scripting-1.html#script'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCCCFF',
    }
  ],

  documentEle: [
    {
      element: 'body',
      name: '<body>',
      description: 'Document content.<br />文档的主体。<br />在 HTML 5 中，删除了所有 &lt;body&gt; 的特殊属性。而那些属性在 HTML 4.01 中是不被赞成使用的',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/body'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-body-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'aside',
      name: '<aside>',
      description: 'Content related to surrounding elements that doesn\'t belong inline, such as a advertising or quotes.<br />与周围元素相关的内容，但分开显示<br />定义 article 以外的内容。aside 的内容应该与 article 的内容相关。<br />aside标签是 HTML 5 的新标签。<a href="http://www.html5star.com/manual/html5/html5_aside.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/aside'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-aside-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'header',
      name: '<header>',
      description: ' Navigation or introductory elements for the current section.<br />当前章节的导航或引导性元素<br />header标签定义 section 或 document 的页眉。<br />header标签是 HTML 5 中的新标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/header'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-header-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'footer',
      name: '<footer>',
      description: 'Footer of the current section.<br>当前章节的页脚。<br>\n' +
        '                            &lt;footer&gt; 标签定义 section 或 document 的页脚。典型地，它会包含创作者的姓名、文档的创作日期以及/或者联系信息。<br>\n' +
        '                            &lt;footer&gt;标签是 HTML 5 中的新标签。<br><br>\n' +
        '\n' +
        '                            提示：假如您使用 footer 来插入联系信息，应该使用 &lt;address&gt; 元素。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/footer'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-footer-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'nav',
      name: '<nav>',
      description: 'Contains a collection of links.<br />导航链接的容器。<br />&lt;nav&gt; 标签是 HTML 5 中的新标签。<br /><br />提示：如果文档中有“前后”按钮，则应该把它放到 &lt;nav&gt; 元素中。<a href="http://www.html5star.com/manual/html5/html5_nav.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/nav'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-nav-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'article',
      name: '<article>',
      description: 'Section of the page content, such as a blog or forum post.<br>\n' +
        '                            页面内容的独立部分，如博客文章、论坛帖子<br>\n' +
        '                            &lt;article&gt;标签是 HTML 5 的新标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/article'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-article-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'section',
      name: '<section>',
      description: 'Contains elements grouped by theme, for example a chapter or tab box.<br />定义文档中的节（section）。比如章节、页眉、页脚或文档中的其他部分。<br /><br />&lt;section&gt; 标签是 HTML 5 中的新标签',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/section'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-section-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'hgroup',
      name: '<hgroup>',
      description: 'Collection of headings for the current section. The highest ranked heading represents the group in the document outline.<br>当前章节各标题的组合',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hgroup'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-hgroup-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'address',
      name: '<address>',
      description: 'Contact information for the current article.<br />当前文章的联系信息。<br /><br />注释：address 通常被呈现为斜体。大多数浏览器会在 address元素的前后添加一个换行符，不过如果有必要的话，您需要在地址文本的内容添加额外的换行符。<a href="http://www.html5star.com/manual/html5/html5_address.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/address'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-address-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h1',
      name: '<h1>',
      description: 'Heading for the current section.<br />当前章节的标题。<br /><br />&lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。 由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。<br /><br />在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。 在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h2',
      name: '<h2>',
      description: 'Heading for the current section.<br />当前章节的标题。<br /><br />&lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。 由于 h元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。<br /><br />在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。 在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h3',
      name: '<h3>',
      description: 'Heading for the current section.<br />当前章节的标题。<br /><br />&lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。 由于 h元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。<br /><br />在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。 在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h4',
      name: '<h4>',
      description: 'Heading for the current section.<br>\n' +
        '                            当前章节的标题。<br><br>\n' +
        '\n' +
        '                            &lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。\n' +
        '                            由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层                     叠样式表定义来达到漂亮的显示效果。<br><br>\n' +
        '                            在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。\n' +
        '                            在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h5',
      name: '<h5>',
      description: 'Heading for the current section.<br>\n' +
        '                            当前章节的标题。<br><br>\n' +
        '\n' +
        '                            &lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。\n' +
        '                            由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层                     叠样式表定义来达到漂亮的显示效果。<br><br>\n' +
        '                            在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。\n' +
        '                            在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: 'h6',
      name: '<h6>',
      description: 'Heading for the current section.<br>\n' +
        '                            当前章节的标题。<br><br>\n' +
        '\n' +
        '                            &lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。\n' +
        '                            由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层                     叠样式表定义来达到漂亮的显示效果。<br><br>\n' +
        '                            在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被赞成使用。\n' +
        '                            在 HTML 5 中，h1 - h6 元素的 "align" 属性不被支持。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hn/'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FFCCCC',
    }
  ],

  textEle: [
    {
      element: 'span',
      name: '<span>',
      description: 'Container with no semantic meaning.<br>无语义的容器',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/span'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-span-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'a',
      name: '<a>',
      description: 'Hyperlink.<br />超链接。<br />在 HTML 4.01 中，&lt;a&gt;标签既可以是超链接，也可以是锚。这取决于是否描述了 href 属性。 在 HTML 5 中，&lt;a&gt;是超链接，但是假如没有 href 属性，它仅仅是超链接的一个占位符。 HTML 5 有一些新的属性，同时不再支持一些 HTML 4.01的属性',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/a'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-a-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'rt',
      name: '<rt>',
      description: 'Annotation of preceding text.<br />文本的解释<br />',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/rt'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-rt-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'dfn',
      name: '<dfn>',
      description: 'Term being defined by the parent section.<br />由父级章节定义的项<br /><a href="http://www.html5star.com/manual/html5/html5_phrase_elements.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'em',
      name: '<em>',
      description: 'Text that should be emphasised.<br />需要强调的文本。<br /><a href="http://www.html5star.com/manual/html5/html5_phrase_elements.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-em-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'i',
      name: '<i>',
      description: 'Text in a alternate voice or mood, such as a technical term.<br />斜体的文本。<br />&lt;i&gt; 标签定义与文本中其余部分不同的部分，并把这部分文本呈现为斜体文本。在没有其他元素可以使用时，比如 &lt;b&gt;,&lt;cite&gt;, &lt;dfn&gt;, &lt;em&gt;, &lt;q&gt;, &lt;small&gt;, &lt;strong&gt;，请使用 &lt;i&gt; 标签。<br /><br />在 HTML 4.01 中，存在着一种理解，即应该使用 CSS 来制作斜体文本。在 HTML 5 中，情况没有改变，但是你应该使用 &lt;i&gt;标签把部分文本定义为某种类型，而不只是利用它在布局中所呈现的样式。<a href="http://www.html5star.com/manual/html5/html5_i.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/i'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-i-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'small',
      name: '<small>',
      description: 'An aside, such as fine print.<br />更小的旁注信息。<br />&lt;small&gt; 标签制作更小字号的文本。<br />在 HTML 5 中不支持&lt;small&gt;标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/small'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-small-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'ins',
      name: '<ins>',
      description: 'Text that has been inserted during document editing.<br />在文档编辑过程中插入的文本。<br />&lt;ins&gt;标签定义文档的其余部分之外的插入文本。<br />提示：请与 &lt;del&gt; 标签一起使用，来描述对文档的更新和修正。<a href="http://www.html5star.com/manual/html5/html5_ins.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/ins'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/edits.html#the-ins-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 's',
      name: '<s>',
      description: 'Text that is outdated or no longer accurate.<br />失效或不再准确的文本。<br />&lt;s&gt;标签定义加删除线的文本。HTML 5 中不再支持这个标签。请使用 CSS 代替。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/table'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-table-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'rp',
      name: '<rp>',
      description: 'Contains semantically meaningless markup for browsers that don\'t understand ruby annotations.<br />针对不支持ruby注音的浏览器，用于注释信息',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/rp'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-rp-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'abbr',
      name: '<abbr>',
      description: 'Abbreviation or acronym.<br />缩写或缩略词。<br />表示一个缩写形式，比如"Inc."、"etc."。通过对缩写词语进行标记，您就能够为浏览器、拼写检查程序、翻译系统以及搜索引擎分度器提供有用的信息。<br />&lt;abbr&gt;标签最初是在 HTML 4.0 中引入的，表示它所包含的文本是一个更长的单词或短语的缩写形式。浏览器可能会根据这个信息改变对这些文本的显示方式，或者用其他文本代替。也许当前流行的浏览器对&lt;abbr&gt;标签中包含的文本还没有任何处理方式，但是我们无法预测将来的版本将会如何实现该标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/abbr'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-abbr-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'time',
      name: '<time>',
      description: 'Time defined in a machine readable format.<br />定义日期或时间，或者两者。<br /><br />&lt;time&gt;标签是 HTML 5 中的新标签。<br /><a href="http://www.html5star.com/manual/html5/html5_time.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/time'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-time-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'b',
      name: '<b>',
      description: 'Stylistically separated text of equal importance, such as a product name.<br />粗体文本，用于强调',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/b'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-b-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'strong',
      name: '<strong>',
      description: ' Text that is important.<br />重要的文本。<br /><br />在 HTML4.01中，&lt;strong&gt; 定义语气更重的强调文本，但是在 HTML 5 中，&lt;strong&gt;定义重要的文本。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-strong-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'del',
      name: '<del>',
      description: 'Text that has been removed during document editing.<br />在编辑过程中被删除的文本。<br /><br />提示：与 &lt;ins&gt; 一起使用，描述文档中的更新和修正。<a href="http://www.html5star.com/manual/html5/html5_del.htm.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/del'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/edits.html#the-del-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'kbd',
      name: '<kbd>',
      description: ' Example input (usually keyboard) for a program.<br />由键盘输入的文本。<br />它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-kbd-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'q',
      name: '<q>',
      description: 'Quoted text.<br>引用的文本。<br>\n' +
        '                            提示：请使用 cite 属性来定义该引用的来源。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/q'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'var',
      name: '<var>',
      description: 'Mathematical or programming variable.<br>定义数学或程序变量。<br>\n' +
        '                            您可以将此标签与 &lt;pre&gt; 及 &lt;code&gt;标签配合使用。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-var-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'sub',
      name: '<sub>',
      description: 'Subscript text.<br>上标。<br>\n' +
        '                            &lt;sub&gt;标签可定义下标文本。&lt;sup&gt; 可定义上标文本。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/sup'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-sub-and-sup-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'mark',
      name: '<mark>',
      description: 'Text highlighted for referencing elsewhere.<br>突出显示的文本',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/mark'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'bdi',
      name: '<bdi>',
      description: 'Text that is separated from directional formatting of its surroundings.<br>从周围内容分开，而设置不同的文本方向',
      links: [{
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdi-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'wbr',
      name: '<wbr>',
      description: 'Opportunity for a line break.<br>软回车（必要时才回车）',
      links: [{
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'cite',
      name: '<cite>',
      description: 'Title of a referenced piece of work.<br>对参考文献等的引用',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-cite-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'samp',
      name: '<samp>',
      description: 'Sample output of a program.<br>程序的样本',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-samp-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'sup',
      name: '<sup>',
      description: 'Superscript text.<br>下标',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/sup'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-sub-and-sup-elements'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'ruby',
      name: '<ruby>',
      description: 'Contains text with annotations, such as pronounciation hints. Commonly used in East Asian text.<br>东亚文字的注音，如中文的拼音',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/ruby'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'bdo',
      name: '<bdo>',
      description: 'Defines directional formatting for content.<br>定义内容的排版方向',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/bdo'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }, {
      element: 'code',
      name: '<code>',
      description: 'Fragment of code.<br>代码的片断',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/phrase_elements'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#FF9966',
    }
  ],

  formEle: [
    {
      element: 'fieldset',
      name: '<fieldset>',
      description: 'Set of form controls grouped by theme.<br />按用途组合的一组表单控制元素。<br /><br />此标签将表单内容的一部分打包，生成一组相关表单的字段。此标签没有必需的或唯一的属性。当一组表单元素放到该标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D效果，或者甚至可创建一个子表单来处理这些元素',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/fieldset'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-fieldset-element-0'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'form',
      name: '<form>',
      description: 'Form.<br />表单。<br />在 HTML 5 中有一些新属性，同时不再支持 HTML 4.01 中的一些属性。 在 HTML 5中有一个新属性：replace。它定义表单被提交后所做的事情',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/form'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/forms.html#the-form-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'meter',
      name: '<meter>',
      description: 'Control for entering a numeric value in a known range.<br />控制在已知范围内输入度量值。<br />meter标签定义度量（单位）。仅用于已知最大和最小值的度量。<br />meter标签是 HTML 5 中的新标签。<br /><br />注释：必须定义度量的范围，既可以在 text 中，也可以在 min/max 属性中定义',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/meter'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-meter-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'select',
      name: '<select>',
      description: 'Control for selecting from multiple options.<br />有多选值的下拉列表<br />HTML 5 有一些新的属性，同时不再支持一些 HTML 4.01 的属性。<ahref="http://www.html5star.com/manual/html5/html5_select.htm"target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/select'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-select-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'legend',
      name: '<legend>',
      description: 'Define a name for a fieldset.<br />图例或表的说明。<br />&lt;legend&gt; 标签为 &lt;fieldset&gt;、&lt;figure&gt; 以及 &lt;details&gt; 元素定义标题。<br /><br />在 HTML 4.01 中， &lt;legend&gt; 仅用于 &lt;fieldset&gt; 元素。<br />在 HTML 5 中， &lt;legend&gt; 标签应用于 &lt;fieldset&gt;、&lt;figure&gt; 以及 &lt;details&gt; 元素。 在 HTML 5中，不支持 align 属性。请使用 CSS 代替。<ahref="http://www.html5star.com/manual/html5/html5_legend.htm"target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/legend'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/forms.html#the-legend-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'optgroup',
      name: '<optgroup>',
      description: 'Group of option.<br />选项组。<br />&lt;optgroup&gt;标签定义选项组。此元素允许您组合选项。当您使用一个长的选项列表时，对相关的选项进行组合会使处理更加容易。<br /><br />HTML4.01与 HTML5之间无差异<a href="http://www.html5star.com/manual/html5/html5_optgroup.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/optgroup'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-button-element.html#the-optgroup-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'label',
      name: '<label>',
      description: 'Caption for a form control.<br />表单控件的标题（标签）。<br /><br />&lt;label&gt;标签定义控件的标注。如果您在 label元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。<br /><br />注释："for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值。<a href="http://www.html5star.com/manual/html5/html5_label.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/label'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/forms.html#the-label-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'option',
      name: '<option>',
      description: 'Single option within a select control.<br>下拉列表中的单一选项。<br>\n' +
        '                            在 HTML 5 中，&lt;option&gt; 标签也用于新元素 &lt;datalist&gt; 中。<br><br>\n' +
        '\n' +
        '                            注释：&lt;option&gt; 标签能够在不带任何属性的情况下使用，但是通常需要 value 属性，该属性定义了发送到服务器的数据。<br>\n' +
        '\n' +
        '                            请与 &lt;select&gt; 或 &lt;datalist&gt; 标签结合使用。在其他地方，&lt;option&gt; 标签是无意义的。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_option.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/option'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-button-element.html#the-option-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'datalist',
      name: '<datalist>',
      description: 'Define sets of options.<br>定义选项列表。<br>\n' +
        '                            &lt;datalist&gt;标签定义可选数据的列表。与 input 元素配合使用，就可以制作出输入值的下拉列表。<br>\n' +
        '\n' +
        '                            &lt;datalist&gt;标签是 HTML 5 中的新标签。<br>\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_datalist.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/datalist'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-button-element.html#the-datalist-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'input',
      name: '<input>',
      description: 'Generic form input.<br>表单中的输入字段。<br>\n' +
        '                            在 HTML 5 中，该元素有很多新属性，同时不再支持 HTML 4.01 中的一些属性。<br>\n' +
        '\n' +
        '                            在 HTML 5 中，type 属性有很多新的值。<br>\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_input.htm" target="_blank">查看详细属性</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/input'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-input-element.html#the-input-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'output',
      name: '<output>',
      description: 'Contains the results of a calculation.<br>输出的结果。<br>\n' +
        '                            &lt;output&gt;标签是 HTML 5 中的新标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/output'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-button-element.html#the-output-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'keygen',
      name: '<keygen>',
      description: 'Generates private-public key pairs.<br>生成密钥对',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/keygen'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-keygen-element-0'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'textarea',
      name: '<textarea>',
      description: 'Multiline free-form text input.<br>多行的文本输入区域。<br>\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_textarea.htm" target="_blank">查看详细属性</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/textarea'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-textarea-element-0'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'button',
      name: '<button>',
      description: 'A button.<br>按钮。<br>\n' +
        '                            您可以在 button 元素中放置内容，比如文档或图像。这是该元素与由 input 元素创建的按钮的不同之处。<br>\n' +
        '                            在 HTML 5 中有一个新属性：autofocus。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_button.htm" target="_blank">查看详细属性</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/button'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-button-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: 'progress',
      name: '<progress>',
      description: 'Control for displaying progress of a task.<br>运行中的进度控制。<br>\n' +
        '                            &lt;progress&gt; 标签是 HTML 5 中的新标签。<br>\n' +
        '                            提示：请使用&lt;progress&gt;标签来显示下载的进程。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_progress.htm" target="_blank">查看详细属性</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/progress'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-progress-element-0'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }
  ],

  tableEle: [
    {
      element: 'col',
      name: '<col>',
      description: 'Columns in a table.<br>表格中的列。为表格中的一个或多个列定义属性值。您只能在表格或列组中使用该元素',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/col'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-col-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'table',
      name: '<table>',
      description: 'Table of multi-dimensional data.<br>表格',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/table'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-table-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'colgroup',
      name: '<colgroup>',
      description: 'Defines a group of columns in a table.<br />对表格中的若干列进行组合。<br /><br />定义表格列的组。通过此标签，您可以对列进行组合，以便格式化。该元素只有在 &lt;table&gt; 中才是合法的。<br />注释：colgroup 元素只能包含 col 元素。<br />注释：colgroup 元素无法创建表格列。如需创建列，必须在 tr 元素内规定 td 元素。<br />提示：如果需要向一个列组规定相同的属性值，请使用该元素。<br />提示：如果需要为一个或多个列规定属性值，请使用 col 元素。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/colgroup'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-colgroup-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'tr',
      name: '<tr>',
      description: 'A row of cells.<br />表格中的一行单元<br />在 HTML 5 中，<br />不支持 &lt;tr&gt; 标签的任何属性',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/tr'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-tr-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'caption',
      name: '<caption>',
      description: 'Title of a table.<br />表格的标题<br />&lt;caption&gt; 标签必须紧随 &lt;table&gt; 标签之后。<br />HTML 4.01 不赞成使用 align 属性。在 HTML 5 中，不支持该标签。请使用 CSS 代替。<ahref="http://www.html5star.com/manual/html5/html5_caption.htm"target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/caption'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-caption-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'td',
      name: '<td>',
      description: 'Table cell.<br />定义表格单元格。<br />在 HTML4.01中，td 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 是不被赞成使用的。 在 HTML5中，仅仅支持"colspan"和 "rowspan" 属性。 <a href="http://www.html5star.com/manual/html5/html5_td.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/td'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-td-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'th',
      name: '<th>',
      description: 'Table heading.<br />表头。<br />&lt;th&gt; 标签定义表格内的表头单元格。此 th 元素内部的文本通常会呈现为粗体。<br /><br />在 HTML 4.01 中，th 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 属性是不被赞成使用的。<br />在 HTML 5 中，仅仅支持 "colspan" 、 "rowspan" 以及 "scope" 属性。<br /><a href="http://www.html5star.com/manual/html5/html5_th.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/th'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-th-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'tbody',
      name: '<tbody>',
      description: 'Contains rows that hold the table\'s data.<br>表格主体。<br>\n' +
        '                            使用&lt;tbody&gt;标签，可以将表格分为一个单独的&lt;tbody&gt; 标签可将表格中的一行或几行合成一组。\n' +
        '                            虽然您可能想包括一个，甚至会在表格中包括两个或更多个 &lt;tbody&gt; 标签，但是我们建议最好在表格中没有 &lt;tbody&gt; 标签。<br>\n' +
        '\n' +
        '                            在 &lt;tbody&gt; 标签中，只有 tr标签可以定义表格行。并且一旦定义，一个 &lt;tbody&gt; 标签就是表格中的一个独立的部分。例如不能从一个&lt;tbody&gt;跨越到另一个 &lt;tbody&gt; 中。<br>\n' +
        '\n' +
        '                            thead、tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_tbody.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/tbody'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-tbody-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'thead',
      name: '<thead>',
      description: 'Contains rows with table headings.<br>定义表格中的表头行。<br>\n' +
        '                            head、tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。<br>\n' +
        '                            在 HTML 5 中，不支持 &lt;thead&gt; 标签的任何属性。<br><br>\n' +
        '\n' +
        '                            注释：&lt;thead&gt; 内部必须拥有 &lt;tr&gt;标签！<br>\n' +
        '                            如果您使用 thead、tfoot 以及 tbody 元素，您就必须使用全部的元素。它们的出现次序是：thead、tfoot、tbody，这样浏览器就可以在收到所有数据前呈现页脚了。您必须在 table 元素内部使用这些标签。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/thead'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-thead-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: 'tfoot',
      name: '<tfoot>',
      description: 'Contains rows with summary of data.<br>表格的页脚/脚注行。<br>\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_tfoot.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/tfoot'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/tabular-data.html#the-tfoot-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }
  ],

  groupEle: [
    {
      element: 'div',
      name: '<div>',
      description: 'Container with no semantic meaning.<br />无语义的容器',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/div'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-div-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'pre',
      name: '<pre>',
      description: 'Text that is preformatted in the HTML code.<br />在HTML代码中预先格式化的文本。<br />被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。pre标签的一个常见应用就是用来表示计算机的源代码。<br />在 HTML 4.01 中，不赞成使用 width 属性，在 HTML 5 中不再支持该属性。<br /><br />提示：请使用pre标签来显示非常规的格式化内容，或者某类计算机代码',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/pre'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-pre-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'br',
      name: '<br>',
      description: 'Line break.<br />换行符',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/br'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'p',
      name: '<p>',
      description: 'Paragraph content.<br />段落内容。<br />在 HTML 4.01 中，不赞成使用 align 属性，在 HTML 5 中不再支持该属性。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/p'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-p-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'blockquote',
      name: '<blockquote>',
      description: 'Quote from another source.<br />从其它源引用的内容。<br />HTML 4.01 与 HTML 5 无差异。<a href="http://www.html5star.com/manual/html5/html5_blockquote.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/blockquote'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element'
      }],
      show: true,
      width: '96px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'ol',
      name: '<ol>',
      description: ' Ordered list.<br />有序列表。<br />在 HTML 4.01 中，不赞成使用 "start" 属性，在 HTML 5 中是允许的。<br />在 HTML 4.01 中，不赞成使用 "compact" 和 "type" 属性，在 HTML 5 中，不再支持这两个属性。<a href="http://www.html5star.com/manual/html5/html5_ol.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/ol'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-ol-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'ul',
      name: '<ul>',
      description: 'Unordered list.<br>无序列表。<br>\n' +
        '                            在 HTML 4.01 中，ul 元素的 "compact" 和 "type" 属性是不被赞成使用的。在 HTML 5 中，不再支持这两个属性。<br>\n' +
        '                            提示：请使用 CSS 来定义列表的类型。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/ul'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-ul-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'li',
      name: '<li>',
      description: 'List item.<br>列表项目。<br>\n' +
        '                            在 HTML4.01 中， 不赞成使用 "type" 和 "value" 属性。<br>\n' +
        '\n' +
        '                            在 HTML5 中，不再支持 "type" 属性。\n' +
        '                            在 HTML5 中， 并没有不赞成使用 "value" 属性，但是仅能够与 &lt;ol&gt; 元素一起使用。<br><br>\n' +
        '\n' +
        '                            提示：请使用 CSS 来定义列表的类型。<br>\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_li.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/li'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-li-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'figcaption',
      name: '<figcaption>',
      description: 'Caption for a figure.<br>图片的标题，图题',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/figcaption'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-figcaption-element'
      }],
      show: true,
      width: '96px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'dl',
      name: '<dl>',
      description: 'List of term-description pairs.<br />带定义的列表',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/dl'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-dl-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'dt',
      name: '<dt>',
      description: 'Term which will be described.<br>带定义的列表中的项目。<br>\n' +
        '                            HTML 5 引入了&lt;dialog&gt; 标签。在 dialog 中，&lt;dt&gt;标签定义句子所属的角色。<br>\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_dt.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/dt'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-dt-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'dd',
      name: '<dd>',
      description: 'Description for the preceding term.<br>带定义列表中对项目的描述',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/dd'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-dd-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'hr',
      name: '<hr>',
      description: 'Thematic break within a paragraph.<br />水平线/内容主题的变化。<br /><br />在 HTML4.01 中，不赞成使用 align, noshade, size 以及 width 属性。在 HTML 5 中不再支持这些属性。<br />在 HTML5 中，&lt;hr&gt; 标签定义内容中的主题变化，并显示为一条水平线。 在 HTML4.01 中，它仅仅显示为一条水平线。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/hr'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-hr-element-0'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: 'figure',
      name: '<figure>',
      description: 'Contains elements related to single concept, such as an illustration or code example.<br>独立的内容，如图像、代码等。<br>\n' +
        '                            figure 标签是 HTML 5 中的新标签。<br>\n' +
        '                            提示：请使用 &lt;legend&gt; 元素为元素组添加标题。',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/figure'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/grouping-content.html#the-figure-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }
  ],

  interactiveEle: [
    {},
    {
      element: 'command',
      name: '<command>',
      description: 'Command the user can perform, such as publishing an article.<br>用户可以执行的命令，如发表一篇文章。<br>\n' +
        '                            &lt;command&gt;标签定义命令按钮，比如单选按钮、复选框或按钮。<br>\n' +
        '                            &lt;command&gt;标签是 HTML 5 中的新标签。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_command.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/command'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/interactive-elements.html#the-command'
      }],
      show: true,
      width: '96px',
      class: '',
      backColor: '#f8e8c1',
    }, {
      element: 'menu',
      name: '<menu>',
      description: 'Set of commands.<br />菜单列表。<br />当希望列出表单控件时使用该标签。<br /><br />在 HTML4.01 中，不赞成使用 menu 元素。 在 HTML5 中，重新定义了 menu 元素，且使用用于排列表单控件。<a href="http://www.html5star.com/manual/html5/html5_menu.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/menu'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/interactive-elements.html#menus'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#f8e8c1',
    }, {
      element: 'summary',
      name: '<summary>',
      description: 'Caption of a details element.<br>dedails元素的标题',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/summary'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/interactive-elements.html#the-summary-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#f8e8c1',
    }, {
      element: 'details',
      name: '<details>',
      description: 'Contains additional information, such as the contents of an accordian view.<br>附加的详细信息。<br>\n' +
        '                            &lt;details&gt; 标签定义元素的细节，用户可进行查看，或通过点击进行隐藏。<br>\n' +
        '\n' +
        '                            &lt;details&gt; 标签是 HTML 5 中的新标签。<br><br>\n' +
        '\n' +
        '                            提示：与  &lt;legend&gt; 一起使用，来制作 detail 的标题。该标题对用户是可见的，当在其上点击时可打开或关闭 detail。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_details.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/details'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/rendering.html#the-details-element-0'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#f8e8c1',
    }
  ],

  insetEle: [
    {
      element: 'img',
      name: '<img>',
      description: 'An image.<br>图像。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_img.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/img'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/embedded-content-1.html#the-img-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'area',
      name: '<area>',
      description: 'Hyperlink area in an image map.<br>图像映射的超链接区域\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_area.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/area'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-map-element.html#the-area-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'map',
      name: '<map>',
      description: 'Image map for adding hyperlinks to parts of an image.<br>在图像的一部分区域定义图像映射用于添加超链接\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_map.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/map'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-map-element.html#the-map-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'embed',
      name: '<embed>',
      description: 'Reference to non-HTML content.<br>嵌入的非HTML内容。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_embed.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/embed'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-embed-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'object',
      name: '<object>',
      description: 'External resource such as an image, iframe or plugin.<br>嵌入的外部资源，如图像、iframe或插件。\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_object.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/object'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-object-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'param',
      name: '<param>',
      description: 'Parameters for the parent object.<br>父级对象的参数。<a href="http://www.html5star.com/manual/html5/html5_param.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/param'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-param-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'source',
      name: '<source>',
      description: 'Alternative sources for parent video or audio elements.<br>父级视频或音频元素的资源。<a href="http://www.html5star.com/manual/html5/html5_source.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/source'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/video.html#the-source-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'iframe',
      name: '<iframe>',
      description: 'Nested browser frame.<br>嵌套的框架。<br>\n' +
        '                            在 HTML 5 中，仅仅支持 src 属性',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/iframe'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-iframe-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'canvas',
      name: '<canvas>',
      description: 'Bitmap which is editable by client side scripts.<br>可以通过客户端脚本编辑的图形（画布）。<br>\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_canvas.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/canvas'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element'
      }],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'track',
      name: '<track>',
      description: 'Specifies external timing track for media elements.<br>媒体类元素的外部轨道',
      links: [{
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-track-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'audio',
      name: '<audio>',
      description: 'Audio file.<br>音频文件。<br>\n' +
        '                            &lt;audio&gt;标签是 HTML 5 的新标签。<br>\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_audio.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/audio'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-audio-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: 'video',
      name: '<video>',
      description: 'Video.<br>视频。<br>\n' +
        '                            &lt;video&gt; 标签是 HTML 5 的新标签。<br>\n' +
        '\n' +
        '                            <a href="http://www.html5star.com/manual/html5/html5_video.htm" target="_blank">查看详细</a>',
      links: [{
        name: 'Mozilla',
        link: 'https://developer.mozilla.org/en/HTML/Element/video'
      }, {
        name: 'W3C Reference',
        link: 'http://www.w3.org/TR/html5/the-iframe-element.html#the-video-element'
      }],
      show: true,
      width: '50px',
      class: '',
      backColor: '#ea68a2',
    }
  ],

  describe: [
    {
      element: '根',
      name: '根元素',
      description: '该色块代表根元素。',
      links: [],
      show: true,
      width: '50px',
      class: '',
      backColor: '#66CCCC',
    }, {
      element: '嵌入内容',
      name: '嵌入内容',
      description: '该色块代表嵌入内容元素。',
      links: [],
      show: true,
      width: '72px',
      class: '',
      backColor: '#ea68a2',
    }, {
      element: '文档章节',
      name: '文档章节元素',
      description: '该色块代表文档章节元素。',
      links: [],
      show: true,
      width: '72px',
      class: '',
      backColor: '#FFCCCC',
    }, {
      element: '组合',
      name: '组合元素',
      description: '该色块代表组合元素。',
      links: [],
      show: true,
      width: '50px',
      class: '',
      backColor: '#00b7ee',
    }, {
      element: '元数据和脚本',
      name: '元数据和脚本元素',
      description: '该色块代表元数据和脚本元素。',
      links: [],
      show: true,
      width: '96px',
      class: '',
      backColor: '#CCCCFF',
    }, {
      element: '表单',
      name: '表单元素',
      description: '该色块代表表单元素。',
      links: [],
      show: true,
      width: '72px',
      class: '',
      backColor: '#CCFF66',
    }, {
      element: '表格',
      name: '表格元素',
      description: '该色块代表表格元素。',
      links: [],
      show: true,
      width: '50px',
      class: '',
      backColor: '#fff45c',
    }, {
      element: '交互',
      name: '交互元素',
      description: '该色块代表交互元素。',
      links: [],
      show: true,
      width: '72px',
      class: '',
      backColor: '#f8e8c1',
    }, {
      element: '文本级别语义',
      name: '文本级别语义元素',
      description: '该色块代表文本级别语义元素。',
      links: [],
      show: true,
      width: '96px',
      class: '',
      backColor: '#FF9966',
    }
  ],
}

export const keyList = {
  keyRow1: [{ key1: '💀', class: 'c1' }, { key1: '!', key2: '1', class: '' }, { key1: '@', key2: '2', class: '' }, { key1: '#', key2: '3', class: '' }, { key1: '$', key2: '4', class: '' }, { key1: '%', key2: '5', class: '' }, { key1: '^', key2: '6', class: '' }, { key1: '&', key2: '7', class: '' }, { key1: '*', key2: '8', class: '' }, { key1: '(', key2: '9', class: '' }, { key1: ')', key2: '0', class: '' }, { key1: '_', key2: '-', class: '' }, { key1: '+', key2: '=', class: '' }, { key1: '😅', class: 's4 c2' }],
  keyRow2: [{ key1: '📑', class: 's3 c3' }, { key1: 'Q', class: '' }, { key1: 'W', class: '' }, { key1: 'E', class: '' }, { key1: 'R', class: '' }, { key1: 'T', class: '' }, { key1: 'Y', class: '' }, { key1: 'U', class: '' }, { key1: 'I', class: '' }, { key1: 'O', class: '' }, { key1: 'P', class: '' }, { key1: '{', key2: '[', class: '' }, { key1: '}', key2: ']', class: '' }, { key1: '|', key2: '\\', class: '' }],
  keyRow3: [{ key1: '🔓', class: 's4 c4' }, { key1: 'A', class: '' }, { key1: 'S', class: '' }, { key1: 'D', class: '' }, { key1: 'F', class: '' }, { key1: 'G', class: '' }, { key1: 'H', class: '' }, { key1: 'J', class: '' }, { key1: 'K', class: '' }, { key1: 'L', class: '' }, { key1: ':', key2: ';', class: '' }, { key1: '"', key2: '\'', class: '' }, { key1: '😤', class: 's4 c5' }],
  keyRow4: [{ key1: '💪', class: 's5 c6' }, { key1: 'Z', class: '' }, { key1: 'X', class: '' }, { key1: 'C', class: '' }, { key1: 'V', class: '' }, { key1: 'B', class: '' }, { key1: 'N', class: '' }, { key1: 'M', class: '' }, { key1: '<', key2: ',', class: '' }, { key1: '>', key2: '.', class: '' }, { key1: '?', key2: '/', class: '' }, { key1: '💪', class: 's5 c6' }],
  keyRow5: [{ key1: '☕', class: 's3 c7' }, { key1: '🤩', class: 's3 c5' }, { key1: '⭐', class: 's3 c8' }, { key1: '', class: 's12' }, { key1: '⭐', class: 's3 c8' }, { key1: '🌈', class: 'c9' }, { key1: '👨‍', class: 'c9' }, { key1: '☕', class: 'c7' }],
}
