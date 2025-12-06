<template>
  <AppLayout>
    <template #title>Settings</template>

    <div class="p-4">
      <input type="file" @change="uploadLogo" class="mt-2"/>

      <div v-if="logo" class="mt-3">
        <img :src="logo" class="h-24 w-24 rounded-full"/>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import { ref, onMounted } from "vue"
import { uploadShopLogo, getShopLogo } from "../api/users"

const logo = ref("")

async function uploadLogo(e){
  const file = e.target.files[0]
  await uploadShopLogo(file)
  logo.value = await getShopLogo()
}

onMounted(async()=> logo.value = await getShopLogo())
</script>
