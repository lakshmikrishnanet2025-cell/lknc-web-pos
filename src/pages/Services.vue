<template>
  <AppLayout>
    <template #title>Services</template>

    <div class="p-4 flex gap-2">
      <input v-model="name" placeholder="Service Name" class="input"/>
      <input v-model.number="price" type="number" placeholder="Price" class="input"/>
      <button @click="add" class="btn">Add</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Name</th><th>Price</th><th>Action</th></tr>
      <tr v-for="s in list" :key="s.id">
        <td>{{ s.name }}</td><td>{{ s.price }}</td>
        <td><button @click="remove(s.id)" class="text-red-600">Delete</button></td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addService, getServices, deleteService } from "../api/services"

const name = ref("")
const price = ref(0)
const list = ref([])

async function add(){
  if(!name.value) return
  await addService({name:name.value,price:price.value})
  name.value=""; price.value=0;
  list.value = await getServices()
}

async function remove(id){
  await deleteService(id)
  list.value = await getServices()
}

onMounted(async()=> list.value=await getServices())
</script>
