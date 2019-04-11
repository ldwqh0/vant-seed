<template>
  <view-box>
    <template #header>
      <nav-bar @click-left="goBack"
               left-arrow
               title="小蜜蜂"
               fixed/>
    </template>
    <transition enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft">
      <router-view/>
    </transition>
  </view-box>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { NavBar } from 'vant'
  import { ViewBox } from '@/components'

  @Component({
    components: {
      NavBar,
      ViewBox
    }
  })
  export default class ContentTemplate extends Vue {
    goBack () {
      this.$router.go(-1)
    }
  }
</script>

<style scoped lang="less">
  @import "~animate.css/source/_base.css";
  @import "~animate.css/source/bouncing_entrances/bounceInRight.css";
  @import "~animate.css/source/bouncing_exits/bounceOutLeft.css";
</style>
