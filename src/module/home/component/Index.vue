<template>
  <div class="home">
    <swipe>
      <swipe-item v-for="(banner,index) in banners" :key="index">
        <a @click="goto(banner)">
          <img v-lazy="banner.img">
        </a>
      </swipe-item>
    </swipe>
    <v-row>
      <v-col v-for="(nav,index) in navigations" :key="index">
        <!-- TODO 根据传入的数据是否有type属性，来确定是否显示敬请期待图标-->
        <a @click="goto(nav)" v-if="nav.type">
          <icon :name="nav.img"/>
          <span>{{ nav.title }}</span>
        </a>
        <div v-else>敬请期待</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Swipe, SwipeItem, Lazyload, Icon, Row, Col, Badge } from 'vant'
  import { namespace } from 'vuex-class'

  Vue.use(Lazyload)

  const homeModule = namespace('home')
  @Component({
    components: {
      SwipeItem,
      Swipe,
      Icon,
      VBadge: Badge,
      VRow: Row,
      VCol: Col
    }
  })
  export default class Index extends Vue {
    @homeModule.State('banners')
    banners

    @homeModule.State('navigations')
    navigations

    @homeModule.Action('loadBanners')
    loadBanners

    @homeModule.Action('loadNavigations')
    loadNavigations

    /**
     * 跳转到指定目标
     * @param target
     */
    goto ({ type: name, params }) {
      this.$router.push({
        name,
        params
      })
    }

    created () {
      this.loadBanners()
      this.loadNavigations()
    }
  }
</script>

<style lang="less" scoped>
  .home {
    position: absolute;
    top: 0;
    width: 100%;

    .van-swipe {
      img {
        width: 100%;
      }
    }

    .van-col {
      float: none;
      text-align: center;
      height: 100px;
      display: inline-block;
      vertical-align: middle;

      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }

    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #ff0000;
    }
  }
</style>
