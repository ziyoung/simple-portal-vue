<template>
  <div>
    <h4>portal 最基本的功能</h4>
    <input type="checkbox" v-model="visible" /><label>是否显示 slot</label>
    <portal to="basic">
      <div v-if="visible">
        这个演示 
      </div>
    </portal>
    <portal-target name="basic">
    </portal-target>
  </div>
</template>
<script>
export default {
  name: 'basic',
  data() {
    return {
      visible: true
    }
  }
}
</script>

