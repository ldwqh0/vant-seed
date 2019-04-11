<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {

  }
</script>
<style lang="less">
  @import "./style/themes/default.less";

</style>
