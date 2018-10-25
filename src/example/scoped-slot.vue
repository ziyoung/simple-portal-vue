<template>
  <div>
    <h4>portal 支持 scoped slot</h4>
    <portal to="scoped-slot">
      <div slot-scope="{ message }">
        这里将会显示来自于 portal-target 组件中的： message => {{ message }}
      </div>
    </portal>
    <portal-target name="scoped-slot" :slot-props="slotProps">
    </portal-target>
  </div>
</template>
<script>
export default {
  name: 'scopedSlot',
  data() {
    return {
      slotProps: {
        message: 'Hello from portal-target'
      }
    }
  }
}
</script>
