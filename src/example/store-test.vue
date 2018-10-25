<template>
  <div>
    <h3>store 测试</h3>
    <template>
      <h5 v-if="state.arr">store 中的数据如下</h5>
      <p>{{ JSON.stringify(state.arr) }}</p>
    </template>
    <button @click="update">新增 store 数据</button>
    <button style="margin-left: 10px;" @click="deleteData">删除 store 数据</button>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'store-test',
  data() {
    return {
      state: store.state,
      count: 0
    }
  },
  methods: {
    update() {
      this.count ++
      const data = new Array(this.count).fill(this.count)
      store.update('arr', data)
    },
    deleteData() {
      store.deleteData('arr')
    }
  }
}
</script>
