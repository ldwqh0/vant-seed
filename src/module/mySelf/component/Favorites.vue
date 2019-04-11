<template>
  <tabs>
    <tab title="店铺">
      店铺收藏
    </tab>
    <tab title="商品">
      商品收藏
    </tab>
  </tabs>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Tab, Tabs } from 'vant'

  @Component({
    components: {
      Tabs,
      Tab
    }
  })
  export default class Favorites extends Vue {

  }
</script>

<style lang="less" scoped>

</style>
