<script setup lang="ts">
export interface PostProps {
  postId: number;
  heading: string;
  sub?: string;
}

const { heading, sub } = defineProps<PostProps>();
</script>

<template>
  <div class="post-block box-radius box-shadow">
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
}

.post-block h3 {
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.post-block:hover {
  background-color: #ffb775;
  color: #6b8fa3;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>
