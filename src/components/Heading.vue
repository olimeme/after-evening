<script setup lang="ts">
defineProps<{ msg: string; sub: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h5>{{ sub }}</h5>
</template>

<style scoped></style>
