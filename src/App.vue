<script setup>
import { RouterLink, RouterView } from "vue-router";
import Topmenu from "@/components/main/Topmenu.vue";
</script>

<template>
  <n-notification-provider>
    <RouterView />
  </n-notification-provider>
</template>
<style>

#app {
  
}
</style>
