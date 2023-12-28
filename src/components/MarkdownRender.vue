<template>
  <div v-html="markdown.render(source)" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItIns from "markdown-it-ins";
import MarkdownItMark from "markdown-it-mark";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItContainer from "markdown-it-container";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";

const markdown = new MarkdownIt()
  .use(MarkdownItIns)
  .use(MarkdownItMark)
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItContainer)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC);

defineProps({
  source: {
    type: String,
    default: "",
  },
});
</script>
