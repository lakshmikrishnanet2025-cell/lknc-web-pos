<<<<<<< HEAD
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
=======
<template>
  <div class="flex h-screen items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md p-6 w-96 rounded-lg">
      <h1 class="text-2xl font-bold text-center mb-5 text-primary">LKNC POS Login</h1>
      <input v-model="email" type="text" placeholder="Email" class="input"/>
      <input v-model="password" type="password" placeholder="Password" class="input mt-3"/>
      <p class="text-red-600 text-sm mt-2">{{ error }}</p>
      <button @click="login" class="btn mt-4 w-full">Login</button>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data(){ return { email: "", password: "", error: "" };},
  methods:{
    async login(){
      try{
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/dashboard");
      } catch(e){
        this.error = "Invalid login!";
      }
    }
  }
}
</script>

<style>
.input { @apply border w-full px-3 py-2 rounded; }
.btn { @apply bg-primary text-white px-4 py-2 rounded hover:bg-green-800; }
</style>
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
