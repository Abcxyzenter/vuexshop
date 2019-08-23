<template>
    <div class="card-link">корзина <span>{{SHOPPING_CART_COUNTER}}</span></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
@Component({
  computed: {
    ...mapGetters(['SHOPPING_CART_COUNTER'])
  }
})
export default class CardInMenu extends Vue {}
</script>
<style lang="stylus">
.card-link
    position relative
    & span
        position absolute
        top 15px
        right -25px
        width 20px
        height 20px
        background #784fa1
        color #fff
        font-size 11px
        text-align center
        line-height 20px
        border-radius 50%

</style>
