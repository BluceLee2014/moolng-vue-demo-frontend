<template>
  <Layout>
    <router-view name="layoutCenterLeft"></router-view>
    <Layout>
      <router-view name="layoutCenterRight"></router-view>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'Center'
}
</script>

<style scoped>

</style>
