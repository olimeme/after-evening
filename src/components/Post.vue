<script setup lang="ts">
export interface PostProps {
  filename: string;
}

const { filename } = defineProps<PostProps>();
</script>

<template>
  <div class="post-block box-radius box-shadow">
    <h3>{{ filename }}</h3>
  </div>
</template>

<style scoped>
.post-block {
  min-height: 4rem;
  padding: 1rem;
  border: 4px solid #ffb775;
  margin-bottom: 1rem;
}

.post-block h3 {
  line-height: 1.3;
  margin-bottom: 0.2rem;
}

.post-block:hover {
  background-color: #ffb775;
  color: #6b8fa3;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>
