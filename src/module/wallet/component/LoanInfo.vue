<template>
  <div class="loan-info">
    <tabs>
      <tab title="进程">
        贷款进程
      </tab>
      <tab title="贷款金额">
        贷款金额
      </tab>
      <tab title="申贷信息">
        申贷信息
      </tab>
    </tabs>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Tab, Tabs } from 'vant'

  @Component({
    components: {
      Tabs, Tab
    }
  })
  export default class LoanInfo extends Vue {
  }
</script>

<style scoped>

</style>
