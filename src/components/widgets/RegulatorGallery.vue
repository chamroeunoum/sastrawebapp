<script setup>
import { useNotification } from 'naive-ui'
import Book from './Book.vue'
</script>
<template>
  <div class="flex flex-wrap justify-between">
    <Book v-for="i in 10" :key="i" :image="'https://picsum.photos/'+(200*1)" :title="'Title' + i" :desc="'Desc : ' + i" ></Book>
  </div>
</template>
<script>
export default{
  setup(){
    const notify = useNotification();
    this.$store.dispatch('regulators/list').then(res => {
      if( res.data.ok ){
        notify.success({
          title: 'លិខិតបទដ្ឋានគតិយុត្ត' ,
          description: 'អានលិខិតបទដ្ឋានគតិយុត្តរួចរាល់។' ,
          duration: 3000
        })
      }else{
        notify.error({
          title: 'លិខិតបទដ្ឋានគតិយុត្ត' ,
          description: 'មានបញ្ហាក្នុងពេលអាន លិខិតបទដ្ឋានគតិយុត្ត។' ,
          duration: 3000
        })
      }
    }).catch(err => {
      console.log( err );
    });
  }
}
</script>