<script setup lang="ts">
import Heading from "../components/Heading.vue";
import Post, { PostProps } from "../components/Post.vue";
import { useRouter } from "vue-router";

const info: PostProps[] = [
  {
    postId: 1,
    heading: "lore ipsum dolor sit amet (gone sexual) (gone wrong) (gone wild)",
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

const router = useRouter();
</script>

<template>
  <div class="section">
    <Heading msg="После Вечера" sub="блог фронтера" />
  </div>
  <div class="section">
    <div
      class="router-link"
      v-for="post in info"
      :key="post.postId"
      @click="router.push(`/post/${post.postId}`)"
    >
      <Post :post-id="post.postId" :heading="post.heading" :sub="post.sub" />
    </div>
  </div>
</template>

<style>
@import "../styles.css";
</style>
