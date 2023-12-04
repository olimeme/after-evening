<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import BackButton from "../components/BackButton.vue";
import { useRoute, useRouter } from "vue-router";
// import { PostProps } from "../components/Post.vue";

const post = ref<any | null>(null);
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
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      debugger;
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
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div v-else-if="!post && !loading">
      <p class="error">Нет поста пацаны, закругляемся</p>
    </div>
  </div>
</template>

<style scoped>
h1,
p {
  text-wrap: balance;
}
h1 {
  margin-bottom: 2rem;
  line-height: 1.3;
}
p {
  line-height: 1.4;
}
.loading {
  text-align: center;
  text-transform: uppercase;
}

.error {
  text-align: center;
  color: red;
}
</style>
