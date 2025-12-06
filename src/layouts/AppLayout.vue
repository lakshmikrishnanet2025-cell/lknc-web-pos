<<<<<<< HEAD
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
=======
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
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
