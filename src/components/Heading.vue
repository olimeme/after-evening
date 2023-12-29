<script setup lang="ts">
defineProps<{ msg: string; sub: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ sub }}</h2>
</template>

<style scoped></style>
