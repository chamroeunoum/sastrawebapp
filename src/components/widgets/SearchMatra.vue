<script setup>
import { Switcher, Filter, UserAvatar } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { IosCheckmarkCircleOutline, IosRefresh } from '@vicons/ionicons4'
import { TrashOutline, CloseCircleOutline, Apps } from '@vicons/ionicons5'
import { ArrowBarToLeft, ArrowBarLeft, ArrowBarToRight } from '@vicons/tabler'
import { ArrowBackIosNewRound, ArrowForwardIosRound } from '@vicons/material'
import { useDialog, useMessage, useNotification } from 'naive-ui'
import { Edit20Regular, Key16Regular, Save20Regular, Add20Regular, Search20Regular , ContactCard28Regular, DocumentPdf24Regular, Settings20Regular } from '@vicons/fluent'
</script>
<template>
  <header class="vcb-sastra-topmenu bg-white border-b border-gray-200 flex p-8 h-30" >
    <!-- Logo -->
    <div class="flex-none w-40 h-14 relative ">
      <img
        alt="Sastra Logo"
        class="inline-block mr-3 w-14 h-14 "
        src="@/assets/img/logo.png"
      />
      <div class="inline-block module-title font-muol text-lg text-gray-800 h-14">សាស្ត្រា</div>
    </div>
    <!-- Search box -->
    <div class="relative grow  h-14 " >
      <div class="w-2/5 relative p-2">
        <input v-model="searching" @keypress.enter="search()" type="text" class="bg-gray-100 pl-5 pr-10 h-9 rounded-full  border border-gray-200 focus:border-blue-600 hover:border-blue-600 duration-300 w-full" placeholder="ស្វែងរក..." />
        <Icon size="27" class="absolute right-4 top-3 text-gray-400 hover:text-blue-700 cursor-pointer" >
          <Search20Regular />
        </Icon>
      </div>
    </div>
    <!-- Authentication section -->
    <div v-if="false" class="flex-none w-60 text-right  h-14" >
      <div class="inline-block w-14 h-14 text-center align-middle ">
        <Icon size="24" class=" hover:text-blue-500 transition duration-300 cursor-pointer m-4" >
          <Settings20Regular />
        </Icon>
      </div>
      <div class="inline-block w-14 h-14 text-center align-middle ">
        <Icon size="24" class=" hover:text-blue-500 transition duration-300 cursor-pointer m-4" >
          <Apps />
        </Icon>
      </div>
      <div class="inline-block ml-5 w-14 h-14 text-center align-middle ">
        <Icon size="48" class=" hover:text-blue-500 transition duration-300 cursor-pointer m-1" >
          <UserAvatar />
        </Icon>
      </div>
    </div>
  </header>
  <div class="flex flex-wrap justify-between px-24">
    <div class="mx-auto py-6 border-b border-gray-100 text-left w-full">លទ្ធផលនៃការស្វែងរកមានចំនួន ៖ {{ pagination.totalRecords }}</div>
    <div class="my-6 pb-2 w-full flex flex-wrap">
      <div class="grid grid-cols-4 gap-0" >
        <div class="col-span-3" >
          <div v-for="(item, index) in records" :key="index" class="mb-12 " >
            <!-- Ads -->
            <!-- <div v-if="index%5==0" class="pkc-ads-panel" >
              <a href="#" ><img src="https://picsum.photos/1024/200" /></a>
            </div> -->
            <!-- End ads -->
            <div class="regulator mr-4 my-1 text-bold text-blue-600">{{ item.number }}</div>
            <div class="chapter mr-4 my-1 text-sm text-bold text-blue-600" v-html="applyTagMark(item.title)"></div>
            <div class="w-full mt-4 my-1 text-sm leading-7 text-gray-800 text-justify" v-html="applyTagMark(item.meaning)" ></div>
            <div class="w-full mt-4 text-sm leading-7 text-gray-500 flex flex-wrap" >
              <!-- <div v-if="item.regulator" class="mr-2 text-xs">{{ item.regulator.year }}</div> -->
              <div v-if="item.book" class="mr-2 my-1 text-xs">{{ item.book.title }}</div>
              <div v-if="item.kunty" class="mr-2 my-1 text-xs">{{ ' > ' + item.kunty.number + ' ៖  ' + item.kunty.title }}</div>
              <div v-if="item.matika" class="mr-2 my-1 text-xs">{{ ' > ' + item.matika.number + ' ៖  ' + item.matika.title }}</div>
              <div v-if="item.chapter" class="mr-2 my-1 text-xs">{{ ' > ' + item.chapter.number + ' ៖  ' + item.chapter.title }}</div>
              <div v-if="item.part" class="mr-2 my-1 text-xs">{{ ' > ' + item.part.number + ' ៖  ' + item.part.title }}</div>
              <div v-if="item.section" class="mr-2 my-1 text-xs">{{ ' > ' + item.section.number + ' ៖  ' + item.section.title }}</div>
            </div>
          </div>
          <div v-if="pagination.totalPages > 0" class="flex flex-wrap justify-center pagination my-12">
            <div v-if="pagination.page > 1 " class="first w-12 h-8 text-center align-middle" @click="goTo(pagination.first)">
              <Icon size="20" class="text-gray-800 align-middle text-center hover:text-blue-500 transition duration-300 cursor-pointer m-1" >
                <ArrowBarToLeft />
              </Icon>
            </div>
            <!-- <div v-if="pagination.page > 1" class="previous w-12 h-8 text-center align-middle">
              <Icon size="20" class="text-gray-800 align-middle text-center hover:text-blue-500 transition duration-300 cursor-pointer m-1" >
                <ArrowBackIosNewRound />
              </Icon>
            </div> -->
            <div v-for="(page, index) in pagination.buttons" :key="index" class="pages h-8 mx-2 font-bold" @click="pagination.page == page ? false : goTo(page) " >
              <div :class="'page w-8 h-8 text-center align-middle leading-8 cursor-pointer' + (pagination.page == page ? ' text-blue-500' : '' ) ">{{ page }}</div>
            </div>
            <!-- <div v-if="pagination.page < pagination.totalPages " class="next w-12 h-8 text-center align-middle">
              <Icon size="20" class="text-gray-800 align-middle text-center hover:text-blue-500 transition duration-300 cursor-pointer m-1" >
                <ArrowForwardIosRound />
              </Icon>
            </div> -->
            <div v-if=" pagination.page < pagination.totalPages " class="last w-12 h-8 text-center align-middle" @click="goTo(pagination.totalPages)" >
              <Icon size="20" class="text-gray-800 align-middle text-center hover:text-blue-500 transition duration-300 cursor-pointer m-1" >
                <ArrowBarToRight />
              </Icon>
            </div>
          </div>
        </div>
        <div class=" ml-12" >
          <!-- <div class="mb-8">
            <a href="#" ><img src="https://picsum.photos/1024" /></a>
          </div>
          <div class="mb-8">
            <a href="#" ><img src="https://picsum.photos/1024" /></a>
          </div>
          <div class="mb-8">
            <a href="#" ><img src="https://picsum.photos/1024" /></a>
          </div>
          <div class="mb-8">
            <a href="#" ><img src="https://picsum.photos/1024" /></a>
          </div>
          <div class="mb-8">
            <a href="#" ><img src="https://picsum.photos/1024" /></a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-if="adsFullShower" class="pkc-ads-panel-full relative" >
    <a href="#" ><img src="https://picsum.photos/768/1024" /></a>
    <div class="absolute right-5 top-5 " @click="adsFullShower=!adsFullShower">
      <Icon size="40" class="bg-white rounded-full hover:text-red-500 transition duration-300 cursor-pointer m-4" >
        <CloseCircleOutline />
      </Icon>
    </div>
  </div> -->
