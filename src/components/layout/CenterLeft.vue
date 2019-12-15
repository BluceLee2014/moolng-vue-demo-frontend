<template>
  <Sider ref="side1" breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <Menu width="auto" theme="dark" :class="menuitemClasses" @on-select="openMenu2">
      <menu-item v-for="m in menuData" :name="m.id" @click.native="openMenu" :to="m.uri" :key="m.id">
        <Icon :type="m.icon"></Icon>
        <span>{{m.name}}</span>
      </menu-item>
    </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'CenterLeft'
}
</script>

<style scoped>

</style>
