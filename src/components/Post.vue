<script setup lang="ts">
import { useRouter } from "vue-router";
export interface PostProps {
  postId: number;
  heading: string;
  sub?: string;
}

const props = defineProps<PostProps>();
const router = useRouter();

function openPost(): void {
  router.push({ name: "post", params: { postId: props.postId } });
}
</script>

<template>
  <div class="post-block" @click="openPost">
    <h3>{{ heading }}</h3>
    <h5 class="muted" v-if="sub">{{ sub }}</h5>
  </div>
</template>

<style scoped>
.post-block {
  min-height: 5rem;
  padding: 1rem;
  border: 4px solid #ffb775;
  margin-bottom: 1rem;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.2);
}

.post-block:hover {
  box-shadow: 8px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>
