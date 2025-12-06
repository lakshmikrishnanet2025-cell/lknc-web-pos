<template>
  <div class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
    <div>
      <h3 class="text-gray-600 text-lg">{{ title }}</h3>
      <p class="text-2xl font-bold text-primary">{{ value }}</p>
    </div>
    <span class="text-3xl">{{ icon }}</span>
  </div>
</template>

<script setup>
defineProps(["title","value","icon"])
</script>
