<<<<<<< HEAD
<template>
  <AppLayout>
    <template #title>Dashboard</template>

    <div class="grid md:grid-cols-3 gap-4 p-4">
      <StatCard title="Sales Today" :value="`₹${salesToday}`" icon="💰"/>
      <StatCard title="Total Bills" :value="billsToday" icon="🧾"/>
      <StatCard title="Top Service" :value="topService" icon="🏆"/>
    </div>

    <ChartCard title="Monthly Sales" :data="chartData"/>

  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import StatCard from "../components/StatCard.vue"
import ChartCard from "../components/ChartCard.vue"
import { ref, onMounted } from "vue"
import { getDashboardStats } from "../api/billing"

const salesToday = ref(0)
const billsToday = ref(0)
const topService = ref("Loading...")
const chartData = ref([])

onMounted(async ()=>{
  const data = await getDashboardStats()
  salesToday.value = data.sales
  billsToday.value = data.bills
  topService.value = data.topService
  chartData.value = data.chart
})
</script>
=======
<template>
  <AppLayout>
    <template #title>Dashboard</template>

    <div class="grid md:grid-cols-3 gap-4 p-4">
      <StatCard title="Sales Today" :value="`₹${salesToday}`" icon="💰"/>
      <StatCard title="Total Bills" :value="billsToday" icon="🧾"/>
      <StatCard title="Top Service" :value="topService" icon="🏆"/>
    </div>

    <ChartCard title="Monthly Sales" :data="chartData"/>

  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import StatCard from "../components/StatCard.vue"
import ChartCard from "../components/ChartCard.vue"
import { ref, onMounted } from "vue"
import { getDashboardStats } from "../api/billing"

const salesToday = ref(0)
const billsToday = ref(0)
const topService = ref("Loading...")
const chartData = ref([])

onMounted(async ()=>{
  const data = await getDashboardStats()
  salesToday.value = data.sales
  billsToday.value = data.bills
  topService.value = data.topService
  chartData.value = data.chart
})
</script>
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
