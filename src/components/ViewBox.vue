<template>
  <div class="view-box" :style="{paddingTop,paddingBottom}">
    <slot name="header"/>
    <div class="content">
      <slot/>
    </div>
    <slot name="bottom"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component({})
  export default class ViewBox extends Vue {
    @Prop({
      type: [String],
      default: () => '0px'
    })
    paddingBottom

    @Prop({
      type: [String],
      default: () => '46px'
    })
    paddingTop
  }
</script>

<style scoped lang="less">
  .view-box {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    .content {
      height: 100%;
      overflow-y: scroll;
      position: relative;
    }
  }
</style>
