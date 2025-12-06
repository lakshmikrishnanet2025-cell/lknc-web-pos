<template>
  <AppLayout>
    <template #title>Customers</template>

    <div class="p-4 flex gap-2">
      <input v-model="name" placeholder="Customer Name" class="input"/>
      <input v-model="phone" placeholder="Phone" class="input"/>
      <button @click="add" class="btn">Add</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Name</th><th>Phone</th><th>Action</th></tr>
      <tr v-for="c in list" :key="c.id">
        <td>{{ c.name }}</td><td>{{ c.phone }}</td>
        <td><button @click="remove(c.id)" class="text-red-600">Delete</button></td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addCustomer, getCustomers, deleteCustomer } from "../api/customers"

const name = ref("")
const phone = ref("")
const list = ref([])

async function add(){
  if(!name.value) return
  await addCustomer({name:name.value,phone:phone.value})
  name.value=""; phone.value="";
  list.value = await getCustomers()
}

async function remove(id){
  await deleteCustomer(id)
  list.value = await getCustomers()
}

onMounted(async()=> list.value=await getCustomers())
</script>

<style>
.input { @apply border px-2 py-1 rounded; }
.btn { @apply bg-primary text-white px-4 py-2 rounded; }
</style>

<template>
  <AppLayout>
    <template #title>Customers</template>

    <div class="p-4 flex gap-2">
      <input v-model="name" placeholder="Customer Name" class="input"/>
      <input v-model="phone" placeholder="Phone" class="input"/>
      <button @click="add" class="btn">Add</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Name</th><th>Phone</th><th>Action</th></tr>
      <tr v-for="c in list" :key="c.id">
        <td>{{ c.name }}</td><td>{{ c.phone }}</td>
        <td><button @click="remove(c.id)" class="text-red-600">Delete</button></td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addCustomer, getCustomers, deleteCustomer } from "../api/customers"

const name = ref("")
const phone = ref("")
const list = ref([])

async function add(){
  if(!name.value) return
  await addCustomer({name:name.value,phone:phone.value})
  name.value=""; phone.value="";
  list.value = await getCustomers()
}

async function remove(id){
  await deleteCustomer(id)
  list.value = await getCustomers()
}

onMounted(async()=> list.value=await getCustomers())
</script>

<style>
.input { @apply border px-2 py-1 rounded; }
.btn { @apply bg-primary text-white px-4 py-2 rounded; }
</style>
