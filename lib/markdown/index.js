import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";
import hljs from "highlight.js";

function generateRandomId(length = 10) {
  let charSet = "abcdefghijklmnopqrstuvwxyz";

  let str = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * 100000) % charSet.length;
    str = str + charSet[index];
  }

  return str;
}

function Code(html, code) {
  let randomId = generateRandomId();

  return `<div class="code-custom">${html}<textarea class="code-copy-textfield" id="${randomId}">${code}</textarea><button class="code-copy-button" dataIndex="${randomId}">Copy</button></div>`;
}

let md = new MarkdownIt({
  highlight: function (str, lang, att) {
    // console.log(att);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return Code(hljs.highlight(str, { language: lang }).value, str);
      } catch (__) {}
    }

    return "";
  },
  html: true,
  linkify: true,
  typographer: true,
});

// https://github.com/valeriangalliat/markdown-it-anchor#usage
md.use(MarkdownItAnchor, {
  // level: 3,
});

export default function markdownToHtml(content) {
  let html = md.render(content);
  return html;
}
