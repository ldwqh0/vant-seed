<!--弹出式区县选择框-->
<template>
  <div>
    <cell :required="required" is-link @click="visible=true">
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
      <template> {{ displayName || placeholder }}</template>
    </cell>
    <popup v-model="visible"
           position="bottom">
      <v-area :area-list="areaList"
              @confirm="confirm"
              :value="value"/>
    </popup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { Area, Cell, Popup } from 'vant'

  @Component({
    components: {
      VArea: Area,
      Cell,
      Popup
    }
  })
  export default class PopupArea extends Vue {
    visible = false

    @Prop({ default: false })
    required

    @Prop({ default: '请选择' })
    placeholder

    @Prop({ default: '地区' })
    title

    @Prop({ default: { province_list: {}, city_list: {}, county_list: {} } })
    areaList

    @Prop({ default: '' })
    value

    get displayName () {
      let result = `${this.province || ''} ${this.city || ''} ${this.areaList['county_list'][this.value] || ''}`
      return result.trim() === '' ? undefined : result
    }

    get province () {
      return this.areaList['province_list'][this.value.substring(0, 2).padEnd(6, '0')]
    }

    get city () {
      return this.areaList['city_list'][this.value.substring(0, 4).padEnd(6, '0')]
    }

    confirm (value) {
      this.visible = false
      let result = value[value.length - 1]['code']
      this.$emit('input', result)
      this.$emit('confirm', value)
    }
  }
</script>

<style lang="less" scoped>

</style>
