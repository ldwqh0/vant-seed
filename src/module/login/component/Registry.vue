<template>
  <div class="registry">
    <cell-group>
      <field required
             label="手机号"
             v-model="formData.phoneNumber"
             name="phoneNumber"
             data-vv-as="手机号码"
             data-vv-scope="form"
             :error="errors.has('form.phoneNumber')"
             v-validate="{required:true,regex:/^1\d{10}$/,notExists:true}"
             :error-message="errors.first('form.phoneNumber')"/>
      <field required
             v-model="verifyCode"
             label="图片验证码"
             data-vv-as="图片验证码"
             data-vv-scope="checker"
             name="verifyCode"
             v-validate="'required|verifyCode'"
             :error="errors.has('checker.verifyCode')"
             :error-message="errors.first('checker.verifyCode')">
        <template #button>
          <v-button size="small" @click="refreshVerifyCode">
            <img style="height: 20px;" :src="'data:image/png;base64,'+verifyImg.imgData">
          </v-button>
        </template>
      </field>
      <field required
             label="手机验证码"
             name="smsCode"
             v-model="smsCode"
             v-validate="'required|smsCode'"
             data-vv-as="验证码"
             data-vv-scope="form"
             :error="errors.has('form.smsCode')"
             :error-message="errors.first('form.smsCode')">
        <v-button slot="button"
                  @click="getCode"
                  size="small"
                  type="primary">
          获取验证码
        </v-button>
      </field>
      <field required
             ref="password"
             label="密码"
             type="password"
             data-vv-as="密码"
             data-vv-scope="form"
             name="password"
             v-validate="'required|min:6'"
             v-model="formData.password"
             :error="errors.has('form.password')"
             :error-message="errors.first('form.password')"/>
      <field required
             label="确认密码"
             type="password"
             data-vv-as="确认密码"
             data-vv-scope="form"
             name="repassword"
             v-validate="'required|confirmed:password'"
             v-model="formData.repassword"
             :error="errors.has('form.repassword')"
             :error-message="errors.first('form.repassword')"/>
    </cell-group>
    <v-button @click="doRegistry">注册</v-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Cell, CellGroup, Field, Button } from 'vant'
  import { namespace } from 'vuex-class'

  const loginModule = namespace('login')
  @Component({
    components: {
      CellGroup,
      Cell,
      Field,
      VButton: Button
    }
  })
  export default class Registry extends Vue {
    // 存储用户输入的验证码
    verifyCode = ''
    smsCode = ''
    smsId = ''
    formData = {
      phoneNumber: '',
      password: '',
      repassword: ''
    }

    verifyImg = {}

    @loginModule.Action('sendSms')
    sendSms

    @loginModule.Action('registry')
    registry

    @loginModule.Action('validatePhoneNumber')
    validPhoneNumber

    @loginModule.Action('verifyCode')
    loadVerifyCode

    @loginModule.Action('checkVerifyCode')
    checkVerifyCode

    @loginModule.Action('checkSmsCode')
    checkSmsCode

    created () {
      // 扩展校验规则，使之可以校验手机号码是否被占用
      this.$validator.extend('notExists', {
        validate: value => this.validPhoneNumber(value).then(res => !res),
        getMessage: () => '手机号已经被注册'
      })
      this.$validator.extend('verifyCode', {
        validate: value => this.checkVerifyCode({ id: this.verifyImg.id, code: this.verifyCode }),
        getMessage: () => '验证码错误'
      })
      this.$validator.extend('smsCode', {
        validate: value => this.checkSmsCode({
          id: this.smsId,
          phoneNumber: this.formData.phoneNumber,
          code: this.smsCode
        }),
        getMessage: () => '手机验证码错误'
      })
      this.refreshVerifyCode()
    }

    refreshVerifyCode () {
      this.loadVerifyCode().then(data => (this.verifyImg = data))
    }

    getCode () {
      this.$validator.validate('form.phoneNumber').then(() => {
        return this.$validator.validate('checker.*')
      }).then(valid => {
        if (valid) {
          return this.sendSms({
            params: {
              verifyId: this.verifyImg.id,
              verifyCode: this.verifyCode
            },
            data: {
              phoneNumber: this.formData.phoneNumber
            }
          })
        }
      }).then(({ id }) => {
        this.smsId = id
      })
    }

    doRegistry () {
      this.$validator.validate('form.*').then(valid => {
        if (valid) {
          return this.registry({
            params: {
              smsId: this.smsId,
              smsCode: this.smsCode,
              phoneNumber: this.formData.phoneNumber
            },
            data: this.formData
          })
        }
      }).then(rsp => {
        this.$router.replace({ name: 'login' })
      })
    }
  }
</script>

<style scoped>

</style>
