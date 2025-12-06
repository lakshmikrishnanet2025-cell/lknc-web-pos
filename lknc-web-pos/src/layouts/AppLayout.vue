<template>
  <div>
    <Sidebar/>
    <Navbar>
      <template #title><slot name="title"/></template>
    </Navbar>
    <main class="ml-56 mt-4 p-4">
      <slot/>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue"
import Navbar from "../components/Navbar.vue"
</script>
