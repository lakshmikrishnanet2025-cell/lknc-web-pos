<<<<<<< HEAD
<template>
  <AppLayout>
    <template #title>Reports</template>

    <div class="p-4">
      <button @click="load" class="btn">Generate Report</button>

      <table v-if="list.length" class="w-full mt-4 border">
        <tr class="bg-gray-100"><th>Date</th><th>Total</th></tr>
        <tr v-for="b in list" :key="b.id">
          <td>{{ b.date }}</td><td>₹{{ b.total }}</td>
        </tr>
      </table>

      <p v-if="list.length" class="mt-3 font-bold">Total: ₹{{ sum }}</p>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref } from "vue"
import { getBills } from "../api/billing"

const list = ref([])
const sum = ref(0)

async function load(){
  const r = await getBills()
  list.value = r
  sum.value = r.reduce((a,b)=>a+b.total,0)
}
</script>
=======
<template>
  <AppLayout>
    <template #title>Reports</template>

    <div class="p-4">
      <button @click="load" class="btn">Generate Report</button>

      <table v-if="list.length" class="w-full mt-4 border">
        <tr class="bg-gray-100"><th>Date</th><th>Total</th></tr>
        <tr v-for="b in list" :key="b.id">
          <td>{{ b.date }}</td><td>₹{{ b.total }}</td>
        </tr>
      </table>

      <p v-if="list.length" class="mt-3 font-bold">Total: ₹{{ sum }}</p>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref } from "vue"
import { getBills } from "../api/billing"

const list = ref([])
const sum = ref(0)

async function load(){
  const r = await getBills()
  list.value = r
  sum.value = r.reduce((a,b)=>a+b.total,0)
}
</script>
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
