<template>
  <div>
    <cell-group>
      <field label="用户名"
             v-model.trim="formData.username"
             name="username"
             data-vv-as="用户名"
             v-validate="{required:true,regex:/^1\d{10}$/}"
             :error="errors.has('username')"
             :error-message="errors.first('username')"/>
      <field label="密码"
             type="password"
             v-model="formData.password"
             name="password"
             data-vv-as="密码"
             v-validate="{required:true}"
             :error="errors.has('password')"
             :error-message="errors.first('password')"/>
    </cell-group>
    <router-link :to="{name:'registry'}">注册</router-link>
    <router-link :to="{name:'resetPwd'}">忘记密码</router-link>
    <v-button @click="doLogin">登录</v-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Field, CellGroup, Button } from 'vant'

  import { namespace } from 'vuex-class'

  const securityModule = namespace('security')
  @Component({
    components: {
      CellGroup,
      Field,
      VButton: Button
    }
  })
  export default class Login extends Vue {
    formData = {
      username: '',
      password: '',
      remember: true
    }

    @securityModule.Action('login')
    login

    @securityModule.State('savedRoute')
    savedRoute

    doLogin () {
      this.$validator.validateAll().then(valid => {
        return valid && this.login(this.formData).then(rsp => {
          let { name, query, params } = this.savedRoute
          // 登录成功之后,替换为掉登录之前的地址
          this.$router.replace({ name, query, params })
          return rsp
        })
      })
    }
  }
</script>

<style scoped>

</style>
