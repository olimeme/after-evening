<script setup lang="ts">
import Heading from "../components/Heading.vue";
import Post, { PostProps } from "../components/Post.vue";

const info: PostProps[] = [
  {
    postId: 1,
    heading: "I killed my hamster (gone sexual)",
    sub: "acutally it was kinda good",
  },
  {
    postId: 2,
    heading: "I killed my hamster (gone sexual)",
  },
  {
    postId: 3,
    heading: "I killed my hamster (gone sexual)",
    sub: "acutally it was kinda good",
  },
  {
    postId: 4,
    heading: "I killed my hamster (gone sexual)",
  },
  {
    postId: 5,
    heading: "I killed my hamster (gone sexual)",
    sub: "acutally it was kinda good",
  },
];
</script>

<template>
  <div class="section">
    <Heading msg="После Вечера" sub="блог фронтера" />
  </div>
  <div class="section">
    <Post
      v-for="post in info"
      :post-id="post.postId"
      :heading="post.heading"
      :sub="post.sub"
    />
  </div>
</template>

<style>
@import "../styles.css";
</style>
