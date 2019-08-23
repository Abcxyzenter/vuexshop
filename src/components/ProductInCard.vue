<template>
    <transition tag="div" name="fade" mode="out-in" appear>
        <div class="product-card__item">
            <div class="product-card__item-image">
                <img :src=" 'https://robotrush.ru/fortest/'+productImage">
            </div>
            <div class="product-card__item-name">
                <span>{{ productName }}</span>
            </div>
            <div class="product-card__item-price">
                <span>Цена {{ productPrice }} р</span>
            </div>
            <div class="product-card__item-options">
                <div class="product-card__item-options--counter">
                  в корзине: {{ productCount }}
                </div>
                <div @click="DECREMENT_ITEM( productIndex )" class="product-card__item-options--decrement">
                   <span>-</span>
                </div>
                <div @click="INCREMENT_ITEM( productIndex )" class="product-card__item-options--increment">
                    <span>+</span>
                </div>
                <div @click="REMOVE_ITEM( productIndex )" class="product-card__item-options--delete">
                   <span>удалить</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  methods: {
    ...mapActions(['INCREMENT_ITEM', 'DECREMENT_ITEM', 'REMOVE_ITEM'])
  }
})
export default class ProductInCard extends Vue {
    @Prop() private productName!: string;
    @Prop() private productPrice!: number;
    @Prop() private productImage!: string;
    @Prop() private productIndex!: number;
    @Prop() private productCount!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .product-card__item
        min-width 100%
        width 100%
        flex 1 0 auto
        display flex
    .product-card__item-image
        width 140px
        max-width 30%
        max-height 100%
        position relative
        display flex
        text-align center
        & img
          height 100%
          width auto
          max-width auto
    .product-card__item-name
        text-align center
        width 30%
        flex 1 0 auto
        display flex
        box-sizing border-box
        padding 0px 40px
        border-right 1px solid #f1f1f1
        margin 0px
        & span
            margin auto
            padding 0px
            font-weight bold
            flex 1 0 auto
    .product-card__item-price
        width 15%
        flex 1 0 auto
        text-align center
        font-size 14px
        color #784fa1
        box-sizing border-box
        padding 0px 20px
        margin 0px
        display flex
        border-right 1px solid #f1f1f1
    & span
        margin auto
        font-weight bold
        flex 1 0 auto
    .product-card__item-options
        width 20%
        flex 1 0 auto
        text-align center
        display flex
        flex-wrap wrap
        align-self center
    .product-card__item-options--counter
        width 100%
        font-weight bold
        margin 0px 0px 10px
    .product-card__item-options--decrement,
    .product-card__item-options--increment
        width 50%
        margin 0px 0px 10px
        text-align center
        display flex
        & span
            cursor: pointer
            width 30px
            max-width 30px
            height 30px
            max-height 30px
            line-height 30px
            border-radius 8px
            transition .25s
            flex 0 1 auto
            background #f1f1f1
          & :hover
                background #ccc
    .product-card__item-options--decrement span
        aligh-self flex-end
        margin 0px 5px 0px auto
    .product-card__item-options--increment span
        aligh-self flex-start
        margin 0px auto 0px 5px
    .product-card__item-options--delete
        width 100%
        font-size 12px
        & span
            cursor pointer
            color #555
            transition .25s
        & :hover
            color orangered
    .fade-enter-active, .fade-leave-active
        transition opacity .5s;
    .fade-enter, .fade-leave-to
        opacity 0
</style>
