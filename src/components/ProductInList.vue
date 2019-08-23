<template>
    <transition tag="div" name="fade" mode="out-in" appear>
        <div class="product-list__item" >
            <div class="product-list__item-image">
                <img :src=" 'https://robotrush.ru/fortest/'+productImage">
            </div>
            <div class="product-list__item-name">
                {{ productName }}
            </div>
            <div class="product-list__item-price">
                цена {{ productPrice }} р
            </div>
            <div class="product-list__item-buy" >
                <span @click="BUY_ITEM( productIndex )">КУПИТЬ</span>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  methods: {
    ...mapActions(['BUY_ITEM'])
  }
})
export default class ProductInList extends Vue {
  @Prop() private productName!: string;
  @Prop() private productPrice!: number;
  @Prop() private productImage!: string;
  @Prop() private productIndex!: number;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.product-list__item
    width 240px
    height 380px
    background #fff
    box-shadow 0px 0px 12px #ccc
    margin 0px 20px 40px

.product-list__item-image
    width 100%
    & img
      max-width 100%

.product-list__item-name
    text-align center
    width 100%
    box-sizing border-box
    padding 0px 20px
    margin 10px 0px 20px

.product-list__item-price
    width 100%
    text-align center
    font-size 18px
    color #784fa1
    box-sizing border-box
    padding 0px 20px
    margin 10px 0px 20px

.product-list__item-buy
    width 100%
    & span
        cursor pointer
        padding 10px 30px
        background #784fa1
        border-radius 4px
        transition .25s
        color #fff
      & :hover
        background #a86ee0
.fade-enter-active, .fade-leave-active
    transition opacity .5s;

.fade-enter, .fade-leave-to
    opacity 0
</style>
