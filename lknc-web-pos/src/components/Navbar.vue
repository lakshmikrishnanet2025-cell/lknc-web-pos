<template>
  <header class="bg-white p-3 shadow flex justify-between items-center ml-56">
    <h1 class="text-xl font-semibold"><slot name="title"/></h1>
    <button @click="logout" class="bg-red-600 px-3 py-1 rounded text-white">
      Logout
    </button>
  </header>
</template>

<script setup>
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useRouter } from "vue-router"
const router = useRouter()

function logout(){
  signOut(auth)
  router.push("/")
}
</script>
