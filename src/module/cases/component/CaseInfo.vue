<template>
  <div>案例详情 {{ id }}</div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class CompanyInfo extends Vue {
    @Prop()
    id
  }
</script>

<style lang="less" scoped>

</style>
