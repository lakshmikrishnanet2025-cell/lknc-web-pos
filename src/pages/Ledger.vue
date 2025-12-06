<template>
  <AppLayout>
    <template #title>Ledger / Udhaar</template>

    <div class="p-4 flex gap-2">
      <input v-model="name" placeholder="Customer" class="input"/>
      <input v-model.number="amount" type="number" placeholder="Amount" class="input"/>
      <select v-model="type" class="input">
        <option value="credit">Gave</option>
        <option value="debit">Took</option>
      </select>
      <button @click="add" class="btn">Save</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Customer</th><th>Type</th><th>Amount</th></tr>
      <tr v-for="l in list" :key="l.id">
        <td>{{ l.name }}</td>
        <td>{{ l.type }}</td>
        <td>₹{{ l.amount }}</td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addLedger, getLedger } from "../api/ledger"

const name = ref("")
const amount = ref(0)
const type = ref("credit")
const list = ref([])

async function add(){
  await addLedger({name:name.value,amount:amount.value,type:type.value})
  name.value=""; amount.value=0; type.value="credit";
  list.value = await getLedger()
}

onMounted(async()=> list.value=await getLedger())
</script>
