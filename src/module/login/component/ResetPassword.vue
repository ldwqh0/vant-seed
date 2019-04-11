<template>
  <div class="reset-password">
    <cell-group>
      <field
        v-model="formData.phoneNumber"
        required
        label="手机号"
        name="phoneNumber"
        v-validate="{required:true,regex:/^1\d{10}$/,exist:true}"
        data-vv-as="手机号"
        data-vv-scope="form"
        :error="errors.has('form.phoneNumber')"
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

      <field
        v-model="smsCode"
        required
        label="验证码"
        name="smsCode"
        v-validate="'required|smsCode'"
        data-vv-as="手机验证码"
        data-vv-scope="form"
        :error="errors.has('form.smsCode')"
        :error-message="errors.first('form.smsCode')">
        <template #button>
          <v-button size="small" @click="getCode">获取验证码</v-button>
        </template>
      </field>
    </cell-group>
    <v-button @click="validCode">下一步</v-button>
    <popup position="right" v-model="codeValidated">
      <cell-group>
        <field
          required
          label="密码"
          ref="password"
          v-model="formData.password"
          name="password"
          data-vv-as="密码"
          data-vv-scope="password"
          v-validate="'required|min:6'"
          :error="errors.has('password.password')"
          :error-message="errors.first('password.password')"/>
        <field
          required
          label="确认密码"
          v-model="formData.repassword"
          name="repassword"
          data-vv-as="确认密码"
          data-vv-scope="password"
          v-validate="'required|confirmed:password'"
          :error="errors.has('password.repassword')"
          :error-message="errors.first('password.repassword')"/>
      </cell-group>
      <!--      <v-button @click="codeValidated=false">上一步</v-button>-->
      <v-button @click="resetPassword">确定</v-button>
    </popup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { CellGroup, Field, Button, Popup } from 'vant'
  import { namespace } from 'vuex-class'

  const loginModule = namespace('login')
  @Component({
    components: {
      CellGroup,
      Field,
      VButton: Button,
      Popup
    }
  })
  export default class ResetPassword extends Vue {
    codeValidated = false
    verifyCode = ''
    smsId = ''
    smsCode = ''
    formData = {
      phoneNumber: '',
      password: '',
      repassword: ''
    }
    verifyImg = {}

    @loginModule.Action('verifyCode')
    loadVerifyCode

    @loginModule.Action('validatePhoneNumber')
    validPhoneNumber

    @loginModule.Action('sendSms')
    sendSms

    @loginModule.Action('checkVerifyCode')
    checkVerifyCode

    @loginModule.Action('checkSmsCode')
    checkSmsCode

    @loginModule.Action('resetPassword')
    resetPasswordAction

    validCode () {
      this.$validator.validate('form.*')
        .then((valid) => {
          if (valid) {
            this.codeValidated = true
          }
        })
    }

    created () {
      // 扩展校验规则，使之可以校验手机号码是否被占用
      this.$validator.extend('exist', {
        validate: value => this.validPhoneNumber(value),
        getMessage: () => '手机号未注册'
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

    resetPassword () {
      this.$validator.validate('form.*')
        .then(() => this.$validator.validate('password.*'))
        .then(valid => {
          if (valid) {
            return this.resetPasswordAction({
              params: {
                smsId: this.smsId,
                smsCode: this.smsCode,
                phoneNumber: this.formData.phoneNumber
              },
              data: this.formData
            })
          }
        })
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    }
  }
</script>

<style scoped lang="less">
  .van-popup {
    &--right {
      width: 100%;
      height: 100%;
    }
  }
</style>
