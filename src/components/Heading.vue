<script setup lang="ts">
defineProps<{ msg: string; sub: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>{{ sub }}</h3>
</template>

<style scoped></style>
