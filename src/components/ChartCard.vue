<<<<<<< HEAD
<template>
  <div class="bg-white rounded-lg shadow p-4 mt-4">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";

const props = defineProps(["title", "data"])
const chartCanvas = ref(null)

onMounted(()=>{
  new Chart(chartCanvas.value,{
    type:"bar",
    data:{
      labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets:[{
        label:"Sales",
        data: props.data,
        backgroundColor: "#2E7D32"
      }]
    }
  })
})
</script>
=======
<template>
  <div class="bg-white rounded-lg shadow p-4 mt-4">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";

const props = defineProps(["title", "data"])
const chartCanvas = ref(null)

onMounted(()=>{
  new Chart(chartCanvas.value,{
    type:"bar",
    data:{
      labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets:[{
        label:"Sales",
        data: props.data,
        backgroundColor: "#2E7D32"
      }]
    }
  })
})
</script>
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
