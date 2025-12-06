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
