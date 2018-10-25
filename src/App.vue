<template>
  <div id="app">
    <h2>选择一个链接</h2>
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">回到首页</router-link>
        </li>
        <li>
          <router-link to="/store-test">测试简单的 store</router-link>
        </li>
        <li>
          <router-link to="/basic">portal 基本用法</router-link>
        </li>
        <li>
          <router-link to="/multiple">portal multiple</router-link>
        </li>
        <li>
          <router-link to="/scoped-slot">portal scoped slot</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  border-bottom: 1px solid #eeeeee;
}
</style>
