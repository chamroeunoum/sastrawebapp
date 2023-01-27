<script setup>
defineProps({
  // image: {
  //   type: String ,
  //   required: true ,
  //   default: "https://picsum.photos/200/250"
  // },
  title: {
    type: String ,
    required: true ,
    default: 'No Title'
  },
  desc: {
    type: String ,
    required: true ,
    default: "No description"
  }
})
</script>
<template>
  <div class="item w-60 m-4 border border-gray-300 rounded p-4">
    <!-- <div class="w-full" >
      <img :src="image" />
    </div> -->
    <div class="details mt-4">
      <h3>{{ title }}</h3>
      {{ desc }}
    </div>
  </div>
</template>

<style scoped>

</style>
