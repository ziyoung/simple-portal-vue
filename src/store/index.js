import Vue from 'vue'
// 一个极简的 store，方便我们理解 wormhole 组件的原理

const Store = Vue.extend({
  data() {
    return {
      state: {}
    }
  },
  methods: {
    update(key, val) {
      if (!this.state[key]) {
        this.$set(this.state, key, val)
      } else {
        this.state[key] = val
      }
    },
    deleteData(key) {
      this.$delete(this.state, key)
    }
  }
})

const store = new Store()

export default store
