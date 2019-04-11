<template>
  <div class="my">
    <cell-group>
      <cell is-link :to="{name:'myProgress'}">
        <template #icon>
          <icon name="shop-o"/>
        </template>
        <template #title>
          装修进度
        </template>
      </cell>

      <cell is-link :to="{name:'myInfo'}">
        <template #icon>
          <icon name="shop-o"/>
        </template>
        <template #title>
          基本信息
        </template>
      </cell>

      <cell is-link :to="{name:'myFavorites'}">
        <template #icon>
          <icon name="shop-o"/>
        </template>
        <template #title>
          我的收藏
        </template>
      </cell>
    </cell-group>
    <cell-group>
      <cell is-link :to="{name:'myNotices'}">
        <template #icon>
          <icon name="shop-o"/>
        </template>
        <template #title>
          通知信息
        </template>
      </cell>

      <cell is-link :to="{name:'mySuggestion'}">
        <template #icon>
          <icon name="shop-o"/>
        </template>
        <template #title>
          意见反馈
        </template>
      </cell>
    </cell-group>
    <cell-group>
      <cell is-link :to="{name:'settings'}">
        <template #title>设置</template>
      </cell>
    </cell-group>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import { Cell, Icon, CellGroup } from 'vant'

  const myModule = namespace('my')
  @Component({
    components: {
      Cell,
      Icon,
      CellGroup
    }
  })
  export default class MyIndex extends Vue {
    @myModule.Action('action1')
    getInfo

    @myModule.Getter('info')
    info

    mounted () {
      this.getInfo()
    }
  }
</script>

<style scoped lang="less">
  .my {
    position: absolute;
    width: 100%;
    top: 0;
  }
</style>
