<script setup lang="ts">
import Heading from "../components/Heading.vue";
import Post from "../components/Post.vue";
import { TPost } from "../types";
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
import FooterSection from "../components/FooterSection.vue";
import setTitleAndDescription from "../helpers/setTitleAndDescription";

const posts = ref<TPost[]>();
const loading = ref<boolean>(false);
const loadingDots = ref<string>(".");
const error = ref<string>("");

onBeforeMount(() => {
  loading.value = true;

  const intervalId = setInterval(() => {
    if (loadingDots.value.length === 3) loadingDots.value = ".";
    else loadingDots.value += ".";
  }, 400);

  fetch("https://after-evening.onrender.com/posts")
    .then((res) => res.json())
    .then((data) => (posts.value = data))
    .catch((err) => (error.value = err.message))
    .finally(() => {
      setTitleAndDescription(
        "После Вечера",
        "Блог фронтендера, который пишет о том, что ему интересно"
      );
      loading.value = false;
      clearInterval(intervalId);
    });
});

const router = useRouter();
</script>

<template>
  <header class="section">
    <Heading msg="После Вечера" sub="блог фронтера" />
  </header>
  <section class="section">
    <div v-if="loading">
      <p class="loading">loading<span v-html="loadingDots"></span></p>
    </div>
    <div v-if="posts">
      <div
        class="router-link"
        v-for="post in posts"
        :key="post.filename"
        @click="router.push(`/post/${post.id}`)"
      >
        <Post :filename="post.filename" />
      </div>
    </div>
    <div v-else-if="!posts && !loading">
      <p class="error">Нет постов пацаны, закругляемся</p>
    </div>
  </section>
  <FooterSection />
</template>

<style>
@import "../styles.css";
</style>
