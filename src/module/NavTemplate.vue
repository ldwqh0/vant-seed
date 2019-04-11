<template>
  <view-box padding-bottom="50px">
    <template #header>
      <nav-bar title="小蜜蜂" fixed/>
    </template>
    <transition enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft">
      <router-view/>
    </transition>
    <template #bottom>
      <tabbar v-model="selected">
        <tabbar-item :to="{name:'home', replace:true}">
          <img slot="icon" src="@/assets/100x100.png">
          首页
        </tabbar-item>
        <tabbar-item :to="{name:'wallet', replace:true}">
          <img slot="icon" src="@/assets/100x100.png">
          钱包
        </tabbar-item>
        <tabbar-item :to="{name:'myIndex', replace:true}">
          <img slot="icon" src="@/assets/100x100.png">
          我的
        </tabbar-item>
      </tabbar>
    </template>
  </view-box>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Tabbar, TabbarItem, NavBar } from 'vant'
  import ViewBox from '@/components/ViewBox'

  @Component({
    components: {
      Tabbar,
      TabbarItem,
      NavBar,
      ViewBox
    }
  })
  export default class NavTemplate extends Vue {
    selected = 0
  }
</script>
<style lang="less" scoped>
  @import "~animate.css/source/_base.css";
  @import "~animate.css/source/bouncing_entrances/bounceInRight.css";
  @import "~animate.css/source/bouncing_exits/bounceOutLeft.css";

  #app {
    .view-box {
      padding-top: 46px;
      padding-bottom: 50px;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;

      .content {
        height: 100%;
        overflow-y: scroll;
      }
    }
  }
</style>
