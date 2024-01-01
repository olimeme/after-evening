<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import BackButton from "../components/BackButton.vue";
import { useRoute, useRouter } from "vue-router";
import MarkdownRender from "../components/MarkdownRender.vue";
import { TPost } from "../types";
import FooterSection from "../components/FooterSection.vue";
import setTitleAndDescription from "../helpers/setTitleAndDescription";

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
    .then((data) => {
      post.value = data;
      setTitleAndDescription(
        data.filename.slice(0, -3),
        data.content.slice(0, 50) + "..."
      );
    })
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
  <FooterSection />
</template>

<style scoped>
.post-section {
  line-height: 1.6;
  padding: 1.8rem;
  border-radius: 0.5rem;
  border: 4px solid #ffb775;
}
</style>
