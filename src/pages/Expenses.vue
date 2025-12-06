<<<<<<< HEAD
<template>
  <AppLayout>
    <template #title>Expenses</template>

    <div class="p-4 flex gap-2">
      <input v-model="title" placeholder="Expense Title" class="input"/>
      <input v-model.number="amount" type="number" placeholder="Amount" class="input"/>
      <button @click="add" class="btn">Add</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Title</th><th>Amount</th></tr>
      <tr v-for="e in list" :key="e.id">
        <td>{{ e.title }}</td><td>₹{{ e.amount }}</td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addExpense, getExpenses } from "../api/expenses"

const title = ref("")
const amount = ref(0)
const list = ref([])

async function add(){
  await addExpense({title:title.value,amount:amount.value})
  title.value=""; amount.value=0;
  list.value = await getExpenses()
}

onMounted(async()=> list.value=await getExpenses())
</script>
=======
<template>
  <AppLayout>
    <template #title>Expenses</template>

    <div class="p-4 flex gap-2">
      <input v-model="title" placeholder="Expense Title" class="input"/>
      <input v-model.number="amount" type="number" placeholder="Amount" class="input"/>
      <button @click="add" class="btn">Add</button>
    </div>

    <table class="w-full mt-4 border">
      <tr class="bg-gray-100"><th>Title</th><th>Amount</th></tr>
      <tr v-for="e in list" :key="e.id">
        <td>{{ e.title }}</td><td>₹{{ e.amount }}</td>
      </tr>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { addExpense, getExpenses } from "../api/expenses"

const title = ref("")
const amount = ref(0)
const list = ref([])

async function add(){
  await addExpense({title:title.value,amount:amount.value})
  title.value=""; amount.value=0;
  list.value = await getExpenses()
}

onMounted(async()=> list.value=await getExpenses())
</script>
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
