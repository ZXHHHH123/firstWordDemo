<template>
    <div>
    <silder-bar></silder-bar>
</div>
</template>
<script>
import silderBar from '@/components/silderbar'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {
    silderBar
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>
<style>
 a{
   text-decoration: none
 }
</style>
