<template>
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow w-80">
      <h2 class="text-xl font-bold mb-4 text-center">Login</h2>
      <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-4" />
      <button @click="login" class="bg-green-600 text-white p-2 w-full rounded">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

function login() {
  alert("Login feature will connect to Firebase next.");
}
</script>
