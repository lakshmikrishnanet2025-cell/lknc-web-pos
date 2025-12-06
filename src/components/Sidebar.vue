<template>
  <aside class="w-56 bg-primary text-white h-screen p-4 fixed">
    <h2 class="text-2xl font-bold mb-6">LKNC POS</h2>
    <nav class="flex flex-col gap-3">
      <RouterLink v-for="link in links" 
        :key="link.to" 
        :to="link.to" 
        class="hover:bg-green-700 px-3 py-2 rounded">
        {{ link.name }}
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
const links = [
  { name:"Dashboard", to:"/dashboard" },
  { name:"Billing", to:"/billing" },
  { name:"Customers", to:"/customers" },
  { name:"Services", to:"/services" },
  { name:"Ledger", to:"/ledger" },
  { name:"Expenses", to:"/expenses" },
  { name:"Reports", to:"/reports" },
  { name:"Settings", to:"/settings" },
];
</script>
