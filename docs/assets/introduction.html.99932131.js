import{_ as e,r as o,o as c,c as l,a,b as t,d as n,e as p}from"./app.c6c2b85d.js";const u={},i=a("h1",{id:"\u4ECB\u7ECD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),r=a("p",null,"\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECDtmagic-editor\u9875\u9762\u6253\u5305\u3001\u53D1\u5E03\u76F8\u5173\u7684\u57FA\u7840\u6982\u5FF5\uFF0C\u6253\u5305\u539F\u7406\uFF0C\u6253\u5305\u65B9\u6848\u5B9E\u73B0\u3002\u4F7F\u7528\u4E86tmagic-editor\u5F00\u6E90\u4EE3\u7801\u7684\u4E1A\u52A1\u65B9\u53EF\u4EE5\u81EA\u7531\u5B9A\u5236\u9875\u9762\u7684\u6253\u5305\u6784\u5EFA\u65B9\u6848\u3002",-1),k=a("h2",{id:"\u7F16\u8F91\u5668\u4EA7\u7269-dsl",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u7F16\u8F91\u5668\u4EA7\u7269-dsl","aria-hidden":"true"},"#"),n(" \u7F16\u8F91\u5668\u4EA7\u7269 DSL")],-1),d=n("\u7F16\u8F91\u5668\u4E2D\u6700\u7EC8\u4FDD\u5B58\u5F97\u5230\u7684\u914D\u7F6E\u7ED3\u679C\uFF0C\u540C\u65F6\u4E5F\u662Ftmagic-editor\u9875\u9762\u6700\u7EC8\u6E32\u67D3\u7684\u63CF\u8FF0\u6587\u4EF6\uFF0C\u5C31\u662F\u4E00\u4EFD JS schema \u5F62\u5F0F\u7684 DSL\u3002\u5176\u5177\u4F53\u5F62\u5F0F\u5C31\u662F\u5728 "),m={href:"/docs/guide/advanced/js-schema.html#DSL",target:"_blank",rel:"noopener noreferrer"},g=n("JS Schema"),v=n(" \u6211\u4EEC\u793A\u4F8B\u4E2D\u63D0\u5230\u7684\u5185\u5BB9\u3002"),h=p('<p>\u5728tmagic-editor\u7F16\u8F91\u5668\u4E2D\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u548C\u914D\u7F6E\u4FE1\u606F\uFF0C\u6700\u7EC8\u90FD\u4FDD\u5B58\u6210\u8FD9\u4E00\u4EFD DSL\u3002\u8FD9\u4EFD\u914D\u7F6E\u5728tmagic-editor runtime \u4E2D\u88AB\u52A0\u8F7D\u548C\u6E32\u67D3\uFF0C\u6700\u7EC8\u5448\u73B0\u51FAtmagic-editor\u9879\u76EE\u9875\u3002</p><h2 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> runtime</h2><p>runtime \u7684\u6982\u5FF5\uFF0C\u662F\u7406\u89E3tmagic-editor\u9879\u76EE\u9875\u8FD0\u884C\u7684\u91CD\u8981\u6982\u5FF5\uFF0Cruntime \u662F\u627F\u8F7Dtmagic-editor\u9879\u76EE\u9875\u9762\u7684\u8FD0\u884C\u73AF\u5883\u3002\u53EF\u89C6\u5316\u9875\u9762\u9700\u8981\u5728tmagic-editor\u7F16\u8F91\u5668\u4E2D\u642D\u5EFA\u3001\u6E32\u67D3\uFF0C\u901A\u8FC7\u6A21\u62DF\u5668\u6240\u89C1\u5373\u6240\u5F97\u3002\u642D\u5EFA\u5B8C\u6210\u540E\uFF0C\u4FDD\u5B58\u914D\u7F6E\u5E76\u53D1\u5E03\uFF0C\u7136\u540E\u6E32\u67D3\u5230\u771F\u5B9E\u9875\u9762\u3002\u5176\u4E2D\u6D89\u53CA\u5230\u4E24\u4E2A\u4E0D\u540C\u7684 runtime\uFF1A</p><ul><li>\u7F16\u8F91\u5668\u4E2D\u7684\u6A21\u62DF\u5668</li><li>\u7EC8\u7AEF\u6253\u5F00\u771F\u5B9E\u9875\u9762</li></ul><p>\u6240\u4EE5\u66F4\u6DF1\u5165\u63CF\u8FF0\uFF0Cruntime \u662Ftmagic-editor\u9875\u9762\u7684\u6E32\u67D3\u73AF\u5883\uFF0C\u63D0\u4F9B\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u80FD\u529B\u5C01\u88C5\u3002\u5982\u679C\u7406\u89E3\u4E86tmagic-editor\u7684\u8BBE\u8BA1\uFF0C\u9605\u8BFB\u4E86tmagic-editor\u7684\u6E90\u7801\uFF0C\u53EF\u4EE5\u53D1\u73B0\uFF0Cruntime \u53EA\u662F\u5BF9tmagic-editor\u7684\u6E32\u67D3\u5668\u505A\u4E86\u4E00\u5C42\u5305\u88C5\uFF0C\u5728\u4E0D\u540C runtime \u4E2D\uFF0Ctmagic-editor\u7684\u6E32\u67D3\u903B\u8F91\u548C\u7EC4\u4EF6\u4EE3\u7801\u90FD\u662F\u76F8\u540C\u7684\u3002</p><p>\u5E76\u4E14\uFF0C\u7531\u4E8Etmagic-editor\u5728\u7F16\u8F91\u5668\u4E2D\u7684\u6A21\u62DF\u5668\u662F\u901A\u8FC7 iframe \u6E32\u67D3\u7684\uFF0C\u548Ctmagic-editor\u5E73\u53F0\u672C\u8EAB\u53EF\u4EE5\u505A\u5230\u6846\u67B6\u89E3\u8026\uFF0C\u6240\u4EE5 runtime \u4E5F\u53EF\u4EE5\u7528\u4E0D\u540C\u6846\u67B6\u5F00\u53D1\u3002\u76EE\u524Dtmagic-editor\u63D0\u4F9B\u4E86 vue2/vue3 \u548C react \u7684 runtime \u793A\u4F8B\u3002</p><p>\u5404\u4E2A runtime \u7684\u4F5C\u7528\u9664\u4E86\u4F5C\u4E3A\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u6E32\u67D3\u73AF\u5883\uFF0C\u540C\u65F6\u4E5F\u662F\u4E0D\u540C\u73AF\u5883\u7684\u6253\u5305\u6784\u5EFA\u8F7D\u4F53\u3002tmagic-editor\u793A\u4F8B\u4EE3\u7801\u4E2D\u7684\u6253\u5305\u5C31\u662F\u57FA\u4E8E runtime \u8FDB\u884C\u7684\u3002</p><h3 id="\u4E1A\u52A1\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u76F8\u5173" aria-hidden="true">#</a> \u4E1A\u52A1\u76F8\u5173</h3><p>\u7531\u4E8E runtime \u662F\u9875\u9762\u6E32\u67D3\u7684\u627F\u8F7D\u73AF\u5883\uFF0C\u5176\u4E2D\u4F1A\u52A0\u8F7D @tmagic/ui \u4EE5\u53CA\u5404\u4E2A\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4E1A\u52A1\u53D1\u5E03\u9879\u76EE\u9875\u4E5F\u662F\u57FA\u4E8E runtime\uFF0C\u6240\u4EE5\u5728 runtime \u4E2D\u5B9E\u73B0\u4E1A\u52A1\u65B9\u7684\u81EA\u5B9A\u4E49\u903B\u8F91\u662F\u6700\u5408\u9002\u7684\u3002runtime \u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E9B\u5168\u5C40 API\uFF0C\u4F9B\u4E1A\u52A1\u7EC4\u4EF6\u8C03\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u628A\u4E0B\u9762\u7684\u6A21\u62DF\u5668\u4E2D\u7684 runtime \u89C6\u4E3A\u4E00\u4E2A\u4E1A\u52A1\u65B9runtime\u3002</p><p>tmagic-editor\u63D0\u4F9B\u4E86\u4E09\u4E2A\u7248\u672C\u7684 runtime \u793A\u4F8B\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1A</p>',10),q={href:"https://github.com/Tencent/tmagic-editor/blob/master/runtime/vue3",target:"_blank",rel:"noopener noreferrer"},b=n("vue3 runtime"),_={href:"https://github.com/Tencent/tmagic-editor/blob/master/runtime/vue2",target:"_blank",rel:"noopener noreferrer"},f=n("vue2 runtime"),y={href:"https://github.com/Tencent/tmagic-editor/blob/master/runtime/react",target:"_blank",rel:"noopener noreferrer"},x=n("react runtime"),j=p('<h3 id="\u771F\u5B9E\u9875\u9762\u6E32\u67D3-page" tabindex="-1"><a class="header-anchor" href="#\u771F\u5B9E\u9875\u9762\u6E32\u67D3-page" aria-hidden="true">#</a> \u771F\u5B9E\u9875\u9762\u6E32\u67D3\uFF08Page\uFF09</h3><p>\u8FD9\u4E00\u90E8\u5206\uFF0C\u5BF9\u5E94\u7684\u662F runtime \u4E2D\u7684 page\u3002\u5373\u628Atmagic-editor\u4FDD\u5B58\u540E\u7684\u914D\u7F6E\u8FDB\u884C\u52A0\u8F7D\u3001\u89E3\u6790\u3001\u6E32\u67D3\uFF0C\u7136\u540E\u5448\u73B0\u9875\u9762\u7684\u8FC7\u7A0B\u3002 <img src="https://image.video.qpic.cn/oa_88b7d-37_1139402464_1633761800125955" width="100%" alt="tmagic-editor runtime page \u793A\u610F\u56FE"></p><h3 id="\u6A21\u62DF\u5668\u4E2D\u7684\u9875\u9762\u6E32\u67D3-playground" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5668\u4E2D\u7684\u9875\u9762\u6E32\u67D3-playground" aria-hidden="true">#</a> \u6A21\u62DF\u5668\u4E2D\u7684\u9875\u9762\u6E32\u67D3\uFF08Playground\uFF09</h3><p>\u8FD9\u4E00\u90E8\u5206\uFF0C\u5BF9\u5E94\u7684\u662F runtime \u4E2D\u7684 playground\u3002\u5176\u5B9E\u4ED4\u7EC6\u67E5\u770B\u6E90\u7801\uFF0Cplayground \u548C page runtime \u7684\u5DEE\u5F02\uFF0C\u5728\u4E8E playground \u4E2D\u9700\u8981\u54CD\u5E94\u7F16\u8F91\u5668\u4E2D\u7528\u6237\u7684\u64CD\u4F5C\uFF1A</p><ul><li>\u7EC4\u4EF6\u7684\u589E\u5220\u6539</li><li>\u8868\u5355\u914D\u7F6E\u4FEE\u6539</li></ul><p>\u54CD\u5E94\u7528\u6237\u914D\u7F6E\u4FEE\u6539\u7684\u64CD\u4F5C\u4EE3\u7801\u5E76\u4E0D\u9700\u8981\u5728\u7528\u6237\u6253\u5F00\u7684\u9875\u9762\u88AB\u4F7F\u7528\u5230\uFF0C\u8FD9\u662F\u4E24\u4E2A runtime \u7684\u4E3B\u8981\u5DEE\u5F02\u3002 <img src="https://image.video.qpic.cn/oa_88b7d-32_528694230_1633762153731370" width="100%" alt="tmagic-editor runtime playground \u793A\u610F\u56FE"></p><h2 id="\u6253\u5305\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u811A\u672C" aria-hidden="true">#</a> \u6253\u5305\u811A\u672C</h2><p>\u5728tmagic-editor\u5404\u4E2A\u6846\u67B6\u7684 runtime \u76EE\u5F55\u4E2D\uFF0C\u6709\u5BF9\u5E94\u7684 scripts \u6253\u5305\u811A\u672C\u76EE\u5F55\u3002\u7531\u4E8E\u5404\u4E2A\u6846\u67B6\u7684 runtime \u95F4\u6709\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u6253\u5305\u65B9\u5F0F\uFF0C\u6240\u4EE5\u4E3A\u4E86\u67B6\u6784\u804C\u8D23\u660E\u786E\uFF0C\u6211\u4EEC\u5C06\u793A\u4F8B\u6253\u5305\u4EE3\u7801\u5206\u522B\u653E\u5165\u5BF9\u5E94 runtime \u7684 scripts \u76EE\u5F55\u4E2D\u3002</p>',8),S=n("\u8BE6\u7EC6\u7684\u6253\u5305\u811A\u672C\uFF0C\u53EF\u4EE5\u53C2\u8003\u8C03\u7528"),D={href:"https://github.com/Tencent/tmagic-editor/blob/master/runtime/scripts/generateEntry.js",target:"_blank",rel:"noopener noreferrer"},T=n("tmagic-editor\u6253\u5305\u811A\u672C generateEntry"),w=n("\u3002"),L=p(`<p>\u5728 runtime \u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 vite.config.ts \u5B9A\u4E49\u4E86\u6253\u5305\u5165\u53E3\u6587\u4EF6\uFF0C\u5728 package.json \u4E2D\u58F0\u660E\u4E86\u6253\u5305\u547D\u4EE4\u3002\u4F60\u53EF\u4EE5\u8FDB\u5165\u5BF9\u5E94\u7684 runtime \u76EE\u5F55\u4E2D\u5C1D\u8BD5\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F97\u5230\u6253\u5305\u4EA7\u7269 dist \u76EE\u5F55\u3002\u5176\u4E2D\u6709\u6211\u4EEC\u5728\u7EBF\u4E0A\u9879\u76EE\u9875\u9762\u4F7F\u7528\u7684 page.html \u548C\u7F16\u8F91\u5668\u6A21\u62DF\u5668\u4F7F\u7528\u7684 playground.html \u4E24\u4E2A runtime \u9875\u9762\u6846\u67B6\u3002</p><h2 id="\u9875\u9762\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u53D1\u5E03" aria-hidden="true">#</a> \u9875\u9762\u53D1\u5E03</h2><p>tmagic-editor\u7684\u9875\u9762\u53D1\u5E03\uFF0C\u76EE\u524D\u4F7F\u7528\u7684\u662F\u9759\u6001\u8D44\u6E90\u53D1\u5E03\u3002\u800C\u6240\u6709\u914D\u7F6E\u51FA\u7684\u9879\u76EE\u9875\u552F\u4E00\u7684\u533A\u522B\uFF0C\u5C31\u662F\u914D\u7F6E\u4FE1\u606F\u3002\u6211\u4EEC\u53D1\u5E03\u9875\u9762\u65F6\uFF0C\u5C06\u9875\u9762\u7684\u914D\u7F6E\u4FE1\u606F\u63D2\u5165\u5230 page.html \u4E2D\uFF0C\u7136\u540E\u5C06\u4FEE\u6539\u540E\u7684 page.html \u53D1\u5E03\u81F3 CDN\uFF0C\u5F97\u5230\u9879\u76EE\u9875\u9762\u3002</p><p>\u539F\u59CB\u7684 page.html \u9875\u9762\u6846\u67B6</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Magic App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@next/dist/vue.runtime.global.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/page.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/App.10f9c9e1.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/vendor.1dc07625.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/index.3456a0b9.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/components.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/App.91ddd4a6.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/page.6c73043b.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u5165\u9879\u76EE\u4FE1\u606F\u540E\u7684 page.html</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Publish Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8FD9\u91CC\u63D2\u5165\u4E86\u9879\u76EE\u76F8\u5173\u7684 DSL.js --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./DSL.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@next/dist/vue.runtime.global.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/page.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/App.10f9c9e1.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/vendor.1dc07625.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/index.3456a0b9.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulepreload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/components.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/App.91ddd4a6.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/page.6c73043b.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function E(P,A){const s=o("ExternalLinkIcon");return c(),l("div",null,[i,r,k,a("p",null,[d,a("a",m,[g,t(s)]),v]),h,a("ul",null,[a("li",null,[a("a",q,[b,t(s)])]),a("li",null,[a("a",_,[f,t(s)])]),a("li",null,[a("a",y,[x,t(s)])])]),j,a("p",null,[S,a("a",D,[T,t(s)]),w]),L])}var C=e(u,[["render",E],["__file","introduction.html.vue"]]);export{C as default};
