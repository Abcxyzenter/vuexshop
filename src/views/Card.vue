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
            <div class="card__sum-sum">ИТОГО {{SHOPPING_CART_LIST.sumPrice}}</div>
            <div class="card__sum-clear" @click="CLEAR_CART">Очистить корзину</div>
        </div>
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
    width 680px
    height 120px
    background #fff
    display flex
    box-shadow 0px 0px 12px #ccc
    margin 0px 0px 20px
.card__sum
    width 100%
    position fixed
    text-align center
    height 90px
    background #fff
    box-shadow 0px 0px 12px #ccc
    bottom 0px
    left 0px
.card__sum-sum
    width 100%
    text-align center
    font-weight bold
    color #784fa1
    padding 10px 0px
.card__sum-clear
    cursor pointer
    margin 0px auto
    padding 10px 20px
    font-weight bold
    color #555
</style>
