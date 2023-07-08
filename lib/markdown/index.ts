import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";

let md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// https://github.com/valeriangalliat/markdown-it-anchor#usage
md.use(MarkdownItAnchor);

export default function markdownToHtml(content: string) {
  let html = md.render(content);
  return html;
}
