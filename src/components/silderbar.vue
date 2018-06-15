<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="comp1">组件1</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="comp2">组件2</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="comp3">组件3</router-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
