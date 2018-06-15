<template>
    <div>
        <el-dialog title="获取静态数据" :visible="isVisible" @close='closeDialog'>
        <el-form>
            <li v-for="item in jsonList" :key="item.name">{{item.name}}   {{item.area}}</li>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="send">取 消</el-button>
            <el-button type="primary" @click="send">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  props: ['isVisible', 'jsonList'],
  created: function () {
    console.log('test')
  },
  data () {
    return {
      formLabelWidth: '200px'
    }
  },
  methods: {
    send: function () {
      this.$emit('fixVisible', 'isVisible')
    },
    closeDialog: function () {
      this.$emit('fixVisible', 'isVisible')
    }
  },
  watch: {
    isVisible: function (curVal, oldVal) {
      console.log(curVal, oldVal)
    }
  }
}
</script>
