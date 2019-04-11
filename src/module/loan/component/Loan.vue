<template>
  <div class="loan">
    <div class="protocol" v-if="step===0">
      <div>
        <div v-for="i in 50" :key="i">协议内容</div>
        协议内容
      </div>
      <div>
        <v-button @click="step=1">同意</v-button>
      </div>
    </div>
    <transition enter-active-class="animated bounceInRight">
      <div v-if="step===1" class="form">
        <cell-group title="申贷人信息">
          <field label="姓名"
                 required
                 clearable
                 v-model="formData.fullname"/>
          <field label="联系电话"
                 required
                 clearable
                 v-model="formData.tel"/>
        </cell-group>
        <cell-group title="联系地址">
          <popup-area required
                      :area-list="areaList"
                      v-model="formData.areaCode"/>
          <field required label="联系地址"/>
        </cell-group>

        <cell-group title="申贷房屋信息">
          <popup-area :area-list="areaList" v-model="formData.targetArea"/>
          <field label="具体地址"/>
          <field label="房屋面积"/>
          <popup-picker title="房屋户型"
                        placeholder="请选择"
                        v-model="formData.type"
                        :columns="columns"/>
        </cell-group>

        <cell-group title="申请贷款金额">
          <field label="申贷金额"/>
        </cell-group>

        <v-button @click="commit">提交</v-button>
      </div>
    </transition>
    <div v-if="step===2">
      完成
      <a>贷款信息</a>
      <a>返回</a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { CellGroup, Cell, Field, Area, Popup, Button } from 'vant'
  import { namespace } from 'vuex-class'
  import areas from './areas'
  import { PopupPicker, PopupArea } from '@/components'
  import 'animate.css/source/bouncing_entrances/bounceInRight.css'
  import 'animate.css/source/_base.css'

  const securityModule = namespace('security')
  @Component({
    components: {
      Cell,
      CellGroup,
      Field,
      VArea: Area,
      Popup,
      VButton: Button,
      Button,
      PopupPicker,
      PopupArea
    }
  })
  export default class Loan extends Vue {
    // 地区列表
    areaList = areas
    // 是否显示地址选择框
    showAreaPicker = false
    // 表单数据
    formData = {}
    step = 0

    columns = ['大房子', '中房子', '小房子']

    @securityModule.Action('loadCurrentUser')
    loadCurrentUser

    commit () {
      this.step = 2
    }

    created () {
      this.loadCurrentUser()
    }
  }
</script>

<style scoped>

</style>
