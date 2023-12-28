<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import BackButton from "../components/BackButton.vue";
import { useRoute, useRouter } from "vue-router";
import MarkdownRender from "../components/MarkdownRender.vue";
import { TPost } from "../types";

const post = ref<TPost | null>(null);
const loading = ref<boolean>(false);
const loadingDots = ref<string>(".");
const error = ref<string>("");
const route = useRoute();
const router = useRouter();
const postId: number = +route.params.postId;

onBeforeMount(() => {
  loading.value = true;

  const intervalId = setInterval(() => {
    if (loadingDots.value.length === 3) loadingDots.value = ".";
    else loadingDots.value += ".";
  }, 400);

  fetch(`https://after-evening.onrender.com/posts/${postId}`)
    .then((res) => {
      if (!res.ok) throw new Error("Post not found");
      return res.json();
    })
    .then((data) => (post.value = data))
    .catch((err) => (error.value = err.message))
    .finally(() => {
      loading.value = false;
      clearInterval(intervalId);
    });
});
</script>

<template>
  <div class="section">
    <BackButton :router="router" />
    <div v-if="loading">
      <p class="loading">loading<span v-html="loadingDots"></span></p>
    </div>
    <div v-if="post" class="post-section box-shadow">
      <MarkdownRender :source="post.content" />
    </div>
    <div v-else-if="!post && !loading">
      <p class="error">Нет поста пацаны, закругляемся</p>
    </div>
  </div>
</template>

<style scoped>
.post-section {
  font-size: 1.2rem;
  line-height: 1.6;
  padding: 1.8rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  border: 4px solid #ffb775;
}
</style>
