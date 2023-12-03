<script setup lang="ts">
defineProps<{ msg: string; sub: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ sub }}</p>
</template>

<style scoped></style>
