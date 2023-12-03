<script setup lang="ts">
import { Router } from "vue-router";
import { returnToPrevPage } from "../helpers/returnToPrevPage";
defineProps<{ router: Router }>();
</script>
<template>
  <button
    class="btn block box-radius box-shadow"
    @click="returnToPrevPage(router)"
  >
    назад
  </button>
</template>
<style scoped></style>
