<template>
    <div class="card" v-if="SHOPPING_CART_LIST && SHOPPING_CART_LIST.inCard.length > 0">
        <div class="card-list" v-for="(item, index) in SHOPPING_CART_LIST.inCard" v-bind:key="index">
            <ProductInCard
                :productName="item.productData.name"
                :productPrice="item.productData.price"
                :productImage="item.productData.image"
                :productCount="item.count"
                :productIndex="index"
            />
        </div>
        <div class="card__sum">
            <div class="card__sum-clear" @click="CLEAR_CART"><span>Очистить корзину</span></div>
            <div class="card__sum-sum"><span>ИТОГО: {{SHOPPING_CART_LIST.sumPrice}}</span></div>
        </div>
    </div>
    <div v-else class="card-empty">
        <p>Ваша корзина пуста</p>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import ProductInCard from '@/components/ProductInCard.vue'
import { inCard, productList, thisState } from '@/types'

@Component({
  components: {
    ProductInCard
  },
  computed: {
    ...mapGetters(['SHOPPING_CART_LIST'])
  },
  methods: {
    ...mapActions(['CLEAR_CART'])
  }
})
export default class CardInMenu extends Vue {}
</script>
<style lang="stylus">
.card
    width 100%
    max-width 100%
    display flex
    justify-content space-around
    flex-wrap wrap
    display flex
.card-list
    width 620px
    height 100px
    background #fff
    display flex
    box-shadow 0px 0px 12px #ccc
    margin 0px 0px 10px
.card__sum
    width 100%
    position fixed
    text-align center
    height 50px
    background #fff
    box-shadow 0px 0px 12px #ccc
    bottom 0px
    left 0px
    display flex
    justify-content space-around
.card__sum-sum
    width 50%
    text-align center
    font-weight bold
    font-size 14px
    color #784fa1
    padding 5px 0px
    margin 10px auto
.card__sum-clear
    width 50%
    margin 15px auto
    font-weight bold
    text-align center
    color #555
    & span
        width auto
        padding 7px 20px
        cursor pointer
        background #f1f1f1
        border-radius 24px
        font-size 12px
        transition .25s
      & :hover
         background #ccc
.card-empty
    color #784fa1
    font-weight bold
</style>
