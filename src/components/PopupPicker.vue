<!--弹出式选择器-->
<template>
  <div class="popup-picker">
    <cell is-link @click="visible=true">
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
      {{ value||placeholder }}
    </cell>
    <popup v-model="visible" position="bottom">
      <picker show-toolbar
              :columns="columns"
              @confirm="confirm"
              @change="change"
              @cancel="cancel"/>
    </popup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { Popup, Cell, Picker } from 'vant'

  @Component({
    components: {
      Cell,
      Popup,
      Picker
    }
  })
  export default class PopupPicker extends Vue {
    visible = false

    @Prop()
    value

    @Prop({ default: [] })
    columns

    @Prop()
    title

    @Prop({ type: String, default: '请选择' })
    placeholder

    confirm (value) {
      this.visible = false
      this.$emit('input', value)
      this.$emit('confirm', value)
    }

    cancel (value) {
      this.visible = false
      this.$emit('cancel', value)
    }

    change (value) {
      this.$emit('change', value)
    }
  }
</script>

<style lang="less" scoped>

</style>
