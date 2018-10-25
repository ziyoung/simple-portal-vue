<template>
  <div>
    <h4>支持多个 portal 以及多个 portal-target</h4>
    <div>
      <input type="checkbox" v-model="visible1" /><label>是否显示 slot 1</label>
    </div>
    <div>
      <input type="checkbox" v-model="visible2" /><label>是否显示 slot 2</label>
    </div>
    <portal to="multiple">
      <p v-if="visible1">multiple 测试一</p>
    </portal>
    <portal to="multiple">
      <p v-if="visible2">multiple 测试二</p>
    </portal>
    <p>可以同时创建多个 portal-target 组件</p>
    <portal-target name="multiple" multiple></portal-target>
    <portal-target name="multiple" multiple></portal-target>
    <portal-target name="multiple" multiple></portal-target>
  </div>
</template>
<script>
export default {
  name: 'multiple',
  data() {
    return {
      visible1: true,
      visible2: true
    }
  }
}
</script>