</template>
<script>
export default{
  data(){
    return {
      records: [] ,
      pagination: {
        page : 1 ,
        perPage : 20 ,
        first: 1 ,
        last: 1 ,
        previous: 1 ,
        next: 1 ,
        totalPages: 1 ,
        totalRecords: 0 ,
        start: 0 ,
        end: 0 ,
        buttons:[]
      },
      searching: '' ,
      adsFullShower: true 
    }
  },
  setup(){
    const notify = useNotification();
  },
  mounted(){
    this.getRecords()
  },
  methods: {
    /**
     * Mark the matched text with in search box
     */
    applyTagMark(str){
      // Split the string by whitespace
      if( this.searching.trim() != "" ){
        var arrStrSearch = this.searching.split(/(\s+)/).filter( e => e.trim().length > 0).map( e => e.replaceAll(" ","") )
        for( var i in arrStrSearch ){
          if( str.includes( arrStrSearch[i] ) ) str = str.replaceAll( arrStrSearch[i] , '<mark>' + arrStrSearch[i] + '</mark>' ) 
        }
      }
      return str
    },
    getRecords(){
      this.$store.dispatch('matra/list',{
        search: this.searching ,
        perPage: this.pagination.perPage ,
        page: this.pagination.page
      }).then(res => {        
        if( res.data.ok ){
          this.records = res.data.records
          this.pagination.first = res.data.pagination.first
          this.pagination.last = res.data.pagination.last
          this.pagination.previous = res.data.pagination.previous
          this.pagination.next = res.data.pagination.next
          this.pagination.page = res.data.pagination.page
          this.pagination.totalPages = res.data.pagination.totalPages
          this.pagination.totalRecords = res.data.pagination.totalRecords

          var paginationNumberList = 5
          if( ( this.pagination.page - ( paginationNumberList - 1 ) ) < 1 ){
            this.pagination.start = 1
            this.pagination.end = this.pagination.totalPages > 9 ? 9 : this.pagination.totalPages
          }
          else{
            this.pagination.start = this.pagination.page  - ( paginationNumberList - 1 )
            this.pagination.end = this.pagination.page + 4 >= this.pagination.totalPages ? this.pagination.totalPages : this.pagination.page + 4
          }
          /**
           * Create pagination buttons
           */
          this.pagination.buttons = []
          for(var i=this.pagination.start;i<=this.pagination.end;i++){
            this.pagination.buttons.push(i)
          }
          console.log( this.pagination.buttons )
        }else{
          
        }
      }).catch(err => {
        console.log( err );
      });
    } ,
    /**
     * Search function
     */
    search(){
      this.pagination.page = 1 
      this.getRecords()
    },
    /**
     * Pagination
     */
    /**
     * Go to page
     */
    goTo(page){
      this.pagination.page = page
      this.getRecords()
    }
  }
}
</script>

<style scoped >
  .pkc-ads-panel {
    @apply mb-8 w-full text-center ;
  }
  .pkc-ads-panel > a , .pkc-ads-panel > a > img {
    @apply m-auto;
  }
  .pkc-ads-panel-full {
    @apply fixed left-0 top-0 right-0 bottom-0 backdrop-opacity-10 bg-gray-600/50 p-10 text-center ;
  }
  .pkc-ads-panel-full > a , .pkc-ads-panel-full > a > img {
    @apply m-auto inline-block;
  }
</style>