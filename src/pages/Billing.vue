<template>
  <AppLayout>
    <template #title>Billing</template>

    <div class="p-4">
      <input v-model="item" placeholder="Service" class="input"/>
      <input v-model.number="price" type="number" placeholder="Price" class="input mt-2"/>
      <input v-model.number="qty" type="number" placeholder="Qty" class="input mt-2"/>
      <button @click="addItem" class="btn mt-3">Add</button>

      <table class="w-full mt-4 border">
        <tr class="bg-gray-100"><th>Service</th><th>Qty</th><th>Price</th><th>Total</th></tr>
        <tr v-for="(i,index) in items" :key="index">
          <td>{{ i.name }}</td><td>{{ i.qty }}</td><td>{{ i.price }}</td><td>{{ i.total }}</td>
        </tr>
      </table>

      <p class="text-right text-xl font-bold mt-4">Total: ₹{{ total }}</p>

      <button @click="saveBill" class="btn bg-primary text-white mt-4">Save Bill & PDF</button>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref } from "vue"
import { createBill } from "../api/billing"
import { generatePDF } from "../utils/pdf"

const item = ref("")
const price = ref(0)
const qty = ref(1)
const items = ref([])
const total = ref(0)

function addItem(){
  if(!item.value) return
  const row = { name:item.value, price:price.value, qty:qty.value, total: price.value * qty.value}
  items.value.push(row)
  total.value += row.total
  item.value=""; price.value=0; qty.value=1;
}

async function saveBill(){
  await createBill({items: items.value, total: total.value})
  generatePDF(items.value, total.value)
  items.value=[]; total.value=0;
}
</script>

<style>
.input { @apply border px-3 py-2 rounded w-full; }
.btn { @apply bg-primary text-white px-4 py-2 rounded; }
</style>
