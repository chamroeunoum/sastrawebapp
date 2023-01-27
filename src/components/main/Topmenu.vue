<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
import { Switcher, Filter } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { IosCheckmarkCircleOutline, IosRefresh } from '@vicons/ionicons4'
import { TrashOutline, CloseCircleOutline } from '@vicons/ionicons5'
import { useDialog, useMessage, useNotification } from 'naive-ui'
import { Edit20Regular, Key16Regular, Save20Regular, Add20Regular, Search20Regular , ContactCard28Regular, DocumentPdf24Regular } from '@vicons/fluent'
</script>
<template>
  <!-- Top menu -->
  <header class="vcb-sastra-topmenu bg-white border-b border-gray-200 flex" >
    <!-- Logo -->
    <div class="m-2 flex-none w-20">
      <img
        alt="Vue logo"
        class=""
        src="@/assets/img/logo.png"
        width="40"
        height="40"
      />
    </div>
    <!-- Search box -->
    <div class="relative grow" >
      <input type="text" class="bg-gray-100 px-2 h-9 my-3 w-full rounded border border-gray-200 focus:border-blue-600 hover:border-blue-600 " placeholder="ស្វែងរក..." />
      <Icon size="27" class="absolute right-1 top-4 text-gray-400 hover:text-blue-700 cursor-pointer" >
        <!-- <n-icon> -->
          <Search20Regular />
        <!-- </n-icon> -->
      </Icon>
    </div>
    <!-- Authentication section -->
    <div class="w-2/5 relative flex-none w-60" >
    </div>
  </header>
</template>
<style scoped>
  
</style>