<template>
  <div class="row">
    <div class="col-8">

      <InstagramCard :key="a" :info="a" v-for="a in banana"/>

    </div>
    <div class="col-4">
      Mi smo sidebar
    </div>
  </div>
</template>

<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from '@/store.js'
export default {
   data() {
 return {
 cards: [
 { id:'goran karan',title: 'jedan', time: 'an hour ago', url: 'https://picsum.photos/id/1/400/400' },  
 { id:'netko tamo',title: 'dva', time: '2 days ago', url: 'https://picsum.photos/id/2/400/400' }, 
  { id:'easy peasy lemon squeezy',title: 'tri', time: '3 days ago', url: "https://picsum.photos/id/3/400/400" }, 
 ]
 }
 },
 computed:{
   banana(){
   return this.cards.filter(nesto=>nesto.title.includes(store.searchTerm)||nesto.id.includes(store.searchTerm))
   }
 },
  name: 'home',
  components: {
    InstagramCard
  }
}
</script>

<style lang="scss">

.card-body {
  padding: 0px;
}

</style>