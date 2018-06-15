<template>
    <div>
    <silder-bar></silder-bar>
        this is comp1
        <el-row>
            <el-button type="text" @click="showDialog" >打开嵌套表单的 Dialog</el-button>

        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
        <dialog-form :isVisible='dialogFormVisible' :jsonList='jsonList' v-on:fixVisible = 'fixVisible'></dialog-form>

        </el-row>
    </div>
</template>
<script>
import dialogForm from '@/components/dialog'
import axios from 'axios'
import silderBar from '@/components/silderbar'
export default {
  data () {
    return {
      dialogFormVisible: false,
      jsonList: ''
    }
  },
  mounted () {
    this.getJson()
  },
  components: {
    dialogForm,
    silderBar
  },
  methods: {
    //  修改dialog的visible并且通过prop传值给dialog组件
    showDialog: function () {
      this.dialogFormVisible = true
      console.log(this.dialogFormVisible)
    },
    //  通过子组件触发的事件对dialog进行修改
    fixVisible: function (data) {
      this.dialogFormVisible = false
    },
    getJson: function () {
      console.log(566)
      axios.get('./../../static/data.json').then((res) => {
        console.log(res.data)
        this.jsonList = res.data.result
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style>
 a{
   text-decoration: none
 }
</style>
