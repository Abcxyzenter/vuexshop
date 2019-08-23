<template>
  <div id="app">
    <div class="nav--wrapper">
      <div class="nav">
        <router-link to="/" append>магазин</router-link>
        <router-link to="/card" append><CardInMenu/></router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardInMenu from '@/components/CardInMenu.vue'

@Component({
  components: {
    CardInMenu
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
.nav--wrapper
  display flex
  width 100%
  text-align center
  position fixed
  left 0px
  top 0px
  height 60px
  background #fff
  box-shadow 0px 0px 12px #ccc
  z-index 9
.nav
  display flex
  width 100%
  max-width 1279px
  justify-content space-around
  height 60px
  margin 0px auto
  align-content center
  a
    font-weight bold
    color #2c3e50
    text-decoration none
    margin 0px auto
    height 100%
    line-height 60px
    &.router-link-exact-active
      color #784fa1

.content
  max-width 1279px
  width 100%
  margin 100px auto
  height 100%
</style>
