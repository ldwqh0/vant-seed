<template>
  <div class="wallet">钱包首页</div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Wallet extends Vue {

  }
</script>

<style scoped lang="less">
  .wallet {
    position: absolute;
    width: 100%;
    top: 0;
  }
</style>
