<template>
  <div class="appointment">
    <div class="p1" v-if="step===0">
      免费预约
      <v-button @click="step=1">立即预约</v-button>
    </div>
    <div class="info" v-if="step===1">
      表单内容
    </div>
    <div class="result" v-if="step===3">
      预约结果
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Button } from 'vant'

  @Component({
    components: {
      VButton: Button
    }
  })
  export default class Index extends Vue {
    step = 0
  }
</script>

<style scoped lang="less">

</style>
