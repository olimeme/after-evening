<script setup lang="ts">
import BackButton from "../components/BackButton.vue";
defineProps<{ postId: number }>();
</script>
<template>
  <BackButton :router="this.$router" />
  <p>{{ postId }}</p>
</template>

<style scoped></style>
