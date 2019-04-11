<template>
  <div>
    <cell-group>
      <cell>
        <template #title>
          推送通知
        </template>
      </cell>
      <cell>
        <template #title>
          提示音
        </template>
      </cell>
    </cell-group>
    <cell-group>
      <cell>
        <template #title>
          推送通知
        </template>
      </cell>
    </cell-group>

    <cell-group>
      <cell>
        <template #title>
          关于小蜜蜂
        </template>
      </cell>
    </cell-group>
    <v-button @click="logout">退出</v-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Cell, CellGroup, Button } from 'vant'

  import { namespace } from 'vuex-class'

  const securityModule = namespace('security')
  @Component({
    components: {
      CellGroup,
      Cell,
      VButton: Button
    }
  })
  export default class Settings extends Vue {
    @securityModule.Action('logout')
    logoutAction

    logout () {
      this.logoutAction().then(() => {
        this.$router.replace({ name: 'home' })
      })
    }
  }
</script>

<style scoped>

</style>
